import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../../firebase/config";
import { loginGoogle, loginUserEmailPassword, logoutUser, registerUserEmailPassword } from "../../firebase/providers"
import { clearLogout } from "../journal/journalSlice";
import { checkingAuth, login, logout } from "./authSlice"

export const checkingUser = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingAuth());
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
        dispatch(checkingAuth()); // Cambia el estado a 'checking'

        const resp = await registerUserEmailPassword(email, password, displayName);
        
        const {ok, uid, photoURL} = resp;

        if (ok) {
            return dispatch(login({uid, displayName, email, photoURL}));
        }
        else {
            return dispatch(logout(resp.errorMessage));
        }
    }
}

export const loginUserEP = (email, password) => {
    // signinWithEmailandPassword
    return async(dispatch) => {
        dispatch(checkingAuth()); // Cambia el estado a 'checking'

        const resp = await loginUserEmailPassword(email, password);
        const {ok, uid, photoURL, displayName} = resp;

        if (ok) {
            return dispatch(login({uid, displayName, email, photoURL}));
        }
        else {
            return dispatch(logout(resp.errorMessage));
        } 
    }
}

export const logoutUs = () => {
    return async(dispatch) => {
        dispatch(checkingAuth());
        const resp = await logoutUser();

        if (resp.ok) {
            dispatch(clearLogout());
            dispatch(logout());
        }
    }
}