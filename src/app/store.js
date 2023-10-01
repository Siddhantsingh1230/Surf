import { configureStore } from '@reduxjs/toolkit';
import ProductListReducer from '../slices/ProductListSlice';
import categoryListReducer from '../slices/CategoryListSlice';
import brandListReducer from '../slices/BrandListSlice';
import notificationListReducer from '../slices/NotificationSlice';
import authReducer from "../slices/AuthSlice";

export const store = configureStore({
  reducer: {
    productList:ProductListReducer,
    categoryList:categoryListReducer,
    brandList:brandListReducer,
    notificationList:notificationListReducer,
    auth:authReducer,
  },
});
