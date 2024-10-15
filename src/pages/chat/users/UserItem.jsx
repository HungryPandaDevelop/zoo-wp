// import { useSocketContext } from "/src/context/SocketContext";

import { useDispatch, useSelector } from 'react-redux';

import { addRoom, setShowChat } from '/src/store';

import getPhoto from "/src/pages/chat/hooks/getPhoto";

const UserItem = ({ user }) => {

  // const { onlineUsers } = useSocketContext();

  const dispatch = useDispatch();

  const user_id = useSelector((state) => {
    return state.users.userData?.user_id;
  });
  const { onlineUsers } = useSelector((state) => {
    return state.chat
  });

  const { username, foto_profilya, id } = user;

  const isOnline = onlineUsers.includes(id)


  const chatOpenAdd = () => {
    if (user_id) {
      dispatch(addRoom(id));
      dispatch(setShowChat(true));
    } else {
      window.location.href = '/cabinet';

    }
  }

  return (
    <div className="rooms-item" >
      <div className="rooms-link-container" onClick={chatOpenAdd}></div>
      {isOnline ? (<div className="user-online"></div>) : ''}
      <div class="rooms-item-face"
        style={{ backgroundImage: `url('${getPhoto(foto_profilya)}')` }}
      ></div>
      <b class="rooms-item-name">{username}</b>
    </div>
  )
}

export default UserItem