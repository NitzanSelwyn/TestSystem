const app = require('./app');
const http = require('http');

//add port to config with envirmonet
app.set('port', 3000);
const server = http.createServer(app);
server.listen(3000);
