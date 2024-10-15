import MessageItem from "/src/pages/chat/message/MessageItem";
import { useEffect, useRef } from 'react';
import { getMessagesInRoom, setNewListMessage, getUnreadMessages } from '/src/store';
import { useDispatch, useSelector } from 'react-redux';

import { useSocketContext } from "/src/context/SocketContext";

import useDate from '/src/pages/chat/hooks/useDate';

// import useListenChat from "/src/pages/chat/hooks/useListenChat";



const MessagesList = () => {

  const { socket } = useSocketContext();
  const dispatch = useDispatch();

  const lastMessageRef = useRef();
  // useListenChat();

  useEffect(() => {

    socket?.on('getMessage', (messages) => {
      dispatch(setNewListMessage(messages));
    });


    dispatch(getMessagesInRoom());
    dispatch(getUnreadMessages());
  }, []);

  const { messagesList, isLoagingMessages } = useSelector((state) => {

    return state.chat;
  });


  useEffect(() => {

    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);

  }, [messagesList]);



  const groupMessagesByDay = (messages) => {
    return messages.reduce((groupedMessages, message) => {
      // Extract the date part (YYYY-MM-DD)

      const dateKey = useDate(message.createdAt)[0];
      // If the date doesn't exist in the groupedMessages, create a new array
      if (!groupedMessages[dateKey]) {
        groupedMessages[dateKey] = [];
      }

      // Add the message to the appropriate date group
      groupedMessages[dateKey].push(message);

      return groupedMessages;
    }, {});
  };

  // console.log('groupMessagesByDay', groupMessagesByDay(messagesList))

  const groupedMessages = groupMessagesByDay(messagesList);

  return (
    <div className="messages-panel-body">
      {isLoagingMessages ? 'Loading...' : messagesList.length > 0 && (
        Object.keys(groupedMessages).map(dateKey => (
          <>
            <div className="message-day"><span>{dateKey}</span></div>
            {groupedMessages[dateKey].map(message => <MessageItem key={message._id} message={message} lastMessageRef={lastMessageRef} />)}
          </>
        ))
      )}
    </div>
  )
}

export default MessagesList