var arg = process.argv[2];
var http = require('http');
var fs = require('fs');
var map = require('through2-map');

/**
 * TCP is a connection-oriented protocol meaning it first sets up a connection to the receiver then sends the data in segments (PDU for transport layer) which is carried by IP packets
 * http://codewinds.com/blog/2013-08-02-streams-basics.html
 */
http.createServer(function(instream, outstream) {
  outstream.writeHead(200, { 'content-type': 'text/plain' })
     if(instream.method !== 'POST'){
         return instream.end('send me a POST\n')
     }
     
    instream.pipe(map((chunk)=>{
        // console.log(chunk.toString()+':--');
        return chunk.toString().split('').join('-');
    })).pipe(outstream);


      // This catches any errors that happen while creating the readable stream
      instream.on('error', function(err) {
        outstream.end(err);
      });
 
}).listen(Number(arg));
