// Funciones que se definen en las rutas
const {validationResult} = require('express-validator');
const Usuario = require('../models/Usuario')

const crearUsuario = async(req, res) => {

    // Datos que mandamos en el body
    const {email, password} = req.body;

    try {
        let usuario = await Usuario.findOne({email: email}); // El correo no se puede repetir, buscamos si ya está
        if (usuario) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya existe'
            })
        } 
        else { // Si el email no existe
            usuario = new Usuario(req.body); // Creamos un usuario
            await usuario.save();// Lo guardamos en la BD

            return res.status(201).json({
                ok: true,
                uid: usuario._id,
                name: usuario.name
            })
        }

         

        
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