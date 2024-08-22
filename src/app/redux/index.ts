
import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import dataReducer from './features/decs';

// Создание store
const makeStore = () => configureStore({
  reducer: {
    data: dataReducer,
  },
});

// Создание обёртки для next-redux-wrapper
export const wrapper = createWrapper(makeStore);
