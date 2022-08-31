import { useState } from "react"
import { useCounter } from "../hooks/useCounter"

// Aplicación que teien un contador y varios botonespara aumentar o disminuir el valor.
export const CounterWithCustomHook = () => {

    const {counter, increment, incrementPerValue, decrement} = useCounter(); // Usa un hook personalizado que está en la carpeta "../hooks"

    
    return (
        <>
            <h1>Contador con Hook: {counter}</h1>

            <button className = "btn btn-primary" onClick = {() => incrementPerValue(2)}>+2</button> 
            <button className = "btn btn-primary" onClick = {increment}>+1</button> 
            <button className = "btn btn-primary" onClick={decrement}>-1</button>
        </>
    )
}