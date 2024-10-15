import { useSelector } from 'react-redux';
import useDate from '/src/pages/chat/hooks/useDate';

const MessageItem = ({ message, lastMessageRef }) => {

  const user_id = useSelector((state) => {
    // console.log(state.users)
    return state.users.userData.user_id;
  });

  const shakeClass = message.sholdSnake ? 'shake' : '';


  const formattedDate = useDate(message.createdAt)[1];

  const fromMe = message.senderId === user_id;


  // console.log('userData', message.senderId, user_id)
  const generateFile = () => {
    if (message.fileChat) {
      const file = JSON.parse(message.fileChat);

      if (file[0]) {
        return <img className='message-img' src={file[0].url} alt="img" />

      }
    }
  }

  const gererateEmodsy = () => {
    if (message.imgEmodsy) {
      return (
        <img className="emodsy-img" src={message.imgEmodsy} alt='emodsy' />
      )
    }
  }

  return (
    <div className={`message  ${shakeClass} ${fromMe ? 'message-sender' : 'message-receiver'}`} ref={lastMessageRef}>
      {generateFile()}
      {gererateEmodsy()}
      <div className="messages-text">{message.message}</div>
      <div className="messages-data">{formattedDate}</div>
      {message.read ? '' : (<i className='noread'></i>)}
    </div >
  )
}

export default MessageItem