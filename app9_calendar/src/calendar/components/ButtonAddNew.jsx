import { addHours } from "date-fns";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useUIStore } from "../../hooks/useUIStore"

export const ButtonAddNew = () => {

    const {isModalOpen,  openModal} = useUIStore();
    const {setActiveEvent} = useCalendarStore();

    const onNewEvent = () => {
        setActiveEvent({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2),
            user: {
                _id: '123',
                name: 'Marta'
            }
        });
        openModal();
    }

  return (
    <button
        className="fab btn"
        onClick={onNewEvent}
    >
        <i className="fas fa-plus"> </i>
    </button>
  )
}
