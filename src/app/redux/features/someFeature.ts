import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SomeAction {
  value: number;
}

const initialState: SomeAction = {
  value: 0,
};

const someSlice = createSlice({
  name: "someFeature",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1;
    },
    decrement(state) {
      state.value -= 1;
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = someSlice.actions;

export default someSlice.reducer;