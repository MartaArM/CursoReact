import "react-datepicker/dist/react-datepicker.css";

import { useState } from "react";
import Modal from "react-modal";
import DatePicker from "react-datepicker";
import { useForm } from "../../hooks/useForm";
import { addHours, startOfDay } from "date-fns";

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
  title: 'Título',
  notes: 'Notas',
  start: new Date(),
  end: addHours(new Date(), 2)
}

Modal.setAppElement('#root');

export const EventView = () => {

  const [isOpen, setIsOpen] = useState(true);

  const {formState, onInputChange} = useForm(initialState);
  const {title, notes, start, end} = formState;

  const onCloseModal = () => {
    console.log("Cerrando modal");
    setIsOpen(false);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form className="container">

          <div className="form-group mb-2">
              <label>Fecha y hora inicio</label>
              <DatePicker name='start' selected={start} onChange={onInputChange} className='form-control'/> 

          </div>

          <div className="form-group mb-2">
              <label>Fecha y hora fin</label>
              <input className="form-control" placeholder="Fecha fin"
              name='end'
              onChange={onInputChange}
              />
          </div>

          <hr />
          <div className="form-group mb-2">
              <label>Titulo y notas</label>
              <input 
                  type="text" 
                  className="form-control"
                  placeholder="Título del evento"
                  name="title"
                  autoComplete="off"
                  value={title}
                  onChange={onInputChange}
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
                  onChange={onInputChange}
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
