import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  isAuth: false,
  userId: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      if (!token || !userId) {
        return;
      }
      state.userId = userId;
      state.token = token;
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = '';
      state.userId = '';
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('expiryDate');
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
