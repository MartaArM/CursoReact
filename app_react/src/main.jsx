import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './FirstApp'

/*Importar hoja css para estilo*/
import './style/style.css';


ReactDOM.createRoot(document.getElementById('root')).render (
    <React.StrictMode>
        <App /> {/*Aqui va el mismo nombre que como se llama la función*/}
        {/* <App name="Marta" number={123}/> Se pueden pasar los parametros desde aqui también */}
        {/* Para pasar un numero hay que pasarlo con las llaves*/}
        {/* <App number={123}/> */}
    </React.StrictMode>
)