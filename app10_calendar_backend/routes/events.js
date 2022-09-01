const {Router} = require('express');
const { obtenerEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');

const router = Router();

//Obtener eventos
router.get(
    '/', 
    // Funciones para hacer validaciones
    // [
    //     obtenerEventos
    // ],
    obtenerEventos);

    //Crear un nuevo evento
router.post(
    '/', 
    // Funciones para hacer validaciones
    // [
    //     obtenerEventos
    // ],
    crearEvento);

router.put(
    '/:id', 
    // Funciones para hacer validaciones
    // [
    //     obtenerEventos
    // ],
    actualizarEvento);

router.delete(
    '/:id', 
    // Funciones para hacer validaciones
    // [
    //     obtenerEventos
    // ],
    eliminarEvento);

module.exports = router;