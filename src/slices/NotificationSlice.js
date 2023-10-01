import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import getAllNotifications, { deleteteNotification } from "../api/Notification_api";

const initialState = {
  notifications:[],
  status: 'idle',
};

export const getAllNotificationsAsync = createAsyncThunk(
  'notifications/fetchAll',
  async () => {
    const data = await getAllNotifications();
    return data;
  }
);
export const deleteteNotificationAsync = createAsyncThunk(
  'notification/delete',
  async (id) => {
    const data = await deleteteNotification(id);
    return data;
  }
);

export const   notificationListSlice = createSlice({
  name: 'notificationlist',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllNotificationsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllNotificationsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.notifications = action.payload;
      }).addCase(deleteteNotificationAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteteNotificationAsync.fulfilled, (state, action) => {
        state.status = 'idle';
      });
  },
});

export const { increment, decrement, incrementByAmount } =   notificationListSlice.actions;

export default  notificationListSlice.reducer;
