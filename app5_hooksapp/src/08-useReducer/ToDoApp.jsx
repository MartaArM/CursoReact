import { useToDo } from "../hooks/useToDo";
import { ToDoAdd } from "./ToDoAdd";
import { ToDoList } from "./ToDoList";

export const ToDoApp = () => {

    const {toDos, handleNewToDo, removeToDo, doneToDo} = useToDo();
    
    return (
        <>
            <h1> ToDoApp </h1>
            <h2> Totales: {toDos.length} Pendientes: {toDos.filter( (todo) => todo.done == false).length}</h2>
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
