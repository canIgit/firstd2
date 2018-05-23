 var pathdir = process.argv[2];
 
//  console.log(pathdir);
 var http = require("http");
 var BufferList = require("bl");
  http.get(pathdir, (res)=>{
        res.pipe(BufferList(function (err, content) {
            if (err) {
              return console.error(err)
            }
            content = content.toString()
            console.log(content.length)
            console.log(content);
        }))
  })
 
//  http.get(pathdir, (res)=>{
//      const {statusCode} = res;
//      const contentType = res.headers['content-type'];
//     //  console.log('content-type: '+contentType);
//     //  console.log(res);
    
    
//     let error;
    
//     if(statusCode != 200){
//         error = new Error('Request failed: /n'+ `Status code: ${statusCode}`);
//     }
//     // else if(!/^application\/json/.test(contentType)){
//     //     error = new Error('Invalid content type: '+ `expected application/json but received ${contentType}`);
//     // }
    
//     if(error){
//         console.error(error.message);
//         res.resume();
//         return;
//     }
    
//     res.setEncoding('utf8');
    
//     let responseData = '';
//     let bl = new BufferList();
//     res.on('data', (chunk)=>{
//         bl.append(new Buffer(chunk))
//         responseData += chunk;
//         //  console.log(chunk);
      
//     })
    
//     // res.pipe(BufferList(function(err, data)=>{
//     //     console.log(data);
//     // }))
    
//     res.on('end', ()=>{
//         console.log(bl.length);
//          console.log(responseData);
//     })
    
//     res.on('error', console.error);
    
//  }).on('error', (e)=>{
//      console.error(`Got error: ${e.message}`);
//  })
 