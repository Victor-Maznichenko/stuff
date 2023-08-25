import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IProduct} from "../components/Catalog/Item/IProduct";
import axios from "axios";
import {BASE_URL} from "../utils/constants";

interface IUser {
    cart: Array<IProduct>;
    favorite: Array<IProduct>;
    info?: {
        id?: number;
        name: string;
        email: string;
        password: string;
        role?: string;
        avatar: string;
    };
    formType?: string;
    isShowForm: boolean;
    isLogin: boolean;
}

const initialState: IUser = {
    cart: [],
    favorite: [],
    info: undefined,
    formType: "signup",
    isShowForm: false,
    isLogin: false
};

export const createUser = createAsyncThunk(
    "createUser",
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/register/`, payload);
            return res.data;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

export const loginUser = createAsyncThunk(
    "loginUser",
    async (payload, thunkAPI) => {
        try {
            const res = await axios.post(`${BASE_URL}/login/`, payload);
            return res.data.user;
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err);
        }
    }
);

const add = (array: Array<IProduct>, payload: IProduct) => {
    const chosenProduct = array.find((product) => payload.id == product.id);

    if (chosenProduct != undefined) {
        chosenProduct.quantity += 1;
    } else {
        array.push({...payload, quantity: 1});
    }
};

const changeStateLogin = (state, payload) => {
    state.info = payload;
    state.isLogin = true;
}

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {
            add(state.cart, payload);
        },
        reduceFromCart: (state, {payload}) => {
            const chosenProduct = state.cart.find((product) => payload.id == product.id);
            if (chosenProduct !== undefined && chosenProduct.quantity > 1) chosenProduct.quantity -= 1;
        },
        removeFromCart: (state, {payload}) => {
            state.cart = state.cart.filter((product) => payload.id !== product.id);
        },
        addToFavorite: (state, {payload}) => {
            add(state.favorite, payload);
        },
        toggleShowForm: (state) => {
            state.isShowForm = !state.isShowForm;
        },
        unLoginUser: (state) => {
            state.info = undefined;
            state.isLogin = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, {payload}) => {
            changeStateLogin(state, payload)
        });
        builder.addCase(loginUser.fulfilled, (state, {payload}) => {
            changeStateLogin(state, payload)
        });
    },
});

export const {addToCart, addToFavorite, toggleShowForm, unLoginUser, removeFromCart, reduceFromCart} = userSlice.actions;
export default userSlice.reducer;
