import { createSlice } from '@reduxjs/toolkit';

import { getCompanies } from '/src/store/thunks/getCompanies';
import { getCompaniesSingle } from '/src/store/thunks/getCompaniesSingle';
import { addCompanies } from '/src/store/thunks/addCompanies';
// import { updateCompanies } from '/src/store/thunks/updateCompanies';
// import { deleteCompanies } from '/src/store/thunks/deleteCompanies';




const companiesSlice = createSlice({
  name: 'companies',
  initialState: {
    isLoadingCompanies: false,
    companiesList: [],
    companiesSingle: null,
    errorCompanies: null,
  },
  reducers: {

    // logoutUser(state) {
    //   state.userData = null;
    //   localStorage.removeItem('user');
    // },

  },
  extraReducers(builder) {


    // addCompanies
    builder.addCase(addCompanies.pending, (state, action) => {
      state.isLoadingCompanies = true;
    });
    builder.addCase(addCompanies.fulfilled, (state, action) => {
      state.isLoadingCompanies = false;

      state.companiesList = [...state.companiesList, action.payload];
    });
    builder.addCase(addCompanies.rejected, (state, action) => {
      state.isLoadingCompanies = false;
      state.errorCompanies = action.payload;
    });
    // addCompanies

    // getCompanies
    builder.addCase(getCompanies.pending, (state, action) => {
      state.isLoadingCompanies = true;
    });
    builder.addCase(getCompanies.fulfilled, (state, action) => {
      state.isLoadingCompanies = false;
      state.companiesList = action.payload;
    });
    builder.addCase(getCompanies.rejected, (state, action) => {
      state.isLoadingCompanies = false;
      state.errorCompanies = action.payload;
    });
    // getCompanies
    // getCompaniesSingle
    builder.addCase(getCompaniesSingle.pending, (state, action) => {
      state.isLoadingCompanies = true;
    });
    builder.addCase(getCompaniesSingle.fulfilled, (state, action) => {
      state.isLoadingCompanies = false;
      state.companiesSingle = action.payload;
    });
    builder.addCase(getCompaniesSingle.rejected, (state, action) => {
      state.isLoadingCompanies = false;
      state.errorCompanies = action.payload;
    });
    // getCompaniesSingle

  },
});

// export const { logoutUser } = usersSlice.actions;
export const companiesReducer = companiesSlice.reducer;
