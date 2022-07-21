import { useState } from "react"

export const CounterApp = () => {

    // Esto es una forma
    // const [{counter1, counter2}, setCounter] = useState({ // El estado pueden ser varias variables
    //     counter1: 10,
    //     counter2: 20
    // });

    
    // return (
    //     <>
    //     <h2> Counter: {counter1} {counter2}</h2>

    //     <hr/>
    //     <button onClick = { () => {setCounter({
    //         counter1: counter1+1, // Tienen que aparecer todos
    //         counter2: counter2+1})}}>+1</button>
    //     </>
    // )

    // Otra forma para cuando tengamos muchas variables en el estado
    const [state, setState] = useState( {
        counter1: 10,
        counter2: 20
    })
    const {counter1, counter2} = state; // Se desestructura para poder seguir usando las variables por separado

    return (
        <>
        <h2> Counter: {counter1} {counter2}</h2>

        <hr/>
        <button onClick = { () => {setState({
            ...state,
            counter1: counter1+1 // Solo se cambia el counter1
            })}}>+1</button>
        </>
    )
}