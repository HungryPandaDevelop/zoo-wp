import RoomItem from "/src/pages/chat/RoomItem";
import { useDispatch, useSelector } from 'react-redux';


function Rooms({ setShowChat }) {

  const dispatch = useDispatch();

  const { isLoadingRooms, isLoagingUsers, rooms } = useSelector((state) => {
    return state.chat;
  });

  if (isLoadingRooms) {
    return 'Loading Rooms...';
  }
  if (isLoagingUsers) {
    return 'Loading Users...';
  }

  return (
    <div className="rooms-panel">
      <div class="close-btn" onClick={() => dispatch(setShowChat(false))}></div>
      {rooms.map(room => <RoomItem key={room.id} room={room} />)}
    </div>
  )
}

export default Rooms