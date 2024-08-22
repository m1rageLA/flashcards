import { configureStore } from "@reduxjs/toolkit";
import decsReducer from "./features/decs"; // импортируйте ваш slice

const store = configureStore({
  reducer: {
    decs: decsReducer, // добавляем ваш редюсер
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
