const http = require('http');
const app = require('./src/server');
let port = process.env.port || 5000;

http.createServer(app).listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
