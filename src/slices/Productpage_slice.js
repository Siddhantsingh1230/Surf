import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getAllProducts,getFilteredProducts} from "../api/Productpage_api";

const initialState = {
  pageProducts: [],
  status: "idle",
  error: null,
};

export const getAllProductsAsync = createAsyncThunk(
  "productPage/getProduct",
  async () => {
    const data = await getAllProducts();
    return data;
  }
);
export const getFilteredProductsAsync = createAsyncThunk(
  "productpage/filteredproduct",
  async (value) =>{
    const data = await getFilteredProducts(value);
    return data;
  }
)

export const productPageSlice = createSlice({
  name: "product",
  initialState,
  reducer: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProductsAsync.pending, (state) => {
      state.status = "loading";
      state.error = null;
    })
    .addCase(getAllProductsAsync.fulfilled, (state,action) => {
        state.status = "idle";
        state.pageProducts=action.payload;
        state.error = null;
      })
      .addCase(getAllProductsAsync.rejected, (state,action) => {
        state.status = "idle";
        state.error = action.error;
      })
      .addCase(getFilteredProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFilteredProductsAsync.fulfilled, (state,action) => {
        state.status = "idle";
        state.pageProducts=action.payload;
        state.error = null;
      })
      .addCase(getFilteredProductsAsync.rejected, (state,action) => {
        state.status = "idle";
        state.error = action.error;
      })
  },
});

export const { increment } = productPageSlice.actions;

export default productPageSlice.reducer;
