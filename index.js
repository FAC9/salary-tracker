const http = require('http');
const app = require('./src/server');
let port = process.env.port || 4000;

http.createServer(app).listen(port, () => {
  console.log(`Server is running on port: 4000`);
});
