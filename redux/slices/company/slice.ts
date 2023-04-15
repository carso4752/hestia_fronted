import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const endPoints = {
  obtener: "barrios/api/getBarrios",
};

const api = axios.create({
  baseURL: "https://us-central1-elprincipe-45296.cloudfunctions.net/",
});

const initialState = {
  values: [],
  loading: false,
} as any;

export const getCompanysAsync = createAsyncThunk(
  "companys/getCompanys",
  async (thunkApi) => {
    const response = await api.get(endPoints.obtener);
    return response.data;
  }
);

export const companySlice = createSlice({
  name: "companys",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCompanysAsync.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getCompanysAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.values = action.payload;
      })
      .addCase(getCompanysAsync.rejected, (state, action) => {});
  },
});

export default companySlice.reducer;
