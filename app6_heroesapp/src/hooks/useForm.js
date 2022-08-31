// CUSTOM HOOK

import { useState } from "react"

export const useForm = (initialForm = {}) => { //Le vamos a pasar el valor de un objeto para poder inicializar el formulario como queramos.
                                               // En el caso de que el estado inicial no exista, ponemos un objeto vacío por defecto para que no de error
    
    const [formState, setFormState] = useState( initialForm );

    const onInputChange = ({target}) => {
        const {name, value} = target; //Desestructuramos el nombre y el valor
        setFormState( {
            ...formState, //Desestructurar el formulario para que los valores que no cambian se queden igual
            [name]: value //decimos que cambie solo el valor que tenga por clave el name
        });
    }

    const onResetForm = () => {
        setFormState( {
            ...initialForm
        });
    }

    return {
       formState: formState,
       onInputChange: onInputChange,
       onResetForm: onResetForm
    }
}