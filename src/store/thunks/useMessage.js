import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const getMessagesInRoom = createAsyncThunk('get/message', async (type, { rejectWithValue, getState }) => {

  try {

    const state = getState(); // Получаем текущее состояние

    const userId = state.users.userData.user_id;
    const {
      selectedRoom,
      receiverId,
      receiverName
    } = state.chat;


    const response = await axios.post('https://zoonika.com:5000/api/messages',
      {
        userId: userId,
        roomId: selectedRoom,
        receiverId: receiverId,
        receiverName: receiverName
      });
    // console.log('ok get message', response.data)
    return response.data;

  } catch (error) {
    console.log('err', error.message)
    return rejectWithValue(error.response.data);
  }
});

const getUnreadMessages = createAsyncThunk('get/unread', async (formData, { rejectWithValue, getState }) => {

  try {

    const state = getState(); // Получаем текущее состояние

    const userId = state.users.userData.user_id;
    // console.log('userId', userId)
    const response = await axios.post('https://zoonika.com:5000/api/messages/unread',
      {
        userId: userId,

      });
    console.log('ok get unread message', response.data)
    return response.data;

  } catch (error) {
    console.log('err', error.message)
    return rejectWithValue(error.response.data);
  }
});


const sendMessage = createAsyncThunk('add/message', async (formData, { rejectWithValue, getState }) => {
  try {

    const state = getState(); // Получаем текущее состояние

    const senderId = state.users.userData.user_id;
    const user_email = state.users.userData.user_email;
    const { receiverId, selectedRoom, receiverName } = state.chat;


    console.log('receiverName', receiverName, user_email)

    const response = await axios.post(`https://zoonika.com:5000/api/messages/send`,
      {
        message: formData.message,
        fileChat: formData.fileChat,
        imgEmodsy: formData.imgEmodsy,
        receiverId: receiverId,
        senderId: senderId,
        selectedRoom: selectedRoom,
        user_email: user_email,
        receiverName: receiverName,
      },
    );

    console.log('ok add message', response.data)
    return response.data;

  } catch (error) {
    console.log('error', error)
    return rejectWithValue(error.response.data);
  }
});


export { sendMessage, getMessagesInRoom, getUnreadMessages };
