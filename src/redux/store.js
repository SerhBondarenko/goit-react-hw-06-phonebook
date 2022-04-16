import { configureStore } from '@reduxjs/toolkit';
import contactReducer from '../redux/contactSlice';
import filterReducer from '../redux/filterSlice';

export default configureStore({
  reducer: {
    contact: contactReducer,
    filter: filterReducer,
  
  },
})
