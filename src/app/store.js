import { configureStore } from '@reduxjs/toolkit';
import ProductListReducer from '../slices/ProductListSlice';
import categoryListReducer from '../slices/CategoryListSlice';
import brandListReducer from '../slices/BrandListSlice';
import notificationListReducer from '../slices/NotificationSlice';
import authReducer from "../slices/AuthSlice";
import cartReducer from "../slices/CartSlice";
import orderStateReducer from "../slices/OrderStateSlice";

export const store = configureStore({
  reducer: {
    productList:ProductListReducer,
    categoryList:categoryListReducer,
    brandList:brandListReducer,
    notificationList:notificationListReducer,
    auth:authReducer,
    cart:cartReducer,
    orderState:orderStateReducer,
  },
});
