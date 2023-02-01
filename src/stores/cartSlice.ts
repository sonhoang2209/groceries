import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  products: any;
}

const initialState: CartState = {
  products: [],
};

export const productState = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const isIndExisted = state.products?.findIndex(
        (e: { id: any; topping: any; size: any }) =>
          e?.id === action.payload?.id &&
          e?.topping === action.payload?.topping &&
          e?.size === action.payload?.size
      );
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
      const remove = action.payload;
      state.products = [
        ...state.products.filter(
          (e: any) =>
            e?.id != remove?.id ||
            e?.topping !== remove?.topping ||
            e.size !== remove.size
        ),
      ];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeToCart } = productState.actions;

export default productState.reducer;
