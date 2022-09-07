import { useDispatch, useSelector } from "react-redux"
import calendarApi from "../api/calendarApi";
import { clearErrorMessage, onLogin, onLogout, setChecking } from "../store/auth/authSlice";
import { onCleanInformation } from "../store/calendar/calendarSlice";

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

    const startRegister = async({name, email, password}) => {
        dispatch(setChecking());

        try {
            const {data} = await calendarApi.post('/auth/new', { name, email, password});
            localStorage.setItem('token', data.token); // Guardamos en el almacenamiento el token del usuario
            dispatch(onLogin({name: data.name, uid: data.uid}));
            
        } catch (error) {
            console.log(error.response.data);
            dispatch(onLogout( (error.response.data.msg) ?  error.response.data.msg : 'Credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10);
            // throw new Error("Contacte con administrador");
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');

        if (token) {
            try {
                const {data} = await calendarApi.get('auth/renew');
                localStorage.setItem('token', data.token);
                dispatch(onLogin({name: data.name, uid: data.uid}));
            } catch (error) {
                localStorage.clear(); // Quitamos el token del almacenamiento ya que no es válido
                dispatch(onLogout('La sesión expiró'));
            }
        }
        else {
            return dispatch(onLogout('La sesión expiró'));
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
        dispatch(onCleanInformation());
    }


    return {
        status,
        user,
        errorMessage,

        startLogin,
        startRegister,
        checkAuthToken,
        startLogout
    }
}
