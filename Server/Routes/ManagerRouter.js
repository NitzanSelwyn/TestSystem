const express = require('express');
const bodyParser = require('body-parser');
const repo = require('../Dal/managerRepository');

const router = express.Router();

router.use(bodyParser.json());

router.post('/Login', repo.Login);

router.post('/Register', repo.Register)

module.exports = router;
