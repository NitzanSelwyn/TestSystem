const DBConnection = {
  server: 'testsystem.c09qc8q6n1tl.eu-west-1.rds.amazonaws.com',
  database: 'testsystem',
  user: 'nodejsuser',
  password: 'nodejsuser',
  options: {
    encrypt: true
  },
  pool: {
    min: 2
  }
};

module.exports = DBConnection;
