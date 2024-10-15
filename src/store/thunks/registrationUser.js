import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getNowDate } from '/src/store/thunks/getNowDate';

const registrationUser = createAsyncThunk('reg', async (formData, { rejectWithValue }) => {
  try {
    console.log('reg', formData)
    await axios.post('/wp-json/adeapi/v1/add_user_api', formData);


    const response = await axios.post('/wp-json/jwt-auth/v1/token', {
      username: formData.user_login,
      password: formData.user_pass
    });

    console.log('ok reg', response.data)
    return { ...response.data, user_login: response.data.user_display_name, authDate: getNowDate() };

  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});


export { registrationUser };
