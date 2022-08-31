// Funciones que se definen en las rutas
const {validationResult} = require('express-validator');
const Usuario = require('../models/Usuario')

const crearUsuario = async(req, res) => {

    // Datos que mandamos en el body
    const {email, password} = req.body;

    try {
        let usuario = await Usuario.findOne({email: email});
        console.log(usuario);

        // const usuario = new Usuario(req.body); // Creamos un usuario
        // await usuario.save();// Lo guardamos en la BD

        return res.status(201).json({
            ok: true,
            msg: 'Crear usuario',
            // name: name,
            // email: email,
            // password: password
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Error. Hable con el administrador.'
        })
    }

    
}

const iniciarSesion = (req, res) => {

    const {email, password} = req.body;

    

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