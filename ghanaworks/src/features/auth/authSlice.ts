import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  userId?: string;
  phone?: string;
  role?: 'artisan' | 'client';
  verified?: boolean;
}

const initialState: AuthState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AuthState>) {
      return { ...state, ...action.payload };
    },
    clearUser() {
      return {} as AuthState;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
