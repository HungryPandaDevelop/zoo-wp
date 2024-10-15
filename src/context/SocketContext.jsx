import { createContext, useState, useEffect, useContext } from 'react';
import io from "socket.io-client";

import { useSelector, useDispatch } from 'react-redux';
import { setOnlineUsers } from '/src/store';

const SocketContext = createContext();

export const useSocketContext = () => {
  return useContext(SocketContext)
}

export const SocketContextProvider = ({ children }) => {

  const dispatch = useDispatch();

  const [socket, setSocket] = useState(null);

  // const [onlineUsersSocket, setOnlineUsersSocket] = useState([]);

  const user_id = useSelector((state) => {
    // console.log(state.users)
    return state.users.userData?.user_id;
  });

  useEffect(() => {

    if (user_id) {
      const socket = io('https://zoonika.com:5000', {
        query: {
          userId: user_id
        }
      });

      console.log('0 socked')
      socket.on('getOnlineUsers', (users) => {
        console.log('1 users', users)
        // setOnlineUsersSocket(users);
        dispatch(setOnlineUsers(users))
      });

      setSocket(socket);
      return () => socket.close();
    }
    else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, []);

  return (
    <SocketContext.Provider value={{
      socket,
      // onlineUsers 
    }}>{children}</SocketContext.Provider>
  )
}