
const obtenerEventos = (req, res) => {
    return res.status(201).json({
        ok: true,
        msg: "Obtener eventos"
    })
}

const crearEvento = (req, res) => {
    return res.status(201).json({
        ok: true,
        msg: "Crear evento"
    })
}

const actualizarEvento = (req, res) => {
    return res.status(201).json({
        ok: true,
        msg: "Actualizar evento"
    })
}

const eliminarEvento = (req, res) => {
    return res.status(201).json({
        ok: true,
        msg: "Eliminar evento"
    })
}

module.exports = {
    obtenerEventos,
    crearEvento,
    actualizarEvento,
    eliminarEvento
};