const express = require('express');
const app = express();
const cores = require('cors');
const jwt = require('jwt-simple');
const joi = require('joi');
const managerRouter = require('./Routes/ManagerRouter');
const studentRouter = require('./Routes/StudentRouter');

app.use(cores());
app.use('/api/manager', managerRouter);
app.use('/api/student', studentRouter);


module.exports = app;
