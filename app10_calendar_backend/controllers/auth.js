// Funciones que se definen en las rutas
const {validationResult} = require('express-validator');

const crearUsuario = (req, res) => {

    // Datos que mandamos en el body
    const {name, email, password} = req.body;

    // Manejo de errores
    const errors = validationResult( req ); // Devuelve los errores del check
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    // if (name.length < 3) {
    //     return res.status(400).json({ //Mandamos el status 400 (bad request)
    //         ok:false,
    //         msg: "El nombre debe tener más de dos letras."
    //     });
    // }


    return res.status(201).json({
        ok: true,
        msg: 'Crear usuario',
        name: name,
        email: email,
        password: password
    })
}

const iniciarSesion = (req, res) => {

    const {email, password} = req.body;

    const errors = validationResult( req );
    if (!errors.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }

    return res.json({
        ok: true,
        msg: 'Iniciar sesion',
        email: email,
        password: password
    })
}

const renovarToken = (req, res) => {
    return res.json({
        ok: true,
        msg: 'Renovar token'
    })
}

module.exports = {
    crearUsuario,
    iniciarSesion,
    renovarToken
};