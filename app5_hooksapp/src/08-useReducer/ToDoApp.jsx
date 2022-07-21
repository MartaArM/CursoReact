import { useEffect, useReducer } from "react"
import { ToDoAdd } from "./ToDoAdd";
import { ToDoList } from "./ToDoList";
import { toDoReducer } from "./toDoReducer";

const initialState = [
    // {
    //     id: new Date().getTime(),
    //     description: 'Recolectar la piedra del Alma',
    //     done: false
    // },
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []; // Si no encuentra el item, devuelve un arreglo vacío
}

export const ToDoApp = () => {

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

    return (
        <>
            <h1> ToDoApp </h1>
            <hr/>

            <div className="row">
                <div className="col-7">
                    <ToDoList toDos={toDos} onDeleteToDo={removeToDo} onDoneToDo={doneToDo}/>
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>

                    <ToDoAdd onNewToDo={handleNewToDo}/>
                </div>
            </div>

            
        </>
    )
}
