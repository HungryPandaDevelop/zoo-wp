// import useGetUsers from "/src/pages/cabinet/chat/hooks/useGetUsers";

import UserItem from "/src/pages/chat/users/UserItem";
import UsersSearch from "/src/pages/chat/users/UsersSearch";
import { useState, useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '/src/store';
const Users = () => {

  // const { loading, users } = useGetUsers();
  const dispatch = useDispatch();


  const { allUsers, isLoagingUsers } = useSelector((state) => {
    // console.log(state.chat)
    return state.chat;
  });

  const [filterUsers, setFilterUsers] = useState([]);
  // const userSlice = users.slice(0, 10);

  useEffect(() => {

    dispatch(getAllUsers());

  }, []);

  useEffect(() => {
    if (allUsers.length > 0) {
      setFilterUsers(allUsers);
    }
  }, [allUsers]);

  return (
    <>
      <UsersSearch allUsers={allUsers} setFilterUsers={setFilterUsers} />
      <div className="main-grid">
        {isLoagingUsers ? 'Loading...' : filterUsers.map(user => <div className="col-4 col-xs-12"><UserItem key={user.id} user={user} /></div>)}
      </div>
    </>
  )
}

export default Users;