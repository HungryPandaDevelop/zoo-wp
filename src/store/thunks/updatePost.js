import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const updatePost = createAsyncThunk('update/post', async (formData, { rejectWithValue }) => {
  try {



    console.log('send update', formData)

    const response = await axios.post('/wp-json/wp/v2/' + formData.type + '/' + formData.id,
      {
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        acf: formData,
        companies_category: formData.companies_category
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${formData.token}`
        }
      });


    return response.data;

  } catch (error) {
    console.log(error.response)
    return rejectWithValue(error.response.data);
  }
});


export { updatePost };
