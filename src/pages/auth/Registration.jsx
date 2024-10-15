import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Form from '/src/components/forms/registration/Form';

import { registrationUser } from '/src/store';


const Registration = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userData, isLoadingUser, errorUser } = useSelector((state) => {
    return state.users;
  });
  const formData = useSelector((state) => {
    return state.form.regFormId
  });

  useEffect(() => {
    if (userData) {

      // dispatch(authorizationUser(formData.values));
      navigate('/cabinet', { replace: true });
    }
  }, [userData]);


  const submitSuccess = async () => {


    dispatch(registrationUser({ ...formData.values, 'user_email': formData.values.user_login }));


  };



  return (
    <div className="main-full page-auth">
      <h1>Регистрация нового пользователя</h1>
      <Form param={{ submitSuccess, isLoadingUser, errorUser }} />
    </div>
  )
}

export default Registration;
