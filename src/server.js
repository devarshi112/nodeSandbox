/* 
 * Create a server and set timeout
 * Steps to run:
 * node server.js
 * curl http://localhost:8080
 * References: 
 * http://www.nodebeginner.org/#hello-world
 * http://campus.codeschool.com/courses/real-time-web-with-node-js/level/1/video/1
*/
var http = require("http");
var port = 8080;
var responseCode = '200';
var contentType = "text/plain"
var timeout = 5000;	//5 sec.

http.createServer(function(request, response) {
	response.writeHead(responseCode, {
		'Content-Type': contentType
	});
	response.write('Writing over HTTP!\n');
	setTimeout(function() {
		response.write("Completed writing over HTTP!\n")
		response.end();
	}, timeout);	
}).listen(port);
console.log('Listening on port 8080!\n');