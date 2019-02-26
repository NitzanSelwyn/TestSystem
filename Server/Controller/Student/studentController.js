const repo = require('../../Dal/studentRepository')
const jwt = require('jsonwebtoken')
const mailer = require('../../Helper/mailer')
const config = require('../../Config/config')

exports.signup = (req,res)=>{
    const student = req.body.student;
    const testId = req.body.testId;

    repo.signup(student,testId,(data)=>{
        res.send(data);
    })
}