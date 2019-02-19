const dbPool = require('./dbContext');
const sql = require('mssql');
const jwt = require('jsonwebtoken')
const config = require('../Config/config');


function convertAnswerListToTable(list) {
  const table = new this.sql.Table();
  table.columns.add("ID", this.sql.Int);
  for (let i = 0; i < list.length; i++) {
    table.rows.add(list[i]);
  }
  return table;
}

exports.Login = (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  const dbReq = dbPool.request();
  dbReq.input('Email', sql.NVarChar(50), email);
  dbReq.input('Password', sql.NVarChar(50), password);

  dbReq.execute('spLogin', (err, data) => {
    if (err) {
      console.log('error', "Execution error calling 'Login'");
    } else {

      jwt.sign(data.recordset[0], config.jwtSecret, (err, token) => {
        console.log(token);
        res.send({ token: token, user: data.recordset })
      })
    }
  });
}

exports.Register = (req, res) => {

  const email = req.body.email;
  const password = req.body.password;
  const fullName = req.body.name
  const dbReq = dbPool.request();

  dbReq.input('Email', sql.NVarChar(100), email);
  dbReq.input('Password', sql.VarChar(100), password);
  dbReq.input('FullName', sql.NChar(25), fullName);

  dbReq.execute('spRegisterAdmin', (err, data) => {
    if (err) {
      console.log('error', "Execution error calling 'Register'");
    } else {

      res.send(data.recordset);
    }
  });
}

exports.GetManagerOrganizations = function (email, calback) {

  const dbReq = dbPool.request();

  dbReq.input('Email', sql.NVarChar(100), email);

  dbReq.execute('spGetManagerOrganizations', (err, data) => {
    if (err) {
      console.log('error', "Execution error calling 'spGetManagerOrganizations'");
    } else {
      calback(data.recordset);
    }
  });
}

exports.GetSubjectsByOrganizationId = function (organizationId, callback) {

  const dbReq = dbPool.request();
  dbReq.input('OrganizationId', sql.Int(), organizationId);

  dbReq.execute('spGetSubjectsByOrganizationId', (err, data) => {
    if (err) {
      console.log('error', "Execution error calling 'spGetSubjectsByOrganizationId'");
    } else {

      callback(data.recordset);
    }
  });
}

exports.GetQustionsbySubjectIdAndOrganizationId = function (subjectId, organizationId, callback) {


  const dbReq = dbPool.request();
  dbReq.input('SubjectId', sql.Int(), subjectId);
  dbReq.input('OrganizationId', sql.Int(), organizationId);

  dbReq.execute('spGetQuestionBySubjectId', (err, data) => {
    if (err) {
      console.log('error', "Execution error calling 'spGetQuestionBySubjectId'");
    } else {

      callback(data.recordset);
    }
  });
}

exports.GetQuestionsAnswersById = function(questionId, callback){

  const dbReq = dbPool.request();

  dbReq.input('QuestionId', sql.Int(), questionId);

  dbReq.execute('spGetQuestionAnswersByQuestionId', (err, data) => {
    if (err) {
      console.log('error', "Execution error calling 'Register'");
    } else {
      callback(data.recordset);
    }
  });

}

exports.AddNewQuestion = (question) => {

  const table = this.convertAnswerListToTable(question.answers)
  const dbReq = dbPool.request();



  dbReq.execute('spCreateAnswer', (err, data) => {
    if (err) {
      console.log('error', "Execution error calling 'Register'");
      return false;
    } else {
      return true;
    }
  });
  return false;
}
