import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import fetchAllBrands from "../api/BrandList_api";

const initialState = {
  brands:[],
  status: 'idle',
};

export const fetchAllBrandsAsync = createAsyncThunk(
  'brands/fetchAll',
  async () => {
    const data = await fetchAllBrands();
    return data;
  }
);

export const   brandListSlice = createSlice({
  name: 'brandlist',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBrandsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllBrandsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.brands = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } =   brandListSlice.actions;

export default  brandListSlice.reducer;
