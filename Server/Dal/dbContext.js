var sql = require('mssql');
var config = require('../Config/dbConfig');

const dbPool = new sql.ConnectionPool(config, err =>  {
  if (err) {
    console.log('error', "Can't create DB pool " + err + ' stack:' + err.stack);
    console.log(err);
  }
  console.log('Connected');
});

module.exports = dbPool;
