import { AnyAction, ThunkDispatch, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import companySlice from "./slices/company/slice";
import thunkMiddleware from "redux-thunk";

const store = configureStore({
  reducer: {
    company: companySlice,
  },
  middleware: [thunkMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();

export default store;
