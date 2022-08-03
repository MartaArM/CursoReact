import logo from './logo.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {increment, decrement, incrementBy} from './store/slices/counter/counterSlice'

function App() {
  
  // useSelector se utiliza para usar el state de ReactRedux
  const {counter} = useSelector((state) => state.counter); // Del state me interesa sacar el counter
  const dispatch = useDispatch(); // Para lanzar las acciones del store

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>El counter es: {counter}</p>
        <p>
          <button type="button" onClick={() =>  dispatch(increment())}> {/* Llamamos a la funcion de incrementar del store */}
            +1
          </button>

          <button type="button" onClick={() =>  dispatch(decrement())}> {/* Llamamos a la funcion de decrementar del store */}
            -1
          </button>

          <button type="button" onClick={() =>  dispatch(incrementBy(2))}> {/* Llamamos a la funcion de decrementar del store */}
            +2
          </button>
        </p>
        
      </header>
    </div>
  )
}

export default App
