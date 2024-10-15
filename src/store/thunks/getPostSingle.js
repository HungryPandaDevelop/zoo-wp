import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const getPostSingle = createAsyncThunk('get/post/single', async (formData, { rejectWithValue }) => {
  try {
    // console.log('get companies', formData)
    const response = await axios.get('/wp-json/wp/v2/' + formData.type + '/' + formData.id);


    // console.log('ok get companies', response.data)
    return response.data;

  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});


export { getPostSingle };
