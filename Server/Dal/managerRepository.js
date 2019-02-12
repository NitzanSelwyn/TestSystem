const dbPool = require('./dbContext');
const sql = require('mssql');


exports.Login = (req,res) => {

  const email = req.body.Email;
  const password = req.body.Password;

  const dbReq = dbPool.request();
  dbReq.input('Email', sql.NVarChar(50),email);
  dbReq.input('Password', sql.NVarChar(50), password);

  dbReq.execute('spLogin', (err, data) => {
    if (err) {
      console.log('error', "Execution error calling 'Login'");
    } else {
      res.send(data.recordset);
    }
  });
}

exports.Register = (req,res) => {

  const email = req.body.Email;
  const password = req.body.Password;
  const fullName = req.body.FullName
  const dbReq = dbPool.request();

  dbReq.input('Email', sql.NVarChar(50), email);
  dbReq.input('Password', sql.NVarChar(50), password);
  dbReq.input('FullName', sql.NVarChar(50), fullName);

  dbReq.execute('spRegisterAdmin', (err, data) => {
    if (err) {
      console.log('error', "Execution error calling 'getuserbyname'");
    } else {
      res.send(data.recordset);
    }
  });
}
