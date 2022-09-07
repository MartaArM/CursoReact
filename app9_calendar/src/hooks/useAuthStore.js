import { useDispatch, useSelector } from "react-redux"
import calendarApi from "../api/calendarApi";

export const useAuthStore = () => {

    const {status, user, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({email, password}) => {

        try {
            const resp = await calendarApi.post('/auth', { email, password});
            // console.log(resp.data);
            
        } catch (error) {
            console.log(error);
            // throw new Error("Contacte con administrador");
        }
    }

    return {
        status,
        user,
        errorMessage,

        startLogin
    }
}
