const express = require('express');
const bodyParser = require('body-parser');
const repo = require('../Dal/managerRepository');

const router = express.Router();

router.use(bodyParser.json());

router.get('/Login', (req, res) => {
  repo.executeInDB();
});

module.exports = router;
