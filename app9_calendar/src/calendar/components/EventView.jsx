import "react-datepicker/dist/react-datepicker.css";
import 'sweetalert2/src/sweetalert2.scss'

import { useEffect, useMemo, useState } from "react";
import Modal from "react-modal";
import DatePicker, {registerLocale} from "react-datepicker";
import { useForm } from "../../hooks/useForm";
import es from 'date-fns/locale/es';
import { addHours, differenceInSeconds } from "date-fns";
import Swal from "sweetalert2";
import { useUIStore } from "../../hooks/useUIStore";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useAuthStore } from "../../hooks/useAuthStore";

registerLocale('es', es)


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const initialState = {
  title: '',
  notes: '',
  start: new Date(),
  end: addHours(new Date(), 2)
}

Modal.setAppElement('#root');

export const EventView = () => {

  const [formSubmitted, setformSubmitted] = useState(false); // Verdadero si le damos al botón de guardar

  const {isModalOpen,  closeModal} = useUIStore();
  const {activeEvent, startSavingEvent} = useCalendarStore();

  const {formState, onInputChange, onDateChanged, onChangeValues} = useForm(initialState);
  const {title, notes, start, end} = formState;

  const {user} = useAuthStore();
  let isReadOnly = false;

  if (activeEvent)
    isReadOnly = ((user.uid != activeEvent.user.uid) && (activeEvent._id) ) ? true : false; 

  // Si ya le hemos dado al botón de guardar y el título está vacío, el campo del título de pone en rojo
  const titleClass = useMemo(() => {

    if (!formSubmitted) return '';

    return (title.length > 0)
    ? ''
    : 'is-invalid'
    
  }, [title, formSubmitted])

  useEffect(() => {
    

    if (activeEvent != null) {
      onChangeValues(activeEvent);
    }
  
  }, [activeEvent])
  

  // Cerrar el evento
  const onCloseModal = () => {
    closeModal();
  }

  // Se ejecuta cuando se manda la información al formulario
  const onSubmit = async(event) => {
    event.preventDefault();
    setformSubmitted(true);

    const date_diff = differenceInSeconds(end, start);
    
    // Mensajes de error si los datos no están correctos
    if (!isNaN(date_diff) && date_diff > 0 ) {
      
      if (title.length > 0) { // Datos correctos
        await startSavingEvent(formState);
        closeModal();
        setformSubmitted(false);
      }
      else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El título no puede ser vacío'
        })
      }

    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las fechas no son correctas'
      })
    }
  }
  
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>

          <div className="form-group mb-2">
              <label>Fecha y hora inicio</label>
              <DatePicker // Para elegir la fecha
                selected={start} 
                onChange={(event) => onDateChanged(event, 'start')} 
                className='form-control'
                dateFormat="Pp"
                showTimeSelect
                locale="es"
                value={start}
                timeCaption="Hora"
                readOnly={isReadOnly}
                /> 

          </div>

          <div className="form-group mb-2">
              <label>Fecha y hora fin</label>
              <DatePicker 
                minDate={start} // No se puede elegir una hora anterior a la de empezar
                selected={end} 
                onChange={(event) => onDateChanged(event, 'end')} 
                className='form-control'
                dateFormat="Pp"
                showTimeSelect // Para elegir la hora
                locale="es" // Idioma español
                timeCaption="Hora"
                readOnly={isReadOnly}
                /> 
          </div>

          <hr />
          <div className="form-group mb-2">
              <label>Titulo y notas</label>
              <input 
                  type="text" 
                  className= {"form-control " + titleClass}
                  placeholder="Título del evento"
                  name="title"
                  autoComplete="off"
                  value={title}
                  onChange={onInputChange}
                  readOnly={isReadOnly}
              />
              <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
          </div>

          <div className="form-group mb-2">
              <textarea 
                  type="text" 
                  className="form-control"
                  placeholder="Notas"
                  rows="5"
                  name="notes"
                  value={notes}
                  onChange={onInputChange}
                  readOnly={isReadOnly}
              ></textarea>
              <small id="emailHelp" className="form-text text-muted">Información adicional</small>
          </div>

          <button
              type="submit"
              className="btn btn-outline-info btn-block"
          >
              <i className="far fa-save"></i>
              <span> Guardar</span>
          </button>

      </form>

    </Modal>

  )

}
