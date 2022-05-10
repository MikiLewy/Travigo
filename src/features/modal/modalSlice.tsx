import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  title: '',
  isInfo: false,
  isEditing: false,
  isError: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state) => {
      state.title = '';
      state.isInfo = false;
      state.isEditing = false;
      state.isOpen = true;
      state.isError = false;
    },
    close: (state) => {
      state.title = '';
      state.isInfo = false;
      state.isEditing = false;
      state.isOpen = false;
      state.isError = false;
    },
    create: (state) => {
      state.title = 'Create a new event';
      state.isInfo = false;
      state.isEditing = false;
      state.isOpen = true;
      state.isError = false;
    },
    edit: (state) => {
      state.title = 'Edit an existing event';
      state.isInfo = false;
      state.isEditing = true;
      state.isOpen = true;
      state.isError = false;
    },
    info: (state) => {
      state.title = '';
      state.isInfo = true;
      state.isEditing = false;
      state.isOpen = true;
      state.isError = false;
    },
    error: (state) => {
      state.title = 'Something went wrong';
      state.isInfo = false;
      state.isEditing = false;
      state.isOpen = true;
      state.isError = true;
    },
  },
});

export const { open, close, info, edit, create, error } = modalSlice.actions;

export default modalSlice.reducer;
