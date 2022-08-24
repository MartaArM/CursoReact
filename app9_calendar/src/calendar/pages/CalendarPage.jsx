import { NavBar } from "../components/NavBar"
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import {addHours} from 'date-fns'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { localizer } from "../../helpers/calendarLocalizer"
import { getMessages } from "../../helpers/getMessages"

const events = [{
  title: 'Cumpleaños',
  notes: 'Hay que comprar tarta',
  start: new Date(),
  end: addHours(new Date(), 2)
}]

export const CalendarPage = () => {

    const eventStyleGetter = (event, start, end, isSelected) => {
      const style= {
        backgroundColor: '#29e6b6',
        color: 'black'
      }

      return {
        style
      }
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
        />

      </>
    )
}
