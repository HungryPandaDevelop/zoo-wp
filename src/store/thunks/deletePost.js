import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const deletePost = createAsyncThunk('delete/post', async (formData, { rejectWithValue }) => {
  try {

    const response = await axios.delete('/wp-json/wp/v2/' + formData.type + '/' + formData.id,
      {
        headers: {
          'Authorization': `Bearer ${formData.token}`
        }
      });

    console.log('delete', response.data)
    return response.data;

  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});


export { deletePost };
