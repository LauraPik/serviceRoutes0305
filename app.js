const express = require('express');
const morgan = require('morgan');
const app = express();
const router = express.Router();
const usersRouter = require('./routes/userRoutes')
const servicesRouter = require('./routes/servicesRoute')
const foremanRouter = require('./routes/foremanRoute')
app.use(express.json())

app.use(morgan('dev'));

app.use('/api/v1/services', servicesRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/foreman', foremanRouter);


module.exports = app;