import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchAllProducts, {
  getProductById,
  filterProducts,
} from "../api/ProductList_api";

const initialState = {
  products: [],
  totalItems: 0,
  status: "loading",
  selectedProduct: null,
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
export const getProductByIdAsync = createAsyncThunk(
  "product/getById",
  async (id) => {
    const data = await getProductById(id);
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
        state.products = action.payload.data;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(filterProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(filterProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload.data;
        state.totalItems = action.payload.totalItems;
      })
      .addCase(getProductByIdAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProductByIdAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.selectedProduct = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount } =
  productListSlice.actions;

export default productListSlice.reducer;
