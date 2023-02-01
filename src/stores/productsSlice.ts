import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { getProducts } from "../services/products";

export interface ProductState {
  products: any;
  product: any;
}

const initialState: ProductState = {
  products: 0,
  product: 0,
};

export const productState = createSlice({
  name: "products",
  initialState,
  reducers: {
    setReduxProducts: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
    setProductDetail: (state, action: PayloadAction<any>) => {
      state.product = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReduxProducts, setProductDetail } = productState.actions;

export default productState.reducer;
