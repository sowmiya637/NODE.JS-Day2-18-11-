// server.js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(`Hello from ${process.env.NODE_ENV || 'development'} server\n`);
});

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port} (NODE_ENV=${process.env.NODE_ENV})`);
});
