const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const startServer = (port) => {
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}

const tryPort = (port) => {
  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying a different port`);
      tryPort(port + 1);
    } else {
      console.error(err);
      process.exit(1);
    }
  });

  startServer(port);
}

tryPort(port);