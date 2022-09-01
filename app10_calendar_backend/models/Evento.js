const {Schema, model} = require('mongoose');

const EventoSchema = Schema({
    title: {
        type: String,
        require: true
    },
    notes: {
        type: String
    },
    start: {
        type: Date,
        require: true
    },
    end: {
        type: Date,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId, // Va a ser una referencia a un objeto
        ref: 'Usuario' // Nombre del otro esquema
    }
});

module.exports = model('Evento', EventoSchema);