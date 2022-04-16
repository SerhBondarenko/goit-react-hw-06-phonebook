import { createSlice } from '@reduxjs/toolkit';
import data from '../data/data.json'


export const contactSlice = createSlice({
  name: 'items',
  initialState: data,
  reducers: {
    addContact: (state, action) => {
      state.push(action.payload);
    },
    deleteContact: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

export default contactSlice.reducer;
