// Funciones que se definen en las rutas

const crearUsuario = (req, res) => {
    res.json({
        ok: true,
        msg: 'Crear usuario'
    })
}

const iniciarSesion = (req, res) => {
    res.json({
        ok: true,
        msg: 'Iniciar sesion'
    })
}

const renovarToken = (req, res) => {
    res.json({
        ok: true,
        msg: 'Renovar token'
    })
}

module.exports = {
    crearUsuario,
    iniciarSesion,
    renovarToken
};