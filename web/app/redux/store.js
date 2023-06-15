import { configureStore } from '@reduxjs/toolkit';
import foodsReducer from './foods';
export const store = configureStore({
  reducer: { foods: foodsReducer },
});
