import {useState} from 'react';

export default function App() {

    const [contador, setCounter] = useState(0); // Esto es el hook. Ponemos contador a 0

    const aumentarContador = () => {
        setCounter(contador+1); // No lo podemos hacer directamente. Se hace con la funcion setCounter
    }

    const disminuirContador = () => {
        setCounter(contador-1);
    }

    const resetearContador = () => {
        setCounter(0);
    }
    return ( 
        <>
            <h1>Bienvenid@</h1>
            <button onClick = { aumentarContador }> +1 </button>
            <button onClick = { disminuirContador }> -1 </button>
            <button onClick = { resetearContador }> Reset </button>
            <h2>{ contador }</h2>
        </>
    )
}