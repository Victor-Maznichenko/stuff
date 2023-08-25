import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../components/Catalog/Item/IProduct";
import axios from "axios";
import {BASE_URL} from "../utils/constants";

interface IProductsState {
  list: Array<IProduct>,
  filtered: Array<IProduct>,
  related: Array<IProduct>,
  current: IProduct
}

const initialCurrent: IProduct = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  category: {
    id: 0,
    name: ''
  },
  images: [],
  quantity: 0
}

const initialState: IProductsState = {
  list: [],
  filtered: [],
  related:[],
  current: initialCurrent
};

export const getProducts = createAsyncThunk("getProducts", async (_, thunkAPI) => {
  try {
    const response = await axios(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});


const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    filterByPrice: (state, action) => {
      state.filtered = state.list.filter(product => product.price < action.payload)
    },
    filterByRelated: (state, action) => {
      state.related = state.list.filter(product => product.category.id == action.payload)
    },
    findById: (state, action) => {
      state.current = state.list.find(({id}) => id == action.payload) || state.current;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
        state.list = action.payload;
    })
  },
});

export const { filterByPrice, filterByRelated, findById } = productsSlice.actions;
export default productsSlice.reducer;
