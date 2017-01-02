/*
 * Using callback to get back ip address from DNS
 * Reference: https://www.airpair.com/javascript/node-js-tutorial
*/
var dns = require('dns');

dns.resolve4('www.ncsu.edu', function(err, addresses) {
	if(err) {
		throw err;
	}

	console.log('addresses: ' + JSON.stringify(addresses));
});