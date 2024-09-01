const { Router } = require('express');
const controllers = require('./reservas.controller');

const router = Router();

router.get('/', controllers.getReservas);

router.get('/:id', controllers.getReservaById);

router.post('/', controllers.postReserva);

router.put('/:id', controllers.putReserva);

router.delete('/:id', controllers.deleteReserva);

module.exports = router;