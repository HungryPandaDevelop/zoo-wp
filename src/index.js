import React from 'react';
import ReactDOM from 'react-dom';

import App from '/src/App';
import HeaderAuth from '/src/blocks/HeaderAuth';
import ChatModule from '/src/pages/chat/ChatModule';
import UserSingleBtnAddChat from '/src/pages/chat/users/UserSingleBtnAddChat';
import Users from '/src/pages/chat/users/Users';

import { Provider } from 'react-redux';
import { store } from './store';

import { SocketContextProvider } from '/src/context/SocketContext';


const Modal = () => {
  return (
    <Provider store={store}>
      <HeaderAuth />
    </Provider>
  )
}

const ModalChat = () => {
  return (
    <Provider store={store}>
      <SocketContextProvider>
        <ChatModule />
      </SocketContextProvider>
    </Provider>
  )
};

const ModalChatSingleBtn = () => {
  // alert('test')
  return (
    <Provider store={store}>
      <UserSingleBtnAddChat />
    </Provider>
  )
};
const ModalUsersPage = () => {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  )
};
const CabinetApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

if (document.querySelector('#root')) {
  ReactDOM.createRoot(document.querySelector('#root')).render(<CabinetApp />);
};

if (document.querySelector('#header-root')) {
  ReactDOM.createRoot(document.querySelector('#header-root')).render(<Modal />);
};
if (document.querySelector('#chat-root')) {
  ReactDOM.createRoot(document.querySelector('#chat-root')).render(<ModalChat />);
};
if (document.querySelector('#chat-btn-single-add')) {
  ReactDOM.createRoot(document.querySelector('#chat-btn-single-add')).render(<ModalChatSingleBtn />);
};
if (document.querySelector('#page-users')) {
  ReactDOM.createRoot(document.querySelector('#page-users')).render(<ModalUsersPage />);
};
