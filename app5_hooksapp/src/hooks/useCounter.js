// CUSTOM HOOK

import { useState } from "react"

export const useCounter = (initialValue = 10) => { // Si no se manda initialValue por defecto es 10

    const [counter, setCounter] = useState(initialValue);

    const increment = () => {
        setCounter(counter+1);
    }

    const incrementPerValue = (value=5) => {
        console.log(value);
        setCounter(counter + value.valueOf());
    }

    const decrement = () => {
        if (counter>0)
            setCounter(counter-1);
    }

    return {
        counter: counter,
        increment: increment,
        incrementPerValue: incrementPerValue,
        decrement: decrement
    }
}