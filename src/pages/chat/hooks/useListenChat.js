import { useSocketContext } from "/src/context/SocketContext";
import { useEffect } from "react";
import { updateMessages, updateRooms, getRooms, getUnreadMessages } from '/src/store';

import { useDispatch, useSelector } from 'react-redux';

import notificationSound from "/images/notification.mp3";

const useListenChat = () => {
  const dispatch = useDispatch();
  const { socket } = useSocketContext();

  const { selectedRoom } = useSelector((state) => {
    return state.chat;
  });

  // console.log('selectedRoom', selectedRoom)

  useEffect(() => {


    socket?.on('newMessage', ({ msg, selectedRoomBack }) => {
      if (selectedRoom === selectedRoomBack) {
        const newMessage = { ...msg, sholdSnake: true };
        // console.log('selectedRoomBack', msg, selectedRoom, selectedRoomBack)
        // const sound = new Audio(notificationSound);
        // sound.play();
        console.log('new msg')
        dispatch(updateMessages(newMessage))
      }

      dispatch(getUnreadMessages());
    });

    socket?.on('newRoom', () => {
      // dispatch(updateRooms(room));
      dispatch(getRooms());
    });

    return () => {
      socket?.off('newMessage');
      socket?.off('newRoom');

    };
  }, [socket, selectedRoom]);

}

export default useListenChat;