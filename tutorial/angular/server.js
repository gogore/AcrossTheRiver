var express = require("express");
var app = express();

app.use(express.static("pulbic"));

app.get("/index.html", function(req, res){
	res.sendFile( __dirname + "/" + "index.html");		
});

app.get("/*.js", function(req, res){
	res.sendFile( __dirname + req.url);

});

app.get("/process_get", function(req, res){
	console.log("test");
	var response = {
		first_name : req.query.first_name,
		last_name : req.query.last_name
	};
	console.log(response);
	res.end(JSON.stringify(response));	
});
var server = app.listen(80, function(){
	var host = server.address().adress
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port);
})


