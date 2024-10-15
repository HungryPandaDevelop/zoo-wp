import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getNowDate } from '/src/store/thunks/getNowDate';

import Cookies from 'js-cookie';

const authorizationUser = createAsyncThunk('auth', async (formData, { rejectWithValue }) => {


  console.log('formattedDate', getNowDate());


  try {
    const response = await axios.post('/wp-json/jwt-auth/v1/token', {
      username: formData.user_login,
      password: formData.user_pass
    });
    console.log('auth ok', response.data);

    // Сохраняем токен в куки
    Cookies.set('jwt', response.data.token, { expires: 15, secure: true, sameSite: 'Strict' });
    // ЗАБРАТЬ
    // import Cookies from 'js-cookie';

    // const token = Cookies.get('jwt');
    // const response = await axios.get('/wp-json/some-endpoint', {
    //   headers: {
    //     Authorization: `Bearer ${token}`
    //   }
    // });
    // ЗАБРАТЬ

    return { ...response.data, user_login: response.data.user_display_name, authDate: getNowDate() };
  } catch (error) {

    if (error.response.data.code === '[jwt_auth] invalid_username') {
      return rejectWithValue('Пользователь не найден');
    }
    else if (error.response.data.code === '[jwt_auth] incorrect_password') {
      return rejectWithValue('Неправильный пароль');
    } else {
      return rejectWithValue('Ошибка при аутентификации');
    }
  }
});


export { authorizationUser };
