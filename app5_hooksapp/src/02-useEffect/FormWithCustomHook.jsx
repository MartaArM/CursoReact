import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm"

// Formulario con hook personalizado: "../hooks/useForm"
export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm} = useForm({ //Estado inicial del formulario.
        username: "",
        email: "",
        password: ""
    });

    const {username, email, password} = formState; //Desestructuramos los valores
    
    return (
        <>
            <h1>Custom Hook Form</h1>

            <input 
                type="text"
                className="form-control"
                placeholder = "Username"
                name="username" //El name es importante ponerlo porque lo usa el hook
                value={username}
                onChange={onInputChange} //Llamamos a la función del hook
            />
            <br/>
            <input 
                type="email"
                className="form-control"
                placeholder = "Email"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <br/>
            <input 
                type="password"
                className="form-control"
                placeholder = "Clave"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button onClick = {onResetForm} className="btn btn-primary mt-2">Reset</button>

        </>
    )
}