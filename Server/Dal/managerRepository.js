const dbPool = require('./dbContext');
const sql = require('mssql');


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
      console.log(data.recordset)
      res.send(data.recordset);
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
      console.log(data.recordset)
      res.send(data.recordset);
    }
  });
}

exports.GetManagerOrganizations = (req, res) => {

  const email = req.body.Email;

  const dbReq = dbPool.request();

  dbReq.input('Email', sql.NVarChar(100), email);

  dbReq.execute('spGetManagerOrganizations', (err, data) => {
    if (err) {
      console.log('error', "Execution error calling 'Register'");
    } else {
      console.log(data.recordset)
      res.send(data.recordset);
    }
  });
}

exports.GetSubjectsByOrganizationId = (req, res) => {
  const id = req.body.Id;

  const dbReq = dbPool.request();
  dbReq.input('OrganizationId', sql.Int(), id);

  dbReq.execute('spGetSubjectsByOrganizationId', (err, data) => {
    if (err) {
      console.log('error', "Execution error calling 'Register'");
    } else {
      console.log(data.recordset)
      res.send(data.recordset);
    }
  });
}

exports.GetQustionsbySubjectId = (req,res) =>{
  const organizationId = req.body.OrganizationId;
  const subjectId = req.body.SubjectId;

  const dbReq = dbPool.request();
  dbReq.input('SubjectId', sql.Int(), subjectId);
  dbReq.input('OrganizationId', sql.Int(), organizationId);

  dbReq.execute('spGetQuestionBySubjectId', (err, data) => {
    if (err) {
      console.log('error', "Execution error calling 'Register'");
    } else {
      console.log(data.recordset)
      res.send(data.recordset);
    }
  });
}
