module.exports = (ioServer, server) => {
    
    const io = ioServer(server.listener);

    io.on('connection', (socket) => {
        console.log('New user connected');
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