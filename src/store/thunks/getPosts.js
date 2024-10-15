import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const getPosts = createAsyncThunk('get/posts', async (formData, { rejectWithValue }) => {
  try {
    console.log('get', formData.type, formData.id)
    const response = await axios.get('/wp-json/wp/v2/' + formData.type, {
      params: {
        author: formData.id, // Замените formData.userId на вашего пользователя

      },
      // headers: {
      //   'Content-Type': 'application/json',
      //   'Authorization': `Bearer ${formData.token}`
      // }
    }
    );


    // console.log('ok get companies', response.data)
    return response.data;

  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});


export { getPosts };
