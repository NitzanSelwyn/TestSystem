const express = require('express');
const bodyParser = require('body-parser');
const studentController = require('../Controller/Student/studentController')


const router = express.Router();

router.use(bodyParser.json());


router.post('/signup', studentController.signup);

router.post('/test', studentController.getStudentTest);

module.exports = router;
