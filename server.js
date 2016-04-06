var http = require('http');

http.ceateServer(function(request, reponse) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  reponse.write('Hello World');
  response.end();
}).listen(8888);
