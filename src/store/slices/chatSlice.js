import { createSlice } from '@reduxjs/toolkit';
import { getRooms, addRoom, deleteRoom, getAllUsers } from '/src/store/thunks/useRooms';
import { sendMessage, getMessagesInRoom, getUnreadMessages } from '/src/store/thunks/useMessage';

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    rooms: [],
    isLoadingRooms: false,
    selectedRoom: null,
    receiverId: null,
    receiverName: null,
    isLoagingMessages: false,
    messagesList: [],
    isLoagingUsers: false,
    allUsers: [],
    showChat: false,
    onlineUsers: [],
    isLoagingUnreadMessages: false,
    unreadMessagesList: [],
    // countUnread: 0
  },
  reducers: {
    selectRoom(state, action) {
      // console.log('action.payload', action.payload)
      state.selectedRoom = action.payload.selectedRoom;
      state.receiverId = action.payload.receiverId;
      state.receiverName = action.payload.receiverName;
    },
    setNewListMessage(state, action) {
      state.messagesList = action.payload;
    },
    updateMessages(state, action) {
      state.messagesList = [...state.messagesList, action.payload]
    },
    // updateRooms(state, action) {
    //   console.log(...state.rooms, action.payload)
    //   state.rooms = [...state.rooms, action.payload]
    // },
    setShowChat(state, action) {
      state.showChat = action.payload;
    },
    setOnlineUsers(state, action) {
      state.onlineUsers = action.payload;
    },
    // setCountUnread(state, action) {
    //   state.countUnread = action.payload;
    // },

  },
  extraReducers(builder) {
    // getRooms
    builder.addCase(getRooms.pending, (state, action) => {
      state.isLoadingRooms = true;
    });
    builder.addCase(getRooms.fulfilled, (state, action) => {
      state.isLoadingRooms = false;
      state.rooms = action.payload;
    });
    builder.addCase(getRooms.rejected, (state, action) => {
      state.isLoadingRooms = false;
      state.errorRooms = action.payload;
    });
    // getRooms

    // addRoom
    builder.addCase(addRoom.pending, (state, action) => {
      state.isLoadingRooms = true;
    });
    builder.addCase(addRoom.fulfilled, (state, action) => {
      state.isLoadingRooms = false;

      if (action.payload.exists) {

        state.selectedRoom = action.payload.exists;
        state.receiverId = action.payload.receiverId;
      } else {

        state.rooms = [...state.rooms, action.payload];
        state.selectedRoom = action.payload._id;
        state.receiverId = action.payload.participants[1];
      }

    });
    builder.addCase(addRoom.rejected, (state, action) => {
      state.isLoadingRooms = false;
      state.errorRooms = action.payload;
    });
    // addRoom

    // deleteRoom
    builder.addCase(deleteRoom.pending, (state, action) => {
      state.isLoadingRooms = true;
    });
    builder.addCase(deleteRoom.fulfilled, (state, action) => {
      state.isLoadingRooms = false;
      // state.rooms = [...state.rooms, action.payload];
      state.rooms = state.rooms.filter((room) => {
        return room._id !== action.payload._id;
      });
    });
    builder.addCase(deleteRoom.rejected, (state, action) => {
      state.isLoadingRooms = false;
      state.errorRooms = action.payload;
    });
    // deleteRoom


    // sendMessage
    builder.addCase(sendMessage.pending, (state, action) => {
      state.isLoagingMessages = true;
    });
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      state.isLoagingMessages = false;
      state.messagesList = [...state.messagesList, action.payload];
    });
    builder.addCase(sendMessage.rejected, (state, action) => {
      state.isLoagingMessages = false;
      state.errorMessage = action.payload;
    });
    // sendMessage

    // getMessagesInRoom
    builder.addCase(getMessagesInRoom.pending, (state, action) => {
      state.isLoagingMessages = true;
    });
    builder.addCase(getMessagesInRoom.fulfilled, (state, action) => {
      state.isLoagingMessages = false;
      state.messagesList = action.payload
      // state.messagesList = [...state.messagesList, action.payload];
    });
    builder.addCase(getMessagesInRoom.rejected, (state, action) => {
      state.isLoagingMessages = false;
      state.errorMessage = action.payload;
    });
    // getMessagesInRoom

    // getUnreadMessages
    builder.addCase(getUnreadMessages.pending, (state, action) => {
      state.isLoagingUnreadMessages = true;
    });
    builder.addCase(getUnreadMessages.fulfilled, (state, action) => {
      state.isLoagingUnreadMessages = false;
      state.unreadMessagesList = action.payload
      // state.messagesList = [...state.messagesList, action.payload];
    });
    builder.addCase(getUnreadMessages.rejected, (state, action) => {
      state.isLoagingUnreadMessages = false;
      state.errorMessage = action.payload;
    });
    // getUnreadMessages

    // getUsers
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.isLoagingUsers = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {

      state.isLoagingUsers = false;
      state.allUsers = action.payload
      // state.messagesList = [...state.messagesList, action.payload];
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.isLoagingUsers = false;
      state.allUsers = action.payload;
    });
    // getUsers


  }
});

export const {
  selectRoom,
  setShowChat,
  updateMessages,
  // updateRooms, 
  setOnlineUsers,
  setCountUnread,
  setNewListMessage
} = chatSlice.actions;
export const chatReducer = chatSlice.reducer;
