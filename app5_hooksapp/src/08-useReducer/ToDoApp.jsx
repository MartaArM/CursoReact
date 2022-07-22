import { useToDo } from "../hooks/useToDo";
import { ToDoAdd } from "./ToDoAdd";
import { ToDoList } from "./ToDoList";

export const ToDoApp = () => {

    const {toDos, handleNewToDo, removeToDo, doneToDo, toDosLength, pendingToDos} = useToDo();
    
    return (
        <>
            <h1> ToDoApp </h1>
            <h2> Totales: {toDosLength} Pendientes: {pendingToDos}</h2>
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
