import { Link } from 'react-router-dom';

import GoogleBtn from '/src/pages/auth/GoogleBtn';


const Choise = () => {




  return (
    <div className="main-full">
      <h1>Вход в кабинет</h1>
      <ul className="ln login-menu">
        <li><Link className="btn-reg sign-in-btn" to="/cabinet/authorization/"><span>Авторизация</span><i></i></Link></li>
        <li><Link className="btn-reg log-in-btn" to="/cabinet/registration/"><span>Регистрация</span><i></i></Link></li>
        <li><GoogleBtn className="btn-reg google-reg-btn" /></li>

      </ul>
    </div>
  )
}

export default Choise
