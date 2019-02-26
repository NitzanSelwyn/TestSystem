const dbPool = require('./dbContext');
const sql = require('mssql');
const config = require('../Config/config');


exports.signup = function(student,testId,callback){

    const dbReq = dbPool.request();
    dbReq.input('Email',  student.email);
    dbReq.input('FirstName',  student.firstName);
    dbReq.input('LastName',  student.lastName);
    dbReq.input('TestId',  testId);


    dbReq.execute('spStudenLogin', (err, data) => {
        if (err) {
          console.log('error', "Execution error calling 'Login'"+ err.message);
        } else {
          callback(data.recordsets);
        }
      });
}