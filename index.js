const hapi = require('hapi');
const server = new hapi.Server({
    port: process.env.PORT || 4000,
    host: 'localhost'
});
const io = require('socket.io');
const hookandstart = require('./hookandstart');

hookandstart(io, server);