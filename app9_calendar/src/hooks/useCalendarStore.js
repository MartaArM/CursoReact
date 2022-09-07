import { useSelector, useDispatch } from "react-redux"
import calendarApi from "../api/calendarApi";
import { onAddEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendarSlice";
export const useCalendarStore = () => {

    const { events, activeEvent } = useSelector( state => state.calendar);
    const { user } = useSelector( state => state.auth)
    const dispatch = useDispatch();

    const setActiveEvent = (calendarEvent) => {
        dispatch(onSetActiveEvent(calendarEvent));
    }

    const startSavingEvent = async(calendarEvent) => {
        //Backend

        if (calendarEvent._id) { // Si existe el evento
            // Actualizar evento
            dispatch(onUpdateEvent());
        }
        else {
            // Crear evento
            const {data} = await calendarApi.post('/events', calendarEvent);
            console.log(data);
            dispatch(onAddEvent( { id: data.evento.id, ...calendarEvent, user })); // Como no tiene id se lo añado
        }
    }

    const deleteEvent = (calendarEvent) => {
        dispatch(onDeleteEvent(calendarEvent));
    }

    return {
        events,
        activeEvent,
        setActiveEvent,
        startSavingEvent,
        deleteEvent
    }
}