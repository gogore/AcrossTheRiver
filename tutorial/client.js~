var http = require('http');
// Options to be used by request
var options = {
	host : 'localhost',
        port : '8081',
	path : '/index.htm'

};

var callback = function(response){
	var body = '';
	response.on('data', function(data){
		body += data;		
	});
	response.on('end', function(){
			console.log(body);
	});
}

var req = http.request(options, callback);
req.end();
