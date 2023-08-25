import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {BASE_URL} from "../utils/constants";

const initialState = {
  product: {
    id: 0,
    title: "",
    price: 0,
    description: "",
    category: {
      id: 0,
      name: "",
    },
    images: [],
    quantity: 0
  },
};

export const getProduct = createAsyncThunk("getProduct", async (id, thunkAPI) => {
  try {
    const response = await axios(
      `${BASE_URL}/products/` + id
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
    });
  },
});

export default productSlice.reducer;
