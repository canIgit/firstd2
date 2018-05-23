 var pathdir = process.argv[2];
 
//  console.log(pathdir);
 var http = require("http");
 
 http.get(pathdir, (res)=>{
     const {statusCode} = res;
     const contentType = res.headers['content-type'];
    //  console.log('content-type: '+contentType);
    //  console.log(res);
    let error;
    
    if(statusCode != 200){
        error = new Error('Request failed: /n'+ `Status code: ${statusCode}`);
    }
    // else if(!/^application\/json/.test(contentType)){
    //     error = new Error('Invalid content type: '+ `expected application/json but received ${contentType}`);
    // }
    
    if(error){
        console.error(error.message);
        res.resume();
        return;
    }
    res.setEncoding('utf8');
    
    let responseData = '';
    res.on('data', (chunk)=>{
        // responseData += chunk;
         console.log(chunk);
    })
    
    //  res.on('data', console.log)
     
    res.on('end', ()=>{
        // console.log(responseData);
    })
    
    res.on('error', console.error);
 }).on('error', (e)=>{
     console.error(`Got error: ${e.message}`);
 })
 