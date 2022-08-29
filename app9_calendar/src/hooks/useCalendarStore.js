import { useSelector, useDispatch } from "react-redux"
import { onAddEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";
export const useCalendarStore = () => {

    const { events, activeEvent } = useSelector( state => state.calendar)
    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async(calendarEvent) => {
        //Backend

        if (calendarEvent._id) {
            // Actualizar evento
            dispatch(onUpdateEvent(calendarEvent));
        }
        else {
            // Crear evento
            dispatch(onAddEvent( { _id: new Date().getTime(), ...calendarEvent })); // Como no tiene id se lo añado
        }
    }

    return {
        events,
        activeEvent,
        setActiveEvent,
        startSavingEvent
    }
}