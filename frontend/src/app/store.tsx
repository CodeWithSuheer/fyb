import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import ActionsSlice from "../features/ActionsSlice";
import productSlice from "../features/productSlice";

export const store = configureStore({
  reducer: {
    actions: ActionsSlice,
    auth: authSlice,
    products: productSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
