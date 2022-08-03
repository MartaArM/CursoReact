import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { Provider } from 'react-redux'
import store from './store/store'
import { PokemonApp } from './PokemonApp'

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
  <Provider store={store}>
    < PokemonApp />
  </Provider>
  </React.StrictMode>
)