import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Decs {
  data: object;
  loading: boolean;
  error: string | null;
}

const initialState: Decs = {
  data: {},
  loading: false,
  error: null,
};

const Decs = createSlice({
  name: "Decs",
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<any>) => {
      state.data = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setData, setLoading, setError } = Decs.actions;
export default Decs.reducer;