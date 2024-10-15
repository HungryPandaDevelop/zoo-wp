import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "/src/store";
import { useEffect } from 'react';


const HeaderAuth = () => {

  const dispatch = useDispatch();

  const userData = useSelector((state) => {
    // console.log(state.users.userData);
    window.userData = state.users.userData;
    return state.users.userData;
  });

  useEffect(() => {
    if (userData && !userData.token) {
      dispatch(logoutUser());
    }
  }, []);




  const handleLogout = async () => {
    dispatch(logoutUser());
  }

  // const [showPanel, setShowPanel] = useState(false);




  const renderImg = (data) => {

    if (data.foto_profilya && data.foto_profilya !== "[]") {
      const toJson = JSON.parse(data.foto_profilya);
      // console.log(toJson)

      return (<div className="img-cover"><img src={toJson[0].url} alt="" /></div>)
    } else {
      return false;
    }
  }


  return (
    <>
      {userData ? (
        <>
          <div className="user-header">
            <div className="admin-panel">
              <div className="panel-img-container"
              // onClick={() => { setShowPanel(!showPanel) }}
              >
                <a href="/cabinet/" className="panel-img-account">
                  {renderImg(userData)}
                </a>
              </div>
              {/* <div className="logout-btn-ico" onClick={handleLogout}> </div> */}
              <div className="btn btn--blue-border" onClick={handleLogout}>Выйти</div>
            </div>
            {/* {showPanel && (<div className="popup-panel">
              <div className="popup-panel-name">
                {userData.user_login}
              </div>
              <div className="btn-container">
                <a href="/cabinet/" className="btn btn--blue-border">В кабинет</a>
                <a href="/cabinet/sales" className="btn btn--black">Добавить объявление</a>
              </div>
            </div>)} */}
          </div>
        </>) : (
        <>
          {/* <a href="/cabinet/" className="login-btn-ico"> </a> */}
          <a href="/cabinet/" className="btn btn--blue-border" >Войти</a>
        </>
      )
      }
    </>
  )
}

export default HeaderAuth;
