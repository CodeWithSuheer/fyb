import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/authSlice";
import ActionsSlice from "../features/ActionsSlice";

export const store = configureStore({
  reducer: {
    actions: ActionsSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
