import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import { getOrderState } from "../api/OrderState_api";

const initialState = {
  orderState: [],
  status: "idle",
  error: null,
};

export const getOrderStateAsync = createAsyncThunk("orderState/get", async () => {
  const data = await getOrderState();
  return data;
});


export const orderStateSlice = createSlice({
  name: "orderstate",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderStateAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getOrderStateAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.orderState=action.payload;
        state.error = null;
      });
  },
});

export const { increment } = orderStateSlice.actions;

export default orderStateSlice.reducer;
