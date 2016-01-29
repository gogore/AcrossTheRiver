var express = require("express");
var app = express();
var fs = require("fs");

var bodyParser = require("body-parser");
var multer = require('multer');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended : false}));

var uploadObj = multer({ dest : "./tmp/"});
console.log(uploadObj);

app.get("/fileUpload.html", function(req, res){
		console.log(__dirname);
		res.sendFile( __dirname + "/" + "fileUpload.html");
		});

app.post("/file_upload",uploadObj.single('file'), function(req, res) {
		console.log(req.file);
		var file = __dirname + "/" + req.file.filename;
		fs.readFile(req.file.path, function(err, data){
			fs.writeFile(file, data, function(){
				if(err){
				console.log(err);
				}else{
				response={
message : "File uploaded sucessfully",
filename : req.file.originalname
};

}
console.log(response);
res.end(JSON.stringify(response));
})})

});
app.get("/file_download", function(req,res){
		res.download("tmp\\e7b4ad392181a24a3d81b38a0c544ea3", "image.jpeg",function(err){
			if(err)console.log(err);
			});
		});
var server = app.listen(8081, function () {
		var host = server.address().address
		var port = server.address().port
		console.log("Example app listening at http://%s:%s", host, port)
		})


