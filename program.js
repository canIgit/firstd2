
/**
 * ---------------------------------FILTERED LS ---------------------------------*/

 
 var pathdir = process.argv[2];
 var fileExt = process.argv[3];
 
//  console.log("dir path: "+pathdir);
//  console.log("file ext: "+fileExt);
var mymodule = require('./mymodule');
mymodule(pathdir, fileExt, doread);
function doread(err, items){
      if(err){
         return console.log(err);
     }
     if(items){
        //  console.log(items);
         items.forEach((filename, index, arr)=>{
            //   console.log('-- found: ',filename);
              
                  console.log(filename);
              
         })
        
     }
 }
 
/**
 * ---------------------------------MY FIRST ASYNC I/O---------------------------------*/
// let file = process.argv[2] || 'package.json';
// var fs = require('fs');
// fs.readFile(file, function doread(err, data){
//     if(err){
//         return console.log(err);
//     }
//     var lines = data.toString().split('\n').length - 1;
//     console.log(lines)
// });

// /** ---------------------------------MY FIRST I/O--------------------------------- */
// var fs = require('fs')
//     var contents = fs.readFileSync(process.argv[2])
//     var lines = contents.toString().split('\n').length - 1
//     console.log(lines)

// /** ---------------------------------My baby steps--------------------------------- */
// var result = 0
// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }
// console.log(result)
// ------------------------------------------------------------------
