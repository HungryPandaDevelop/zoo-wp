import Conversation from "../models/conversation.model.js";

import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

import { ObjectId } from 'mongodb';

import nodemailer from 'nodemailer';

export const sendMessage = async (req, res) => {
  // Создаем транспорт для отправки email
  const transporter = nodemailer.createTransport({
    host: 'zoonika.com',  // Хост вашего SMTP сервера
    port: 587,  // Порт, который используется (обычно 587 для TLS или 465 для SSL)
    secure: false,  // Если true, то SSL используется (обычно для порта 465)
    auth: {
      user: 'work@zoonika.com',  // Логин от вашего SMTP аккаунта
      pass: '123456'           // Пароль от вашего SMTP аккаунта
    }
  });

  try {
    const { message, fileChat, imgEmodsy, senderId, receiverId, selectedRoom, receiverName, user_email } = req.body;

    let conversation = await Conversation.findOne({ _id: new ObjectId(selectedRoom) });

    const newMessage = new Message({
      senderId: senderId,
      receiverId: receiverId,
      conversation: [senderId, receiverId],
      message: message,
      fileChat: fileChat,
      imgEmodsy: imgEmodsy,
      receiverName: receiverName,
      read: false
    });


    const mailOptions = {
      from: 'work@zoonika.com',  // Адрес отправителя
      to: `${receiverName}, info@zoonika.com`,     // Адрес получателя
      subject: 'Новое сообщение на Зоонике',
      // text: 'Привет! Это письмо отправлено через мой SMTP-сервер.'
      html: `
        <html> 
    <head> 
      <title>Welcome to Zoonika</title> 
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    </head> 
    <body>
      <table>
        <tr>
          <td><img width="250px" height="76px" src="https://zoonika.com/wp-content/themes/zoonika/images/Zoonika_logo.svg" alt=""/></td>
        </tr>
        <tr>
        <td><h2 style="font-size: 24px; margin: 15px 0px;">Уважаемый, ${user_email}!</h2></td>
        </tr>
        <tr>
          <td>В вашем чате появились новые сообщения </td>
        </tr>
        <tr>
          <td><a href="https://zoonika.com?id_room=${selectedRoom}&receiverId=${receiverId}&receiverName=${receiverName}">перейти!</a></td>
        </tr>
      </table>
    </body> 
	</html>
      `
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log('Ошибка при отправке письма:', error);
      }
      console.log('Письмо успешно отправлено:', info.response);
    });



    if (newMessage) {
      conversation.messages.push(newMessage._id)
    }

    // await conversation.save(); 1 sek
    // await newMessage.save(); 2 sek

    // Paralell
    await Promise.all([
      conversation.save(),
      newMessage.save()
    ]);


    const receiverSocketId = getReceiverSocketId(receiverId);

    // console.log('emit ', receiverSocketId)

    if (receiverSocketId) {
      io.to(receiverSocketId).emit('newMessage', { msg: newMessage, selectedRoomBack: selectedRoom })

    }

    res.status(201).json(newMessage); /// ?
    // res.status(201).json({ send: 'ok' })

  } catch (error) {
    console.log('Err Mc Send M', error.message)
    res.status(500).json({ error: 'Mc Server error' })
  }
}

export const getUnreadMessages = async (req, res) => {
  const { userId } = req.body;

  const messages = await Message.find({
    conversation: { $in: [userId] },
    senderId: { $ne: userId },
    read: { $ne: true },
  });


  res.status(200).json(messages);
}


export const getMessages = async (req, res) => {
  try {

    const {
      userId,
      roomId,
      receiverId
    } = req.body;

    const conversation = await Conversation.findById(roomId).populate('messages');;


    await Message.updateMany(
      { _id: { $in: conversation.messages }, receiverId: userId },
      { $set: { read: true } }
    );

    const updatedConversation = await Conversation.findById(roomId).populate('messages');

    const messages = updatedConversation.messages;

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit('getMessage', messages)
    }
    // отправим ответчику что его сообщения прочитаны

    // } else {
    //   messages = conversation;
    // }
    res.status(200).json(messages);

    // const messages = conversation.messages;

    // res.status(200).json(messages);


  } catch (error) {
    console.log('Err Mc Get M', error.message)
    res.status(500).json({ error: 'Mc Server error' })
  }
}