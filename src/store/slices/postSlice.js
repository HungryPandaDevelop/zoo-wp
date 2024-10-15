import { createSlice } from '@reduxjs/toolkit';

import { getPosts, getPostSingle, addPost, updatePost, deletePost } from '/src/store/thunks/usePosts';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    isLoadingPost: false,
    postsList: [],
    postSingle: null,
    errorPost: null,
  },
  reducers: {

    // logoutUser(state) {
    //   state.userData = null;
    //   localStorage.removeItem('user');
    // },

  },
  extraReducers(builder) {


    // addPost
    builder.addCase(addPost.pending, (state, action) => {
      state.isLoadingPost = true;
    });
    builder.addCase(addPost.fulfilled, (state, action) => {
      state.isLoadingPost = false;
      state.postsList = [...state.postsList, action.payload];
    });
    builder.addCase(addPost.rejected, (state, action) => {
      state.isLoadingPost = false;
      state.errorCompanies = action.payload;
    });
    // addPost

    // getPosts
    builder.addCase(getPosts.pending, (state, action) => {
      state.isLoadingPost = true;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.isLoadingPost = false;
      state.postsList = action.payload;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.isLoadingPost = false;
      state.errorPost = action.payload;
    });
    // getPosts

    // getPostSingle
    builder.addCase(getPostSingle.pending, (state, action) => {
      state.isLoadingPost = true;
    });
    builder.addCase(getPostSingle.fulfilled, (state, action) => {
      state.isLoadingPost = false;
      state.postSingle = action.payload;
    });
    builder.addCase(getPostSingle.rejected, (state, action) => {
      state.isLoadingPost = false;
      state.errorPost = action.payload;
    });
    // getPostSingle

    // updatePost
    builder.addCase(updatePost.pending, (state, action) => {
      state.isLoadingPost = true;
    });
    builder.addCase(updatePost.fulfilled, (state, action) => {
      state.isLoadingPost = false;
      state.postSingle = action.payload;

      state.postsList = state.postsList.map(post =>
        post.id === action.payload.id ? action.payload : post
      );

    });
    builder.addCase(updatePost.rejected, (state, action) => {
      state.isLoadingPost = false;
      state.errorPost = action.payload;
    });
    // updatePost

    // deletePost
    builder.addCase(deletePost.pending, (state, action) => {
      state.isLoadingPost = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.isLoadingPost = false;
      // console.log(action.payload.id,)
      state.postsList = state.postsList.filter((post) => {
        return post.id !== action.payload.id;
      });
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.isLoadingPost = false;
      state.errorPost = action.payload;
    });
    // deletePost

  },
});

// export const { logoutUser } = usersSlice.actions;
export const postsReducer = postsSlice.reducer;
