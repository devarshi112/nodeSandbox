/* 
 * Create a server
 * Reference: http://www.nodebeginner.org/#hello-world
*/
var http = require("http");
var port = 8080;
var responseCode = '200';
var contentType = "text/plain"

var server = http.createServer(function(request, response) {
	response.writeHead(responseCode, {
		'Content-Type': contentType
	});
	response.write('Hello HTTP!');
	response.end();
});
server.listen(port);