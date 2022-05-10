import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  isAuth: false,
  userId: '',
  userName: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');
      const userName = localStorage.getItem('userName');
      if (!token || !userId || !userName) {
        return;
      }
      state.userId = userId;
      state.token = token;
      state.isAuth = true;
      state.userName = userName;
    },
    logout: (state) => {
      state.isAuth = false;
      state.token = '';
      state.userId = '';
      state.userName = '';
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      localStorage.removeItem('userId');
      localStorage.removeItem('expiryDate');
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
