import { useEffect, useMemo, useState } from "react";

export const useForm = (initialForm = {}, formValidations) => {
    // Con formValidations vamos a comprobar si un campo es correcto o no

    const [formState, setFormState] = useState( initialForm );

    // ----------- VALIDACIONES ------------ //

    const [formValidation, setFormValidation] = useState({});
    
    useEffect(() => {
      createValidators(); // Solo se ejecuta cuando el formulario cambia. 
    }, [formState])

    const isFormValid = useMemo(() => {
        for (const element of Object.keys(formValidation)) {
            if (formValidation[element] != null) {
                return false;
            }
        }
        return true;
    }, [formValidation])

    const createValidators = () => {
        const formCheckedValues = {};

        // Recorremos los valores del formulario

        for (const field of Object.keys(formValidations)) { // Recorre los nombres de los elementos del array
            const [funcion, errorMessage] = formValidations[field]; // Desestructuramos la funcion y el mensaje de error que le hemos pasado en el RegisterPage
            formCheckedValues[field+'Valid'] = funcion(formState[field]) /* si se cumple la funcion, no se manda nada */? null : errorMessage;
        }

        setFormValidation(formCheckedValues);
    }

    // ----------- VALIDACIONES ------------ //
    
    const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormState( {
        ...formState,
        [name]: value
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
    onResetForm: onResetForm,
    formValidation: formValidation,
    isFormValid: isFormValid
    }
}