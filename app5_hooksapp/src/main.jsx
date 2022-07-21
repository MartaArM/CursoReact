import React from 'react'
import ReactDOM from 'react-dom/client'
import { Padre } from './07-tarea-memo/Padre'
import { HooksApp } from './HooksApp'

// import './08-useReducer/intro-reducer'

import './index.css'
import { ToDoApp } from './08-useReducer/ToDoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HooksApp /> */}
    <ToDoApp/>
  </React.StrictMode>
)
