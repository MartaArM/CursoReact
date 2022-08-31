// CUSTOM HOOK

import { useEffect, useState } from "react"

// Este hook lo vamos a hacer para llamar a la api de breaking bad y que nos devuelva una frase
export const useFetch = (url) => { //Le vamos a pasar el valor de un objeto para poder inicializar el formulario como queramos
    
    const [state, setState] = useState( {
        data: null,
        isLoading: true
    })


    // https://breakingbadapi.com/api/quotes/2
    const getData = async() => {
        const resp = await fetch(url);
        const data = await resp.json();

        setState( {
            data: data,
            isLoading:false
        })


    }

    useEffect(() => {
        getData();
    }
    ,[url]
    )


    return {
       data: state.data,
       isLoading: state.isLoading
    }
}