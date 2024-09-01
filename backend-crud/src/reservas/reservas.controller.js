const service = require('./reservas.service');

const getReservas = async (req, res, next) => {
  try {
    const reservas = await service.findReservas();
    res.json(reservas);
  } catch (error) {
    next(error);
  }
};

const getReservaById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const reserva = await service.findReservaById(id);
    res.json(reserva);
  } catch (error) {
    next(error);
  }
};

const postReserva = async (req, res, next) => {
  const reserva = req.body;
  try {
    const newReserva = await service.createReserva(reserva);
    res.json(newReserva);
  } catch (error) {
    next(error);
  }
};

const putReserva = async (req, res, next) => {
  const { id } = req.params;
  const reserva = req.body;
  try {
    const updatedReserva = await service.updateReserva(id, reserva);
    res.json(updatedReserva);
  } catch (error) {
    next(error);
  }
};

const deleteReserva = async (req, res, next) => {
  const { id } = req.params;
  try {
    await service.deleteReserva(id);
    res.json({ message: 'Reserva deleted' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getReservas,
  getReservaById,
  postReserva,
  putReserva,
  deleteReserva,
};