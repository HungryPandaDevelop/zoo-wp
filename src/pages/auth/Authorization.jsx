
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';

import Form from '/src/components/forms/authorization/Form';

import { authorizationUser } from '/src/store';

// import ErrPopup from '/src/components/forms/ErrPopup'

import { useState, useEffect } from 'react';


const Authorization = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [showErr, setShowErr] = useState(false);

  const { userData, isLoadingUser, errorUser } = useSelector((state) => {
    return state.users;
  });


  const formData = useSelector((state) => {
    return state.form.regFormId
  });

  useEffect(() => {
    // errorUser && toast.error(errorUser)

    if (userData) {
      navigate('/cabinet', { replace: true });
    }

    // console.log('errorUser', errorUser)
    // if (errorUser) {
    //   // console.log('errorUser')
    //   setShowErr(true);

    //   const timer = setTimeout(() => {
    //     setShowErr(false);
    //   }, 2000);

    //   return () => clearTimeout(timer);
    // }

  }, [userData]);


  const submitSuccess = () => {

    dispatch(authorizationUser(formData.values));
  };





  return (
    <div className="main-full page-auth">
      <h1>Авторизация</h1>
      {/* {showErr && <ErrPopup message={errorUser} />} */}
      <Form param={{
        submitSuccess,
        isLoadingUser,
        errorUser
      }} />


    </div>
  )
}

export default Authorization
