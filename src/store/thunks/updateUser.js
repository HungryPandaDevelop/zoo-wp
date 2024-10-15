import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const updateUser = createAsyncThunk('update', async (formData, { rejectWithValue }) => {
  try {
    console.log('send update', formData)
    const response = await axios.post('/wp-json/wp/v2/users/' + formData.user_id,
      {
        ...formData,
        acf: {
          'extra_name': formData.extra_name,
          'phone': formData.phone,
          'city': formData.city,
          'address': formData.address,
          'foto_profilya': formData.foto_profilya,
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${formData.token}`
        }
      });

    const userData = response.data;

    const backData = {
      user_login: userData.username || '',
      first_name: userData.first_name || '',
      last_name: userData.last_name || '',
      extra_name: userData.acf ? userData.acf.extra_name || '' : '',
      phone: userData.acf ? userData.acf.phone || '' : '',
      user_email: userData.email || '',
      foto_profilya: userData.acf ? userData.acf.foto_profilya || '' : '',
      address: userData.acf ? userData.acf.address || '' : '',
      city: userData.acf ? userData.acf.city || '' : '',
    };

    console.log('ok update', response.data)

    return backData;

  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});


export { updateUser };
