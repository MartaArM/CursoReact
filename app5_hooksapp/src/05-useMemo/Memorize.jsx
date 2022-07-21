import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"

const heavyStuff = (iterations = 100) => {
    for (let i=0; i<iterations; i++){
        console.log("A");
    }

    return "Iteraciones realizadas";
}

export const Memorize = () => {

    const {counter, increment} = useCounter(1000);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(()=>heavyStuff(counter) , [counter]); // La función solo se llama cuando counter cambia

    return (
        <>
            <h2>Counter: {counter}</h2>

            <h4>{memorizedValue}</h4>
                        
            <button onClick={increment} className="btn btn-primary">
                +1
            </button>

            <button className="btn btn-primary" onClick={() => {setShow(!show)}}>
                Show/Hide {JSON.stringify(show)}
            </button>

        </>
    )
}