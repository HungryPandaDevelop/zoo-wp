
import Users from "/src/pages/chat/users/Users";
import Rooms from "/src/pages/chat/Rooms";
import MessagesContainer from "/src/pages/chat/message/MessagesContainer";

{/* <Sidebar /> */ }
{/* <MessageContainer /> */ }
const Page = () => {
  return (
    <div className="main-grid">
      <div className="col-3">
        <Users />
      </div>
      <div className="col-3">
        <Rooms />
      </div>
      <div className="col-6">
        <MessagesContainer />
      </div>

    </div>
  )
}

export default Page