import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getNowDate } from '/src/store/thunks/getNowDate';



const googleUser = createAsyncThunk('google', async (accessToken, { rejectWithValue }) => {

  try {
    const googleAuthInfo = await axios.get('https://www.googleapis.com/oauth2/v2/userinfo', {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });

    const checkUser = await axios.post('/wp-json/adeapi/v1/check_user_exist', { user_login: googleAuthInfo.data.email });



    if (checkUser.data === 'no') {
      await axios.post('/wp-json/adeapi/v1/add_user_api', {
        user_login: googleAuthInfo.data.email,
        user_email: googleAuthInfo.data.email,
        user_pass: googleAuthInfo.data.id,
      });

      const response = await axios.post('/wp-json/jwt-auth/v1/token', {
        username: googleAuthInfo.data.email,
        password: googleAuthInfo.data.id
      });

      console.log('ok reg', response.data)
      // return response.data;
      return { ...response.data, user_login: response.data.user_display_name, authDate: getNowDate() };
    }
    else {
      const response = await axios.post('/wp-json/jwt-auth/v1/token', {
        username: googleAuthInfo.data.email,
        password: googleAuthInfo.data.id,
      });
      return { ...response.data, user_login: response.data.user_display_name, authDate: getNowDate() };

    }
  } catch (error) {
    console.log('error', error)
    return rejectWithValue('Ошибка google');
  }
});


export { googleUser };
