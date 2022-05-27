import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../store/post/postSlice';
import cartReducer from './cart/cartSlice'


export const store = configureStore({
  reducer: {
    posts:postReducer,
    cart: cartReducer,
  },
});
