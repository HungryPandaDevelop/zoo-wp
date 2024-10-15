import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { addRoom, setShowChat } from '/src/store';

import PopupNoAuth from "/src/pages/chat/PopupNoAuth";

const UserSingleBtnAddChat = () => {

  const dispatch = useDispatch();

  const [receiverId, setReceiverId] = useState(null);

  const user_id = useSelector((state) => {
    return state.users.userData?.user_id;
  });

  const { onlineUsers } = useSelector((state) => {
    return state.chat
  });

  const [isOnline, setIsOnline] = useState(null);


  useEffect(() => {

    let getId = document.querySelector('#user-id-for-chat');

    if (getId) {
      getId = getId.dataset.userid; // Получаем значение data-my-value
      getId = Number(getId);
      setReceiverId(getId);

      setIsOnline(onlineUsers.includes(getId));
    }

  }, []);



  const chatOpenAdd = () => {
    if (user_id) {
      dispatch(addRoom(receiverId));
    }
    dispatch(setShowChat(true));
  }


  return (
    <div className="btn btn--blue btn-chat" onClick={chatOpenAdd}>
      {isOnline && <div class="user-online"></div>}
      <i></i><span>Написать</span></div>
  )
}

export default UserSingleBtnAddChat