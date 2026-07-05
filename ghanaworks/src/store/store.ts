import { configureStore } from '@reduxjs/toolkit';
import queueReducer from '../features/queue/queueSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    queue: queueReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
