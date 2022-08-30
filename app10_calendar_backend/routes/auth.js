const {Router} = require('express');
const router = Router();

const {crearUsuario, iniciarSesion, renovarToken} = require('../controllers/auth')

// Cuando alguien solicite el localhost:3001/api/auth, que es lo que respondo

// Crear nuevo usuario 
// /api/auth/new
router.post('/new', crearUsuario);

// Login
// /api/auth
router.post('/', iniciarSesion);

// Renovar token
// /api/auth/renew
router.get('/renew', renovarToken)

module.exports = router;