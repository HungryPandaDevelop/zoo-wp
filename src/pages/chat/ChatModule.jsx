import Rooms from "/src/pages/chat/Rooms";
import MessagesContainer from "/src/pages/chat/message/MessagesContainer";
import PopupNoAuth from "/src/pages/chat/PopupNoAuth";

import useListenChat from "/src/pages/chat/hooks/useListenChat";
import { getRooms, selectRoom } from '/src/store';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';


import {
  getAllUsers,
  setShowChat,
  getUnreadMessages,
} from '/src/store';

const ChatModule = () => {
  useListenChat();

  // Получение текущего местоположения (URL)
  // Создание объекта URLSearchParams для извлечения параметров из URL



  const dispatch = useDispatch();

  const {
    showChat,
    unreadMessagesList,
    rooms
  } = useSelector((state) => {
    return state.chat;
  });
  const user_id = useSelector((state) => {
    return state.users.userData ? state.users.userData.user_id : false;
  });

  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getRooms());
    dispatch(getUnreadMessages());

  }, []);

  useEffect(() => {
    // console.log('start 1');
    const searchParams = new URLSearchParams(window.location.search);
    // Получение значения параметра id_room
    const idRoom = searchParams.get('id_room');
    const receiverId = searchParams.get('receiverId');
    const receiverName = searchParams.get('receiverName');
    // console.log('start', idRoom, receiverId, receiverName)
    if (idRoom) {
      dispatch(selectRoom({ selectedRoom: idRoom, receiverId: receiverId, receiverName: receiverName }));
      dispatch(setShowChat(true))
    }
  }, [])

  useEffect(() => {
    setUnreadCount(unreadMessagesList.length);
  }, [unreadMessagesList])








  console.log('rooms', rooms)
  return (
    <>
      {user_id && rooms.length > 0 && <div class="chat-top-container">
        {unreadCount > 0 && (<div className="unread-count">{unreadCount}</div>)}
        <div class="btn-open-chat" onClick={() => { dispatch(setShowChat(!showChat)) }}></div>
      </div>}
      {showChat ? (user_id ? (
        <div className="chat-panel">
          <Rooms setShowChat={setShowChat} />
          <MessagesContainer />
        </div>) : <PopupNoAuth />) : ''}
    </>
  )
}

export default ChatModule;