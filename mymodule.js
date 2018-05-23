var fs = require("fs");
var path = require("path");
module.exports = function (pathdir, fileExt, callback){
      fs.readdir(pathdir, function(err, items){
             if(err){
                 return callback(err);
             }
             if(items){
                 items = items.filter(function(filename){
                     return path.extname(filename) === '.'+fileExt;
                 })
                callback(null, items);
             }
        });
}