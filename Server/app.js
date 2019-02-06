const express = require('express');
const app = express();
const cores = require('cors');
const jwt = require('jwt-simple');
const joi = require('joi');
const managerRouter = require('./Routes/ManagerRouter');

app.use(cores());
app.use('/api/manager', managerRouter);

module.exports = app;
