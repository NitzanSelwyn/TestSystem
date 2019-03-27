const dbPool = require('./dbContext');
const sql = require('mssql');
const config = require('../Config/config');
const chalk = require('chalk');


exports.signup = function(student,testId,callback){

    const dbReq = dbPool.request();
    dbReq.input('Email',  student.email);
    dbReq.input('FirstName',  student.firstName);
    dbReq.input('LastName',  student.lastName);
    dbReq.input('TestId',  testId);


    dbReq.execute('spStudenLogin', (err, data) => {
        if (err) {
          console.log(chalk.red(`Execution error calling 'signup'`, err.message));
        } else {
          callback(data.recordsets);
        }
      });
}

exports.getStudentTest = function(testId,callback){
  const dbReq = dbPool.request();
  dbReq.input('ExamId',  testId);

  dbReq.execute('spGetStudentTest', (err, data) => {
      if (err) {
        console.log(chalk.red(`Execution error calling 'getStudentTest'`, err.message));
      } else {
        callback(data.recordsets);
      }
    });
}