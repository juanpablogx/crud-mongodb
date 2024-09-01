const mongoose = require('mongoose');

const ReservaSchema = new mongoose.Schema({
  nombre_cliente: {
    type: String,
    required: true,
    trim: true
  },
  email_cliente: {
    type: String,
    required: true,
    trim: true,
    match: [/.+\@.+\..+/, 'Por favor ingresa un email válido']
  },
  fecha_inicio: {
    type: Date,
    required: true
  },
  fecha_fin: {
    type: Date,
    required: true
  },
  numero_habitacion: {
    type: Number,
    required: true,
    min: 1
  },
  estado_reserva: {
    type: Number,
    required: true,
    enum: [0, 1, 2],
    default: 1
  },
  fecha_creacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Reserva', ReservaSchema);