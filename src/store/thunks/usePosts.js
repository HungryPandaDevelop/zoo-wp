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


export { addPost, updatePost, getPosts, getPostSingle, deletePost };
