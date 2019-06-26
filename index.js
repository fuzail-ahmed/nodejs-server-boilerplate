const http = require('http');
const app = require('./app');

const server = http.createServer(app);
const port = ENVCONFIG.PORT || 3000;
server.listen(port,function(){
    console.log(`Project started on ${ENVCONFIG.NAME} port: ${port}`);
}); 