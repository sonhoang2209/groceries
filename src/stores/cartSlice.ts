import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  products: any;
}

const initialState: CartState = {
  products: [],
};

export const productState = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const isIndExisted = state.products?.findIndex(
        (e: { id: any; topping: any; size: any }) =>
          e?.id === action.payload?.id &&
          e?.topping === action.payload?.topping &&
          e?.size === action.payload?.size
      );
      console.log(state.products);

      if (isIndExisted !== -1) {
        let newState = state.products;
        newState[isIndExisted].quantity =
          newState[isIndExisted].quantity + action.payload?.quantity;
        state.products = [...newState];
      } else {
        state.products = [...state.products, action.payload];
      }
    },
    removeToCart: (state, action: PayloadAction<any>) => {
      const isIndExisted = state.products?.findIndex(
        (e: { id: any; topping: any; newPrice: any }) =>
          e?.id === action.payload?.id &&
          e?.topping === action.payload?.topping &&
          e?.newPrice == action.payload?.newPrice
      );
      console.log(isIndExisted, action.payload);

      // state.products = [...state.products];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart } = productState.actions;

export default productState.reducer;
