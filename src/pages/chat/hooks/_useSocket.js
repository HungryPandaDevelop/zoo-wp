import { useEffect } from 'react';
import io from "socket.io-client";

import { useSelector, useDispatch } from 'react-redux';
import { setSocket, setOnlineUsers } from '/src/store';


const useSocket = () => {

  const dispatch = useDispatch();

  const user_id = useSelector((state) => {
    // console.log(state.users)
    return state.users.userData?.user_id;
  });

  // const { socket } = useSelector((state) => {
  //   // console.log(state.users)
  //   return state.chat;
  // });

  useEffect(() => {

    if (user_id) {

      const socket = io('https://zoonika.com:5000', {
        query: {
          userId: user_id
        }
      });
      console.log('user_id', user_id, socket)
      dispatch(setSocket(socket));

      // socket.on('getOnlineUsers', (users) => {
      //   // console.log('.users', users)
      //   dispatch(setOnlineUsers(users));
      // });
      // console.log('socket in context', socket)
      // return () => socket.close();
    }
    else {
      // if (socket) {
      //   socket.close();
      //   dispatch(setSocket(null));
      // }
    }
  }, []);


}


export default useSocket;