import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const addPost = createAsyncThunk('add/post', async (formData, { rejectWithValue }) => {
  try {
    console.log('add companies', formData)


    const response = await axios.post('/wp-json/wp/v2/' + formData.type,
      {

        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        status: 'publish',
        acf: formData,
        companies_category: formData.companies_category,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${formData.token}`
        }
      }
    );


    console.log('ok add companies', response.data)
    return response.data;

  } catch (error) {
    console.log('error', error)
    return rejectWithValue(error.response.data);
  }
});


export { addPost };
