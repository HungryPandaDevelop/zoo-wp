import { configureStore } from '@reduxjs/toolkit'; // Импортируем configureStore из Redux Toolkit
import { reducer as formReducer } from 'redux-form';

import {
  usersReducer,
  logoutUser,
  clearErrorUser
} from '/src/store/slices/usersSlice';

import {
  postsReducer,
} from '/src/store/slices/postSlice';
import {
  chatReducer,
  selectRoom,
  setShowChat,
  updateMessages,
  // updateRooms,
  setOnlineUsers,
  // setCountUnread,
  setNewListMessage
} from '/src/store/slices/chatSlice';


const store = configureStore({
  reducer: {
    form: formReducer,
    users: usersReducer,
    posts: postsReducer,
    chat: chatReducer
    // Добавьте другие редукторы, если они есть
  },
  // Добавьте любые другие опции, такие как middleware или DevTools
});

export * from '/src/store/thunks/authorizationUser';
export * from '/src/store/thunks/registrationUser';
export * from '/src/store/thunks/googleUser';
export * from '/src/store/thunks/updateUser';

export * from '/src/store/thunks/usePosts';
// export * from '/src/store/thunks/addPost';
// export * from '/src/store/thunks/getPosts';
// export * from '/src/store/thunks/getPostSingle';
// export * from '/src/store/thunks/updatePost';
// export * from '/src/store/thunks/deletePost';

// export * from '/src/store/thunks/addPost';
export * from '/src/store/thunks/useRooms';
// export * from '/src/store/thunks/getPostSingle';
// export * from '/src/store/thunks/updatePost';
// export * from '/src/store/thunks/deletePost';
export * from '/src/store/thunks/useMessage';


export {
  store,
  logoutUser,
  clearErrorUser,
  selectRoom,
  setShowChat,
  updateMessages,
  // updateRooms,
  setOnlineUsers,
  // setCountUnread, 
  setNewListMessage
};