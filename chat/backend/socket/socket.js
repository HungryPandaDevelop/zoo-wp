import { Server } from "socket.io";

import http from 'http';
import express from 'express';

import https from 'https';
import fs from 'fs';

const app = express();

const options = {
  key: fs.readFileSync('/etc/certs/panda/zoonika.com_26-08-2024_05:01:30_letencrypt.key'),
  cert: fs.readFileSync('/etc/certs/panda/zoonika.com_26-08-2024_05:01:30_letencrypt.crt_v2')
};



// const server = http.createServer(app);
const server = https.createServer(options, app);

const io = new Server(server, {
  cors: {
    // origin: ['http://localhost:3000'],
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const userSocketMap = {}; // {userId: sockedId}

export const getReceiverSocketId = (connectUserId) => {
  console.log('userSocketMap Receiver', userSocketMap)
  return userSocketMap[connectUserId];
}



io.on('connection', (socket) => {

  // console.log('user connect 1', userSocketMap, socket.handshake.query.userId);
  const userId = Number(socket.handshake.query.userId); // забрать id из socket context front

  if (userId != 'undefined') {
    userSocketMap[userId] = socket.id;
    console.log('user connect', userSocketMap)
  }
  // console.log('user connect 2', userSocketMap);

  // отсылаем обрантно всем тем кто подключен
  io.emit('getOnlineUsers', Object.keys(userSocketMap).map(Number));
  // отсылаем обрантно всем тем кто подключен

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);

    delete userSocketMap[userId];
    io.emit('getOnlineUsers', Object.keys(userSocketMap).map(Number));
  });



});



export { app, io, server };