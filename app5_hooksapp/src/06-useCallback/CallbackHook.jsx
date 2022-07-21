import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
    //useCallback sirve para memorizar funciones
    const increment = useCallback ( (sum) => {
        setCounter((value) => value+sum);
    }
    ,[]
    );
   
    // const increment = () => {
    //     setCounter(counter+1);
    // }

    return (
        <>
            <h2>useCallback Hook: {counter}</h2>

            <ShowIncrement increment={increment}/>

        </>
    )
}