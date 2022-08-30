import { addHours } from "date-fns";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useUIStore } from "../../hooks/useUIStore"

export const ButtonDelete = () => {

  const {activeEvent, deleteEvent} = useCalendarStore();
  const {isModalOpen} = useUIStore();

  const onDeleteEvent = () => {
      deleteEvent(activeEvent);
  }

  return (
    
    <button
        className="fab-trash btn"
        onClick={onDeleteEvent}
        style={{ display: (activeEvent == null || isModalOpen) ? 'none' : ''}}
    >
        <i className="fas fa-trash"> </i>
    </button>
  )
}
