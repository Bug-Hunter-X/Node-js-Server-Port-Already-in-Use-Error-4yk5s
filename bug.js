const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);

//Error: The server is listening for connections on port 8080, but the port might already be in use.
//Solution: check for errors and use a different port if it's already in use.