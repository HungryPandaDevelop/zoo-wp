
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Form from '/src/components/forms/forgot/Form';


import axios from 'axios';
// import { toast } from 'react-toastify';

import ErrPopup from '/src/components/forms/ErrPopup'

// import { useDispatch } from 'react-redux';
// import { clearErrorUser } from '/src/store';

import { useState, useEffect } from 'react';


const ForgotPassword = () => {

  const navigate = useNavigate();

  const formData = useSelector((state) => {
    return state.form.regFormId
  });

  const [errUser, setErrUser] = useState(false);

  const submitSuccess = async () => {
    let timer;
    const data = {
      'email': formData.values.user_login
    }
    clearTimeout(timer);
    try {
      const response = await axios.post('/wp-json/bdpwr/v1/reset-password/', data);


      // console.log('send update', response);
      // toast.success('Письма сброса пароля отправлено на почту');
      setErrUser('Письма сброса пароля отправлено на почту');
      timer = setTimeout(() => {
        setErrUser(false);
        navigate('/cabinet/', { replace: true });
      }, 2000);
    } catch (err) {
      // toast.error('Ошибка')
      setErrUser('Пользователя с таким именем не существует');

      timer = setTimeout(() => {
        setErrUser(false);
      }, 2000);
    }


  };



  return (
    <div className="main-full page-auth">
      {errUser && <ErrPopup message={errUser} />}
      <h1>Восстановить пароль</h1>
      <Form param={{ submitSuccess }} />
    </div>
  )
}

export default ForgotPassword
