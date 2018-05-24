var net = require('net');
var arg = process.argv[2];
console.log(arg);

function zeroFill(i) {
  return (i < 10 ? '0' : '') + i;
}

function now () {
  var d = new Date();
  return d.getFullYear() + '-'
    + zeroFill(d.getMonth() + 1) + '-'
    + zeroFill(d.getDate()) + ' '
    + zeroFill(d.getHours()) + ':'
    + zeroFill(d.getMinutes());
}


var server = net.createServer((socket)=>{
    // console.log(socket);
    // var d = new Date();
    socket.end(now() + '\n');
});
server.listen(Number(arg));