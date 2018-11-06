module.exports = (ioServer, server) => {
    
    const io = ioServer(server.listener);

    io.on('connection', (socket) => {
        console.log('New user connected');

        socket.on('new-message', (message) => {
            io.emit('data', message);
        });
    });

    (async () => {
        await server.start();
        console.log(`Server running on ${server.info.uri}`);

        process.on('unhandledRejection', (err) => {
            console.log(err);
            process.exit(1);
        });
    })();
};