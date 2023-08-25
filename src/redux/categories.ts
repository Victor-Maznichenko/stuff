import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICategory} from "../components/Categories/Category/ICategory";
import axios from "axios";
import {BASE_URL} from "../utils/constants";

interface ICategoriesState {
    list: Array<ICategory>;
}

const initialState: ICategoriesState = {
    list: [],
};

// Создаю action getUsers
export const getCategories = createAsyncThunk(
    "getCategories",
    async (_, thunkAPI) => {
        try {
            const res = await axios.get(`${BASE_URL}/categories`);
            return res.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.list = action.payload;
        });
    },
});

export default categoriesSlice.reducer;
