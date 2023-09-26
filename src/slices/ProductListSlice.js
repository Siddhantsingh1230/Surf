import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchAllProducts from "../api/ProductList_api";
import { filterProducts } from "../api/ProductList_api";

const initialState = {
  products: [],
  status: "loading",
};

export const fetchAllProductsAsync = createAsyncThunk(
  "products/fetchAll",
  async () => {
    const data = await fetchAllProducts();
    return data;
  }
);
export const filterProductsAsync = createAsyncThunk(
  "products/filter",
  async (filterObj) => {
    const data = await filterProducts(filterObj);
    return data;
  }
);

export const productListSlice = createSlice({
  name: "productlist",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(filterProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(filterProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } =
  productListSlice.actions;

export default productListSlice.reducer;
