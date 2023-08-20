import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'

interface ICategory {
    id: number,
    name: string
}

interface ICategoriesState {
    list: Array<ICategory>
}

const initialState: ICategoriesState = {
    list: []
};

// Создаю action getUsers
export const getCategories = createAsyncThunk(
    'getCategories',
    async () => {
        try {
            const response = await axios('https://api.escuelajs.co/api/v1/categories');
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
);

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.list = action.payload;
        });
    }
});


export default categoriesSlice.reducer;