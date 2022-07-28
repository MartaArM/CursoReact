import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'


const init = () => {
    const user = JSON.parse( localStorage.getItem('user')); // Cogemos el usuario del localStorage
    const logged = (user) ? true : false;


    return {
        logged: logged,
        user: user
    }
}

export const AuthProvider = ({children}) => {

    // La función de inicialización se encarga de coger el usuario del almacenamiento local.
    const [state, dispatch] = useReducer (authReducer, {}, init);

    const login = (name) => { // Funcion de login

        const user = {
            id: 'ABC',
            name: name
        };

        const action = {
            type: types.login,
            payload: user
        }

        // Una vez hacemos login y ya tenemos el usuario, lo guardamos en el almacenamiento
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }

    const logout = () => { // Funcion de login

        const action = {
            type: types.logout
        }

        localStorage.removeItem('user');

        // Una vez hacemos login y ya tenemos el usuario, lo guardamos en el almacenamiento
        // localStorage.setItem('user', JSON.stringify(user));
        dispatch(action);
    }

    return (
        <AuthContext.Provider value = {{
            state: state,
            login: login,
            logout: logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
