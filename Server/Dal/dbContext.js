var sql = require('mssql');
var config = require('../Config/dbConfig');
const chalk = require('chalk');

const dbPool = new sql.ConnectionPool(config, err =>  {
  if (err) {
    console.log(chalk.red('Cant Connect To DB -',err));
    console.log(err);
  }
  console.log(chalk.green('Connected'));
});



module.exports = dbPool;
