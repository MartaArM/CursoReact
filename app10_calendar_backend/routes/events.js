const {Router} = require('express');
const { obtenerEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
const { validarJWT } = require('../middlewares/validacionJWT');

const router = Router();

router.use(validarJWT); // Como lo tienen que usar todas, se puede poner aqui

//Obtener eventos
router.get(
    '/', 
   // [
     //   validarJWT
   // ],
    obtenerEventos);

    //Crear un nuevo evento
router.post(
    '/', 
   // [
     //   validarJWT
   // ],
    crearEvento);

router.put(
    '/:id', 
   // [
     //   validarJWT
   // ],
    actualizarEvento);

router.delete(
    '/:id', 
   // [
     //   validarJWT
   // ],
    eliminarEvento);

module.exports = router;