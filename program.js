var arg = process.argv[2];
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
  res.writeHead(200, { 'content-type': 'text/plain' })
  var filename = process.argv[3];

  // This line opens the file as a readable stream
  var readStream = fs.createReadStream(filename);

  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', function () {
    // This just pipes the read stream to the response object
    readStream.pipe(res);
  });

  // This catches any errors that happen while creating the readable stream
  readStream.on('error', function(err) {
    res.end(err);
  });
}).listen(Number(arg));

