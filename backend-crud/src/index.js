const express = require('express');
const connection = require('./connection_database');
const morgan = require('morgan');
const cors = require('cors');

const { PORT } = require('./config');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


const reservasRouter = require('./reservas/reservas.routes');


app.get('/', (req, res) => {
  res.send('Hello World');
});


app.use('/reservas', reservasRouter);

app.use((err, request, response, next) => {
  console.log(err.message);
  response.status(500).json({message: err.message});
});


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});