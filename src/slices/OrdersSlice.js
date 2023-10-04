import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createOrder, getOrders } from "../api/Order_api";

const initialState = {
  orders: [],
  status: "idle",
  currentOrder: null,
};

export const createOrderAsync = createAsyncThunk(
  "orders/create",
  async (orderData) => {
    const data = await createOrder(orderData);
    return data;
  }
);
export const getOrdersAsync = createAsyncThunk("orders/get", async (userId) => {
  const data = await getOrders(userId);
  return data;
});

export const ordersSlice = createSlice({
  name: "orders",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrderAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrderAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.orders.push(action.payload);
        state.currentOrder = action.payload;
      })
      .addCase(getOrdersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getOrdersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.orders = action.payload;
      });
  },
});

export const { increment } = ordersSlice.actions;

export default ordersSlice.reducer;
