import { useState } from "react";
import toast from "react-hot-toast";

const UsersSearch = ({ allUsers, setFilterUsers }) => {

  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 characters long");
    }

    const users = allUsers.filter((c) => c.username.toLowerCase().includes(search.toLowerCase()));

    if (users) {
      console.log('users', users)
      setFilterUsers(users);
      setSearch("");
    } else toast.error("No such user found!");
  };

  const reset = () => {
    setFilterUsers(allUsers);
  }

  return (
    <>
      <form className="main-grid users-search" onSubmit={handleSubmit}>
        <div className="col-6 col-xs-12">
          <input
            type='text'
            placeholder='Search…'
            className="input-decorate"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-3 col-xs-6">
          <button type='submit' className='btn btn--blue-border'>Найти
          </button>
        </div>
        <div className="col-3 col-xs-6">
          <div className="btn btn--blue" onClick={reset}>Сбросить</div>
        </div>
      </form>
    </>
  )
}

export default UsersSearch