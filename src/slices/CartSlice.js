import { createAsyncThunk, createSlice  } from "@reduxjs/toolkit";
import { addToCart, getCart ,updateCartProduct ,removeFromCart } from "../api/Cart_api";

const initialState = {
  cart: [],
  status: "loading",
  error: null,
};

export const addToCartAsync = createAsyncThunk("Cart/add", async (Data) => {
  const data = await addToCart(Data);
  return data;
});
export const getCartAsync = createAsyncThunk("Cart/get", async (userid) => {
  const data = await getCart(userid);
  return data;
});
export const updateCartProductAsync = createAsyncThunk("Cart/update", async (product_cart) => {
  const data = await updateCartProduct(product_cart);
  return data;
});
export const removeFromCartAsync = createAsyncThunk("Cart/delete", async (product_cart_id) => {
  const data = await removeFromCart(product_cart_id);
  return data;
});

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cart.push(action.payload);
        state.error = null;
      })
      .addCase(getCartAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cart = action.payload;
        state.error = null;
      })
      .addCase(updateCartProductAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(updateCartProductAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const idx = state.cart.findIndex((item)=>item.id===action.payload.id);
        state.cart[idx]=action.payload;
        state.error = null;
      })
      .addCase(removeFromCartAsync.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(removeFromCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.cart = state.cart.filter((elem)=>elem.id!==action.payload);
        state.error = null;
      });
  },
});

export const { increment } = cartSlice.actions;

export default cartSlice.reducer;
