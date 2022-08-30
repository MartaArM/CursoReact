const express = require('express');
// Traemos las variables de entorno
require('dotenv').config();

// Servidor de express
const app = express();

// Rutas
// Autenticación de usuario
app.use('/api/auth', require('./routes/auth'));

// CRUD de eventos

// Directorio publico
app.use( express.static('public')); //La carpeta pública

// Escuchar peticiones
app.listen(process.env.PORT, () => {
    console.log("Servidor corriendo en puerto " + process.env.PORT);
})