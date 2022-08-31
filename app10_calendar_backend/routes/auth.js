const {Router} = require('express');
const {check} = require('express-validator'); //Para hacer validaciones

const router = Router();

const {crearUsuario, iniciarSesion, renovarToken} = require('../controllers/auth')

// Cuando alguien solicite el localhost:3001/api/auth, que es lo que respondo

// Crear nuevo usuario 
// /api/auth/new
router.post(
    '/new', 
    // Funciones para hacer validaciones
    [
        check('name', "El nombre es obligatorio").not().isEmpty(),
        check('email', "El email no es correcto").isEmail(), // Comprueba si tiene formato mail y si está vacio
        check('password', "La clave debe tener 6 caracteres o más").isLength({min: 6}), // Longitud minima de 6 caracteres. Tambien salta si es vacío
    ],
    crearUsuario);

// Login
// /api/auth
router.post('/', 
    [
        check('email', "El email no es correcto").isEmail(), // Comprueba si tiene formato mail y si está vacio
        check('password', "La clave debe tener 6 caracteres o más").isLength({min: 6}), // Longitud minima de 6 caracteres. Tambien salta si es vacío
    ],
    iniciarSesion);

// Renovar token
// /api/auth/renew
router.get('/renew', renovarToken)

module.exports = router;