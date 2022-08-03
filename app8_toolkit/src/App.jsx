import logo from './logo.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import {increment} from './store/slices/counter/counterSlice'

function App() {
  
  // useSelector se utiliza para usar el state de ReactRedux
  const {counter} = useSelector((state) => state.counter); // Del state me interesa sacar el counter
  const dispatch = useDispatch(); // Para lanzar las acciones del store

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>¡Hola!</p>
        <p>
          <button type="button" onClick={() =>  dispatch(increment())}> {/* Llamamos a la funcion de incrementar del store */}
            El counter es: {counter}
          </button>
        </p>
        
      </header>
    </div>
  )
}

export default App
