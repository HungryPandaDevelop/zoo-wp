// import MessagesEmpty from "/src/pages/chat/message/MessagesEmpty";
import MessagesList from "/src/pages/chat/message/MessagesList";
import MessageForm from "/src/pages/chat/message/MessageForm";
import { selectRoom } from '/src/store';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect, useState } from 'react';

import getPhoto from "/src/pages/chat/hooks/getPhoto";

const MessagesContainer = () => {
  const dispatch = useDispatch();
  const [receiverUser, setReceiverUser] = useState({ username: null, foto_profilya: null });

  const { receiverId, selectedRoom, allUsers } = useSelector((state) => {
    return state.chat;
  });

  useEffect(() => {
    if (allUsers.length > 0) {
      const user = allUsers.find((c) => c.id === (Number(receiverId)));
      if (user) {
        setReceiverUser(user)
      }
    }
  }, [selectedRoom, allUsers]);


  const chatBack = () => {
    dispatch(selectRoom({ selectedRoom: null, receiverId: null }));
  }


  if (selectedRoom === null) {
    return false;
  }
  // console.log('s', receiverUser)
  const { username, foto_profilya } = receiverUser;
  return (
    <div className="messages-panel">

      <div className="messages-panel-head">
        <div class="vertical-align">
          <sapn class="chat-back" onClick={chatBack}>
          </sapn>
        </div>
        <div class="vertical-align">
          <div class="rooms-item-face"
            style={{ backgroundImage: `url('${getPhoto(foto_profilya)}')` }}
          ></div>
        </div>
        <div class="vertical-align">
          <b class="rooms-item-name">
            {username}
          </b>
        </div>
      </div>
      <MessagesList />
      <MessageForm />
    </div>
  )
}

export default MessagesContainer;