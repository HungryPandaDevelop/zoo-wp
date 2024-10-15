import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getAllUsers = createAsyncThunk('get/users', async (formData, { rejectWithValue, getState }) => {

  try {
    const state = getState();
    // const loggedInUserId = state.users.userData.user_id;

    const response = await axios.get('/wp-json/get/polzovately');
    // console.log('ok get users', response.data)
    return response.data;

  } catch (error) {
    console.log('err', error.message)
    return rejectWithValue(error.response.data);
  }
});

const getRooms = createAsyncThunk('get/rooms', async (formData, { rejectWithValue, getState }) => {


  try {
    const state = getState();
    const loggedInUserId = state.users.userData.user_id;



    const response = await axios.post('https://zoonika.com:5000/api/conversation',
      {
        loggedInUserId: loggedInUserId,
      });
    // console.log('ok get rooms', response.data)
    return response.data;

  } catch (error) {
    console.log('err', error.message)
    return rejectWithValue(error.response.data);
  }
});


const addRoom = createAsyncThunk('add/rooms', async (receiverId, { rejectWithValue, getState }) => {
  try {

    const state = getState(); // Получаем текущее состояние
    // const receiverId = receiverId; // Достаем selectedRoom из состояния

    const senderId = state.users.userData.user_id;
    console.log('state.users', senderId, receiverId)

    const response = await axios.post(`https://zoonika.com:5000/api/conversation/add/`,
      {
        receiverId: receiverId,
        senderId: senderId
      },
    );


    console.log('ok add room', response.data)

    return response.data;


  } catch (error) {
    console.log('error', error)
    return rejectWithValue(error.response.data);
  }
});

const deleteRoom = createAsyncThunk('delete/room', async ({ roomId, receiverId }, { rejectWithValue }) => {
  console.log('receiverUser', receiverId)
  try {


    const response = await axios.post('https://zoonika.com:5000/api/conversation/delete/',
      {
        roomId: roomId,
        receiverId: receiverId
      });

    console.log('delete', response.data)
    return response.data;

  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

export { getRooms, addRoom, deleteRoom, getAllUsers };
