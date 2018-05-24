var arg = process.argv[2];
var http = require('http');
var url = require('url');
 
  function parsetime (time) {
      return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
      }
    }
    
    function unixtime (time) {
      return { unixtime: time.getTime() }
    }
    
http.createServer(function(instream, outstream) {

     if(instream.method !== 'GET'){
         return instream.end('send me a POST\n')
     }
     var parsedReq = url.parse(instream.url, true);
    //  console.log(parsedReq);
     var date = new Date(parsedReq.query['iso']);
     if(parsedReq.pathname === '/api/parsetime'){
         date = parsetime(date);
     }else if(parsedReq.pathname === '/api/unixtime'){
         date = unixtime(date)
     }

     if(date){  
         outstream.writeHead(200, { 'content-type': 'application/json' });
         outstream.end(JSON.stringify(date));
     }else{
         outstream.writeHead(404);
         outstream.end();
     }
   


  // This catches any errors that happen while creating the readable stream
  instream.on('error', function(err) {
       outstream.writeHead(404);
    outstream.end(err);
  });
 
}).listen(Number(arg));
