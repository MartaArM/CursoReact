import { loginGoogle } from "../../firebase/providers"
import { checkingAuth } from "./authSlice"

export const checkingUser = (email, password) => {
    return async(dispatch) => {
        dispatch(checkingAuth())
    }
}

export const startGoogleLogin = () => {
    return async(dispatch) => {
        dispatch(checkingAuth());

        const result = loginGoogle();
    }
}