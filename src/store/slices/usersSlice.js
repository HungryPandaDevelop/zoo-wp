import { createSlice } from '@reduxjs/toolkit';
import { authorizationUser } from '/src/store/thunks/authorizationUser';
import { registrationUser } from '/src/store/thunks/registrationUser';
import { updateUser } from '/src/store/thunks/updateUser';
import { googleUser } from '/src/store/thunks/googleUser';

const loadUserFromLocalStorage = () => {
  // localStorage.removeItem('user');
  const userJSON = localStorage.getItem('user');

  if (userJSON) {
    return JSON.parse(userJSON);
  }
  return null;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    isLoadingUser: false,
    googleInfo: null,
    userData: loadUserFromLocalStorage(),
    errorUser: null,
  },
  reducers: {

    logoutUser(state) {
      state.userData = null;
      localStorage.removeItem('user');
    },
    clearErrorUser(state) {
      state.errorUser = null;
    },
  },
  extraReducers(builder) {

    // authorizationUser
    builder.addCase(authorizationUser.pending, (state, action) => {
      state.isLoadingUser = true;
    });
    builder.addCase(authorizationUser.fulfilled, (state, action) => {
      state.isLoadingUser = false;
      state.userData = action.payload;

      localStorage.setItem('user', JSON.stringify(action.payload));
    });
    builder.addCase(authorizationUser.rejected, (state, action) => {
      state.isLoadingUser = false;
      state.errorUser = action.payload; // Получаем сообщение об ошибке из payload
    });
    // authorizationUser


    // registratioUser
    builder.addCase(registrationUser.pending, (state, action) => {
      state.isLoadingUser = true;
    });
    builder.addCase(registrationUser.fulfilled, (state, action) => {
      state.isLoadingUser = false;
      console.log('fetch', action.payload)
      state.userData = action.payload;

      localStorage.setItem('user', JSON.stringify(action.payload));
    });
    builder.addCase(registrationUser.rejected, (state, action) => {
      console.log('err bef', action.payload)

      state.isLoadingUser = false;
      state.errorUser = action.payload;

      console.log('err aft', action.payload)
    });
    // registrationUser


    // updateUser
    builder.addCase(updateUser.pending, (state, action) => {
      state.isLoadingUser = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.isLoadingUser = false;

      state.userData = { ...state.userData, ...action.payload };
      console.log('fetch', { ...state.userData, ...action.payload })
      localStorage.setItem('user', JSON.stringify({ ...state.userData, ...action.payload }));
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoadingUser = false;
      state.errorUser = action.payload;
      console.log('err', action.payload)
    });
    // updateUser

    // googleUser
    builder.addCase(googleUser.pending, (state, action) => {
      state.isLoadingUser = true;
    });
    builder.addCase(googleUser.fulfilled, (state, action) => {
      state.isLoadingUser = false;
      console.log('fetch google', action.payload)
      state.userData = action.payload;

      localStorage.setItem('user', JSON.stringify(action.payload));
    });
    builder.addCase(googleUser.rejected, (state, action) => {
      state.isLoadingUser = false;
      state.errorUser = action.payload;
      console.log('err', action.payload)
    });
    // googleUser



  },
});

export const { logoutUser, clearErrorUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
