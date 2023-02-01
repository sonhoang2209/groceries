import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  user: any;
}

const initialState: UserState = {
  user: {},
};

export const userState = createSlice({
  name: "users",
  initialState,
  reducers: {
    setReduxUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReduxUser } = userState.actions;

export default userState.reducer;
