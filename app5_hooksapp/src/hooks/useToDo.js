import { useEffect, useReducer } from "react";
import { toDoReducer } from "../08-useReducer/toDoReducer";

const init = () => { // Función de inicialización
    return JSON.parse(localStorage.getItem('todos')) || []; // Si no encuentra el item, devuelve un arreglo vacío
}

export const useToDo = (initialState = []) => { 


    const [toDos, dispatch] = useReducer(toDoReducer, initialState, init); //Se le pasa el reducer que es una funcion (toDoReducer) y el estado inicial
                                                                           // init inicializa el reducer

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(toDos));
    }, [toDos])
    

    const handleNewToDo = (todo) => {
        const action = { // Esta es la accion que vamos a pasar al useReducer
            type: "Add Todo",
            payload: todo
        }

        dispatch(action); // Llamar al reducer
    }

    const removeToDo = (id) => {
        const action = { // Esta es la accion que vamos a pasar al useReducer
            type: "Remove Todo",
            payload: id
        }

        dispatch(action); // Llamar al reducer
    }

    const doneToDo = (id) => {
        const action = { // Esta es la accion que vamos a pasar al useReducer
            type: "Done Todo",
            payload: id
        }

        dispatch(action);
    }

    return {
        toDos: toDos,
        handleNewToDo: handleNewToDo,
        removeToDo: removeToDo,
        doneToDo: doneToDo
    }
}