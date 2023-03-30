import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './basketStore';
import userReducer from './userStore';
const store = configureStore({
  reducer: {
    basket: basketReducer,
    user: userReducer,
  },
});
export default store;
