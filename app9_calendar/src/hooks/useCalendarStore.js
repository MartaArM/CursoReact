import { useSelector, useDispatch } from "react-redux"
import calendarApi from "../api/calendarApi";
import { convertDateEvents } from "../helpers/convertDateEvents";
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
            dispatch(onAddEvent( { id: data.evento.id, ...calendarEvent, user })); // Como no tiene id se lo añado
        }
    }

    const deleteEvent = (calendarEvent) => {
        dispatch(onDeleteEvent(calendarEvent));
    }

    const startLoadingEvents = async() => {
        try {
            const {data} = await calendarApi.get('/events');
            const events = convertDateEvents(data.eventos);

            console.log(events);
        } catch (error) {
            console.log(error);
            throw new Error("Error cargando eventos");
        }
    }

    return {
        events,
        activeEvent,
        setActiveEvent,
        startSavingEvent,
        deleteEvent,
        startLoadingEvents
    }
}