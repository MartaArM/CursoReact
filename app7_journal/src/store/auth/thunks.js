import { loginGoogle } from "../../firebase/providers"
import { checkingAuth, login, logout } from "./authSlice"

export const checkingUser = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingAuth())
    }
}

// Logearse con la cuenta de Google
export const startGoogleLogin = () => {
    return async(dispatch) => {
        dispatch(checkingAuth());

        const result = await loginGoogle();

        if (result.ok) {
            dispatch(login(result));
        }
        else {
            dispatch(logout());
        }
    }
}