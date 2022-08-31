import React from 'react'
import { useForm } from '../hooks/useForm';

export const ToDoAdd = ({onNewToDo}) => {

    const {formState, onInputChange, onResetForm} = useForm({
        description: ""
    });

    const {description} = formState;


    const onFormSubmit = (event) => {
        event.preventDefault();    

        if (description.length >1) {
            
            const newToDo = {
                id: new Date().getTime(),
                description: description,
                done: false
            }

            onNewToDo(newToDo);
            onResetForm();
        }
    }

    

    return (
        <form onSubmit={onFormSubmit}>
            <input 
            type="text"
            placeholder="Descripción..."
            className="form-control"
            name="description"
            value = {description}
            onChange = {onInputChange}
            />

            <button type="submit" className="btn btn-primary mt-2">
                Agregar
            </button>
        </form>
    )
}
