var http = require("http");
var server = http.createServer(function (req, res) {
res.writeHead(200);
res.end("Hello world! It's the badass DevOps Engineer again..");
});
server.listen(3000);