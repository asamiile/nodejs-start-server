var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer();
server.on('request', doRequest);
server.listen(1337);

function doRequest(req, res) {
  var path = url.parse(req.url);

  switch(path.pathname) {
    case '/':
      fs.readFile('./index.html', 'UTF-8', doRead);
      function doRead(err, data) {
        res.setHeader('Content-type', 'text/html');
        res.write(data);
        res.end();
      }
    break;

    case '/2':
      fs.readFile('./index2.html', 'UTF-8', doRead);
      function doRead(err, data) {
        res.setHeader('Content-type', 'text/html');
        res.write(data);
        res.end();
      }
    break;

    default:
      fs.readFile('./404.html', 'UTF-8', doRead);
      function doRead(err, data) {
        res.setHeader('Content-type', 'text/html');
        res.write(data);
        res.end();
      }
    break;
  }
}
console.log('Server running at http://127.0.0.1:1337/');
