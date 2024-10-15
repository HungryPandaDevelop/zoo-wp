import { Link, NavLink } from "react-router-dom";
import { logoutUser } from "/src/store";
import { useDispatch, useSelector } from "react-redux";


const Sidebar = () => {
  const dispatch = useDispatch();


  const { userData, isLoadingUser, errorUser } = useSelector((state) => {
    return state.users;
  });



  const handleLogout = async () => {
    dispatch(logoutUser());
  }

  if (!userData) {
    return false;
  }

  return (
    <>
      {/* <h1>Мой кабинет</h1> */}
      {/* <h2 className="cabinet-name">Логин: {userData.user_login} </h2> */}
      <div className="cabinet-nav">
        <ul className="cabinet-nav-main ln">
          <li >
            <NavLink to="/cabinet" className="edit-cabinet" activeClassName="active" end>Мой профиль</NavLink >
          </li>
          <li >
            <NavLink to="/cabinet/companies" className="pitomnik" activeClassName="active">Мои компании</NavLink>
          </li>
          <li  >
            <NavLink to="/cabinet/pets" className="pets" activeClassName="active">Племенной фонд</NavLink >
          </li>
          <li >
            <NavLink to="/cabinet/sales" className="ads" activeClassName="active">Мои объявления</NavLink>
          </li>
          <li ><span className="logout link" onClick={handleLogout}>Выйти</span></li>
        </ul>
        {/* <ul className="cabinet-footer ln">
           <li><span className="link">Удалить аккаунт</span></li> 
          
        </ul> */}
      </div>
    </>

  )
}

export default Sidebar