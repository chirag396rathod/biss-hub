import { configureStore } from '@reduxjs/toolkit';
import commonReducer from './features/auth/commonSlice';

export const store = configureStore({
  reducer: {
    commonReducer: commonReducer
  },
})