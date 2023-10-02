import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getAllReviewsByProductId, { createReview } from "../api/Review_api";

const initialState = {
    reviews:[],
    status: 'idle',
  };
export const createReviewAsync = createAsyncThunk(
    'reviews/create',
    async (reviewData) => {
      const data = await createReview(reviewData);
      return data;
    }
);
export const getAllReviewsByProductIdAsync = createAsyncThunk(
    'reviews/fetchAll',
    async (id) => {
      const data = await getAllReviewsByProductId(id);
      return data;
    }
);
export const reviewListSlice = createSlice({
    name: 'reviewlist',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      increment: (state) => {
        state.value += 1;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(createReviewAsync.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(createReviewAsync.fulfilled, (state, action) => {
            state.status = 'idle';
        })
        .addCase(getAllReviewsByProductIdAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(getAllReviewsByProductIdAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.reviews = action.payload;
        });
    },
});

export const {increment} = reviewListSlice.actions;

export default  reviewListSlice.reducer;