import { useDispatch, useSelector } from "react-redux"
import calendarApi from "../api/calendarApi";
import { clearErrorMessage, onLogin, onLogout, setChecking } from "../store/auth/authSlice";

export const useAuthStore = () => {

    const {status, user, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({email, password}) => {
        dispatch(setChecking());

        try {
            const {data} = await calendarApi.post('/auth', { email, password});
            localStorage.setItem('token', data.token); // Guardamos en el almacenamiento el token del usuario
            dispatch(onLogin({name: data.name, uid: data.uid}));
            
        } catch (error) {
            console.log(error);
            dispatch(onLogout("Credenciales incorrectas"));
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10);
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
