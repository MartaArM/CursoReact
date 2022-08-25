import 'react-big-calendar/lib/css/react-big-calendar.css'
import { NavBar } from "../components/NavBar"
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import {addHours} from 'date-fns'
import { localizer } from "../../helpers/calendarLocalizer"
import { getMessages } from "../../helpers/getMessages"
import { EventBox } from "../components/EventBox"
import { useState } from 'react'
import { EventView } from '../components/EventView'
import { useUIStore } from '../../hooks/useUIStore'
import { useCalendarStore } from '../../hooks/useCalendarStore'

// const events = [{
//   title: 'Cumpleaños',
//   notes: 'Hay que comprar tarta',
//   start: new Date(),
//   end: addHours(new Date(), 2),
//   user: {
//     _id: '123',
//     name: 'Marta'
//   }
// }]

export const CalendarPage = () => {

  const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'month');

  const {isModalOpen, openModal} = useUIStore();
  const {events, setActiveEvent} = useCalendarStore();

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style= {
      backgroundColor: '#29e6b6',
      color: 'black'
    }

    return {
      style
    }
  }

  // Eventos

  const onDoubleClick = (event) => {
    openModal();
  }

  const onClick = (event) => {
    setActiveEvent(event);
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
  }


  return (
    <>
      <NavBar />

      <Calendar
        culture="es"
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }} // El 100% de la vista - 80 pixeles de la barra de navegación
        messages={getMessages()}
        eventPropGetter={eventStyleGetter}
        components={{ // Ponemos el componente nuevo que hemos creado para darle estilo
          event: EventBox
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onClick}
        onView={onViewChanged}
        defaultView={lastView}
      />

      <EventView />

    </>
  )
}
