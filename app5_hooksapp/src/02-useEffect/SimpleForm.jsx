import { useEffect, useState } from "react"
import { Message } from "./Message"


// Aplicación de formulario simple con hook useState
export const SimpleForm = () => {

    const [formState, setFormState] = useState( {
        username: "marta", //Esto normalmente es vacío
        email: "marta@gmail.com"
    });

    const {username, email}  = formState; //Desestructuramos los valores

    const onInputChange = ({target}) => { //El targes en este caso es el input
        const {name, value} = target; //Desestructuramos el nombre y el valor
        setFormState( {
            ...formState, //Desestructurar el formulario
            [name]: value //decimos que cambie solo el valor que tenga por clave el name

        });
    }
    
    useEffect( () => {
        //console.log("USEEFFECT")
    }, []) // Si aqui pongo un array vacío, el useEffect solo se llama una vez al principio. Si no lo pongo, se llama cada vez que inserto algo al input

    // Se recomienda usar un useEffect por cada acción que vaya a haber
    useEffect( () => {
        //console.log("Form changed")
    }, [formState]) // Se llama cuando el formulario cambia


    useEffect( () => {
        //console.log("Email changed")
    }, [email]) // Se llama cuando el email cambia

    return (
        <>
            <h1>Simple Form</h1>

            <input 
                type="text"
                className="form-control"
                placeholder = "Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <br/>
            <input 
                type="email"
                className="form-control"
                placeholder = "Email"
                name="email"
                onChange={onInputChange}
            />

            { //Se muestra el mensaje si el usuario es marta2
                (username==='marta2') && <Message/>
            }
            
        </>
    )
}