import React from 'react'

export const ToDoItem = ({ todo, onDeleteToDo , onDoneToDo}) => {

    

    return (
         <li key={todo.id} className="list-group-item d-flex justify-content-between"> 
            <span onClick={() => onDoneToDo(todo.id)} 
            className={"align-self-center " + (/* Añadimos una clase condicional */todo.done ? "text-decoration-line-through" : "")}>
                {todo.description}
            </span>
            {/* <span>{todo.done ? 'Yes' : 'No'}</span> */}
            <button className="btn btn-primary" onClick={() => onDeleteToDo(todo.id)}>Borrar</button>
        </li>
    )
}
