import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setMessage } from "./message";
import CategoryService from "../services/category.service";

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const data = await CategoryService.getAllCategories();
    return data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState: {
    listCategories: [],
    status: "idle",
  },
  extraReducers: {
    [fetchCategories.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCategories.fulfilled]: (state, { payload }) => {
      state.listCategories = payload;
      state.status = "success";
    },
    [fetchCategories.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

const { reducer } = categorySlice;
export default reducer;

export const selectAllCategories = (state) => state.category.listCategories;
export const selectCategoryStatus = (state) => state.category.status;
