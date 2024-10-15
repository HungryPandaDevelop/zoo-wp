import express from 'express';

import cors from 'cors';

import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import conversationRoutes from './routes/conversation.routes.js';

import connectToMongoDB from './db/connectToMongoDB.js';

import { app, server } from './socket/socket.js';

// const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // from req body to json
app.use(cookieParser()); // доступ к cooki
app.use(cors());

app.use('/api/auth', authRoutes);

app.use('/api/messages', messageRoutes);

app.use('/api/users', userRoutes);

app.use('/api/conversation', conversationRoutes);


app.get('/', (req, res) => {
  console.log('enter port')
  res.send('server start')
});



server.listen(PORT, () => {
  connectToMongoDB();
  console.log('env', process.env.MONGO_DB_URI)
  console.log('serv start', PORT)
});