const dbPool = require('./dbContext');
const sql = require('mssql');
const config = require('../Config/config');


const CLTT = function convertAnswerListToTable(list) {
  const table = new sql.Table()
  table.columns.add('IsCorrect', sql.Bit);
  table.columns.add('QuestionId', sql.Int);
  table.columns.add('Title', sql.VarChar(50));
  for (let i = 0; i < list.length; i++) {
    table.rows.add(list[i].IsCorrect,list[i].QuestionId,list[i].Title);
  }
  return table;
}

exports.Login = (email, password, callback) => {

  const dbReq = dbPool.request();
  dbReq.input('Email', sql.NVarChar(50), email);
  dbReq.input('Password', sql.NVarChar(50), password);

  dbReq.execute('spLogin', (err, data) => {
    if (err) {
      console.log('error', "Execution error calling 'Login'");
    } else {
      callback(data.recordset);
    }
  });
}

exports.Register = function (email, password, fullName, callback) {


  const dbReq = dbPool.request();

  dbReq.input('Email', sql.NVarChar(100), email);
  dbReq.input('Password', sql.VarChar(100), password);
  dbReq.input('FullName', sql.NChar(25), fullName);

  dbReq.execute('spRegisterAdmin', (err, data) => {
    if (err) {
      console.log('error', "Execution error calling 'Register'");
    } else {

      callback(data.recordset);
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

exports.GetQuestionsAnswersById = function (questionId, callback) {

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

exports.AddNewQuestion = function(question,answersArr,callback){

  
  const table = CLTT(answersArr)
  const dbReq = dbPool.request();

  dbReq.input('Title',question.QuestionText);
  dbReq.input('TextBelow',question.TextBelow);
  dbReq.input('IsMultyChoice',question.IsMultiCoice);
  dbReq.input('SubjectId',question.SubjectId);
  dbReq.input('CorrectCount',0);
  dbReq.input('IsHorizontal',question.IsHorizantle);
  dbReq.input('Tags',question.questionTags);
  dbReq.input('Answers',table);

  dbReq.execute('spCreateQuestion', (err, data) => {
    if (err) {
      console.log('error', "Execution error calling 'spCreateAnswer'"+ err.message);
      callback(false);
    } else {
      callback(true);
    }
  });
}
