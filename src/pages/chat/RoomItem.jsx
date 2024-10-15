import { useSelector, useDispatch } from 'react-redux';

import { selectRoom, deleteRoom } from '/src/store';
import { useEffect, useState } from 'react';


import getPhoto from "/src/pages/chat/hooks/getPhoto";

const RoomItem = ({ room }) => {
  const dispatch = useDispatch();

  const [receiverUser, setReceiverUser] = useState({ username: null, foto_profilya: null });

  const [personCountUnread, setPersonCountUnread] = useState(0);

  const { participants, _id } = room;

  const {
    selectedRoom,
    allUsers,
    onlineUsers,
    unreadMessagesList
  } = useSelector((state) => {
    return state.chat;
  });

  const user_id = useSelector((state) => {
    return state.users.userData.user_id;
  });


  const whoIsReceiverId = user_id === participants[1] ? participants[0] : participants[1];

  const isOnline = onlineUsers.includes(whoIsReceiverId);

  useEffect(() => {
    const user = allUsers.find((c) => c.id === (whoIsReceiverId));

    setReceiverUser(user);
  }, [allUsers]);



  useEffect(() => {

    const filtredList = unreadMessagesList.filter(msg => (msg.senderId === whoIsReceiverId));

    setPersonCountUnread(filtredList.length);
  }, [unreadMessagesList])

  const { username, foto_profilya } = receiverUser;


  const choiseRoom = () => {
    dispatch(selectRoom({ selectedRoom: _id, receiverId: whoIsReceiverId, receiverName: username }));
  }

  const deleteConversation = () => {
    dispatch(deleteRoom({ roomId: _id, receiverId: whoIsReceiverId }));
    dispatch(selectRoom({ selectedRoom: null, receiverId: null }));
  }





  return (
    <div
      className={`rooms-item ${selectedRoom === _id ? 'active' : ''} `}
    >
      {personCountUnread > 0 && (<div className="unread-count">{personCountUnread}</div>)}
      {isOnline ? (<div className="user-online"></div>) : ''}
      <div className="rooms-link-container" onClick={() => { choiseRoom(_id) }}></div>
      <div class="vertical-align">

        <div class="rooms-item-face"
          style={{ backgroundImage: `url('${getPhoto(foto_profilya)}')` }}
        ></div>
      </div>
      <div class="vertical-align">
        <b class="rooms-item-name">{username}</b>
      </div>
      <div class="vertical-align">
        <span class="delete-btn post-item-btn" onClick={deleteConversation}><span>Удалить</span><i></i></span>
      </div>
    </div >
  )
}

export default RoomItem