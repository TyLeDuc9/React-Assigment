// UserReducer.js
import { createSlice } from '@reduxjs/toolkit';
import { userList } from './Data';

const userSlice = createSlice({
  name: 'users',
  initialState: userList,
  reducers: {
    create: (state, action) => {
      state.push(action.payload);
    },
    update: (state, action) => {
      const { id, name, email } = action.payload;
      const existing = state.find(user => user.id === id);
      if (existing) {
        existing.name = name;
        existing.email = email;
      }
    },
    deleteUser: (state, action) => {
      const { id } = action.payload;
      return state.filter(user => user.id !== id);
    }
  },
});

export const { create, update, deleteUser } = userSlice.actions;
export default userSlice.reducer;
