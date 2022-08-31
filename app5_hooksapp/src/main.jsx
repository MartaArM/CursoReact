import React from 'react'
import ReactDOM from 'react-dom/client'
import { Padre } from './07-tarea-memo/Padre'
import { HooksApp } from './HooksApp'

import './index.css'
import { ToDoApp } from './08-useReducer/ToDoApp'
import { MainApp } from './09-useContext/MainApp'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    {/* <React.StrictMode> */}
      {/* <ToDoApp/> */}
      <MainApp/>
    {/* </React.StrictMode> */}
  </BrowserRouter >
)
