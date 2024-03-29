import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import productsSlice from "./productsSlice";
import cartSlice from "./cartSlice";
import newsSlice from "./newsSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    products: productsSlice,
    cart: cartSlice,
    news: newsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
