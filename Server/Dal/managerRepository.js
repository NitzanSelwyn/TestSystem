const dbPool = require('./dbContext');
var sql = require('mssql');

function executeInDB() {
  const req = dbPool.request();
  req.input('Email', sql.NVarChar(50), 'nitzansel@gmail.com');
  req.input('Password', sql.NVarChar(50), '123456');

  req.execute('spLogin', (err, data) => {
    if (err) {
      console.log('error', "Execution error calling 'getuserbyname'");
    } else {
      console.log(data.recordset);
    }
  });
}

module.exports = {
  executeInDB
};
