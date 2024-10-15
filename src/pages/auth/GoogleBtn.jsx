import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { authorizationUser, registrationUser, googleUser } from '/src/store';



const GoogleBtn = ({ className }) => {

  const apiGoogleKey = '643830808722-d1huskid47ngtr732nabt04c5vkgof0j.apps.googleusercontent.com';

  const { userData, isLoadingUser, errorUser } = useSelector((state) => {
    return state.users;
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData) {
      console.log('userData', userData)
      dispatch(authorizationUser(userData));
      // navigate('/cabinet', { replace: true });
    }
  }, [userData]);





  const BtnTemplate = () => {

    const login = useGoogleLogin({
      onSuccess: async tokenResponse => {
        dispatch(googleUser(tokenResponse.access_token))


      },
      onError: () => console.log('FAILED'),
    });


    return (<div className={className} onClick={login}><span>Вход через Google</span><i></i></div>)

  }


  return (
    <GoogleOAuthProvider clientId={apiGoogleKey}>
      {isLoadingUser && 'Loading Google...'}
      <BtnTemplate />
    </GoogleOAuthProvider>
  )
}


export default GoogleBtn
