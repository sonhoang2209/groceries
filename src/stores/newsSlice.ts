import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  news: any;
}

const initialState: CounterState = {
  news: [],
};

export const counterSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    getReduxNews: (state, action: PayloadAction<any>) => {
      state.news = action.payload;
    },
  },
});

export const { getReduxNews } = counterSlice.actions;

export default counterSlice.reducer;
