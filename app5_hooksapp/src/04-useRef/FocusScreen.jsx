import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();

    const onClickBtn = () => {
        inputRef.current.select(); // Se pone el focus en el input
    }

    return (
        <>
            <h2>Focus Screen</h2>

            <input 
            type="text" 
            placeholder="Ingrese su nombre" 
            className="form-control" 
            ref = {inputRef} /*Esto hace que inputRef sea este input en particular*/></input>
            
            <button className="btn btn-primary mt-2" onClick = {onClickBtn}>
                Set focus
            </button>
        </>
    )
}