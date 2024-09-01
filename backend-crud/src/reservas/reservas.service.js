const Reserva = require('./reservas.model');

const findReservas = async () => {
  try {
    const reservas = await Reserva.find();
    return reservas;
  } catch (error) {
    throw new Error(error);
  }
};

const findReservaById = async (id) => {
  try {
    const reserva = await Reserva.findById(id);
    return reserva;
  } catch (error) {
    throw new Error(error);
  }
};

const createReserva = async (reserva) => {
  try {
    const newReserva = new Reserva(reserva);
    await newReserva.save();
    return newReserva;
  } catch (error) {
    throw new Error(error);
  }
};

const updateReserva = async (id, reserva) => {
  try {
    const updatedReserva = await Reserva.findByIdAndUpdate(id, reserva, { new: true });
    return updatedReserva;
  } catch (error) {
    throw new Error(error);
  }
};

const deleteReserva = async (id) => {
  try {
    await Reserva.findByIdAndDelete(id);
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  findReservas,
  findReservaById,
  createReserva,
  updateReserva,
  deleteReserva,
};