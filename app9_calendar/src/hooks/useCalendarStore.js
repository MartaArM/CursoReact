import { useSelector, useDispatch } from "react-redux"
export const useCalendarStore = () => {

    const { events, activeEvent } = useSelector( state => state.calendar)

    return {
        events
    }
}