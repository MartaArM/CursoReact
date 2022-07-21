import { useEffect, useState } from "react"

export const Message = () => {
     
    //Esto es un ejemplo del useefect
    useEffect( () => {

        const onMouseMove = ({x, y} /*pasamos el evento*/) => { //Esta funcion se crea para poder llamar al removeEventListener. Si la pones directamente no funciona
            const cords = {x, y};
            console.log(cords)
        }

        window.addEventListener('mousemove',  onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove); // Esto hace que el evento "se elimine" cuando no se cumple la condicion
        }
    }, []) 


    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}