/* 
 * Create a server using node
 * Reference: https://code.tutsplus.com/tutorials/nodejs-for-beginners--net-26314
*/
var http = require("http");
var port = "8080";
var responseCode = "200";
var contentType = "text/plain"

http.createServer(function(request, response) {
	request.on("end", function() {
		response.writeHead(responseCode, {
			'Content-Type': contentType
		});
		response.end('Hello HTTP!');
	});
}).listen(port);