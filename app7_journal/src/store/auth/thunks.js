import { loginGoogle, registerUserEmailPassword } from "../../firebase/providers"
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

export const registerUser = (email, password, displayName) => {
    return async(dispatch) => {
        dispatch(checkingAuth());

        const resp = await registerUserEmailPassword(email, password, displayName);
        
        const {ok, uid, photoURL} = resp;
        if (!ok) {
            return dispatch(logout(resp.errorMessage));
        }
        else {
            return dispatch(login({uid, displayName, email, photoURL}));
        }
    }
}