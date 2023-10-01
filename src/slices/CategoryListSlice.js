import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchAllCategories from "../api/CategoryList_api";

const initialState = {
  categories:[],
  status: 'idle',
};

export const fetchAllCategoriesAsync = createAsyncThunk(
  'categories/fetchAll',
  async () => {
    const data = await fetchAllCategories();
    return data;
  }
);

export const   categoryListSlice = createSlice({
  name: 'categorylist',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategoriesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllCategoriesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.categories = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } =   categoryListSlice.actions;

export default  categoryListSlice.reducer;
