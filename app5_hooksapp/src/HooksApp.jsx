// import { CounterApp } from "./01-useState/CounterApp"
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook"
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook"
// import { SimpleForm } from "./02-useEffect/SimpleForm"
// import { MultipleCustomHooks } from "./03-examples/MultipleCustomHooks"
import { FocusScreen } from "./04-useRef/FocusScreen"
import { Memorize } from "./05-useMemo/Memorize"
import { CallbackHook } from "./06-useCallback/CallbackHook"
import { Padre } from "./07-tarea-memo/Padre"

export const HooksApp = () => {
    return (
        <>
            <h1>HooksApp</h1>
            {/* {<CounterApp/>} */}
            {/* {<CounterWithCustomHook/>} */}
            {/* {<SimpleForm/>} */}
            {/* <FormWithCustomHook/> */}
            {/* <MultipleCustomHooks/> */}
            {/* <FocusScreen/> */}
            {/* <Memorize/> */}
            {/* <CallbackHook/> */}
            <Padre/>
        </>
    )
}