import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

import { getReceiverSocketId, io } from "../socket/socket.js";

export const getConversation = async (req, res) => {
  try {
    const { loggedInUserId } = req.body; //req.user._id;

    // console.log('loggedInUserId', loggedInUserId)

    const filteredConversations = await Conversation.find({ participants: loggedInUserId })

    res.status(200).json(filteredConversations);

  } catch (error) {
    console.log('err', error.message)
    res.status(500).json({ error: 'Server Users error' })
  }
}


export const addConversation = async (req, res) => {
  const { senderId, receiverId } = req.body;

  let conversation = await Conversation.findOne({
    participants: {
      $all: [senderId, receiverId]
    }
  });

  // console.log(senderId, receiverId)

  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
      // participantsName: [senderName, receiverName],
    });

    await Promise.all([
      conversation.save(),
    ]);

    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      // console.log('reciver 2', receiverSocketId, newMessage)
      io.to(receiverSocketId).emit('newRoom', conversation)
    }

    res.status(201).json(conversation);
  } else {
    res.status(200).json({ exists: conversation._id, receiverId: receiverId });
  };





};


export const deleteConversation = async (req, res) => {
  // const { conversationId } = req.body;

  // const { id } = req.params;
  const { roomId, receiverId } = req.body;

  try {
    // Удаление беседы по _id
    const conversation = await Conversation.findByIdAndDelete(roomId);

    // Если у комнаты есть связанные сообщения, удаляем их
    if (conversation && conversation.messages && conversation.messages.length > 0) {
      await Message.deleteMany({
        _id: { $in: conversation.messages }
      });
    }

    if (!conversation) {
      return res.status(404).json({ message: 'Conversation not found' });
    }
    console.log('delete', receiverId)
    const receiverSocketId = getReceiverSocketId(receiverId);

    if (receiverSocketId) {
      // console.log('reciver 2', receiverSocketId, newMessage)
      io.to(receiverSocketId).emit('newRoom', conversation)
    }

    res.status(200).json(conversation);
  } catch (error) {
    res.status(500).json({ message: 'Error deleting conversation', error });
  }
};