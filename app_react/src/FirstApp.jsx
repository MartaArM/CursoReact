
/* Primera aplicación* /
export default function App() {
    return <h1>Hola Mundo</h1>;
} */

/* ------------------------------------ Agrupar varios elementos ----------------------------* /
export default function App() {
    return(
    <> // Se utiliza esto para agrupar varios elementos
        <h1>Bienvenido</h1>
        <h2>Este es mi nombre</h2>
    </>)
} */

/* --------------------------------Devolver variables al html--------------------------------------* /

function pasoVariable() {
    return "Marta";
}

const miNombre = "Marta";

export default function App() {
    return ( 
        <>
            <h1>Bienvenid@</h1>
            <p>{ miNombre }</p> {/* Le pasamos una variable * /}
            <p>{ pasoVariable() }</p> {/*Se pueden pasar funciones* /}
        </>
    )
}
*/

/* --------------------------- Propiedades que se pueden meter desde el navegador ---------------------------*/

//export default function App(props) {
// export default function App( { name, number } ) { // Es mejor desestructurarlo
//     return(
//         <>
//             <h1>Bienvenido</h1>
//             <h2>{ name }</h2>
//             <p>{ number }</p>
//         </>)
// } 

/* ---------------------------------------Prop-types ---------------------------------------- * /
import PropTypes from 'prop-types';

export default function App( { name, number } ) { // Es mejor desestructurarlo
    return(
        <>
            <h1>Bienvenido</h1>
            <h2>{ name }</h2>
            <p>{ number }</p>
        </>)
} 

// Decir de qué tipo de datos son las propiedades
App.propTypes = {
    name: PropTypes.string.isRequired // Para hacer la propiedad obligatoria
}

App.defaultProps = { // Propiedades por defecto
    name: 'No hay nombre'
}*/

/* --------------------------------------- Agregar eventos a botones----------------------------------------* /
let contador = 0;

// const imprimir = (event)  => {
//     contador+=1;
//     console.log("Imprimir " + contador);
//     console.log(event); // Podemos mandar la información del evento
// }

const imprimir = (event, value)  => {
    console.log(event); // Podemos mandar la información del evento
    console.log(value);
}

export default function App() {

    return ( 
        <>
            <h1>Bienvenid@</h1>
            {/* <button onClick = { imprimir }> Boton </button> * /}
             <button onClick = { (event) => imprimir(event, "hola") }> Boton </button> {/*Esto se usa si se quiere pasar algun valor a la función * /}
        </>
    )
}
*/
/* --------------------------------------- Hooks ----------------------------------------*/

import {useState} from 'react';

export default function App() {

    const [contador, setCounter] = useState(0); // Esto es el hook. Ponemos contador a 0

    const aumentarContador = () => {
        setCounter(contador+1); // No lo podemos hacer directamente. Se hace con la funcion setCounter
    }
    return ( 
        <>
            <h1>Bienvenid@</h1>
            <button onClick = { aumentarContador }> Boton </button>
            <h2>{ contador }</h2>
        </>
    )
}