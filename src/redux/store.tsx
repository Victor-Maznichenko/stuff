import { configureStore } from "@reduxjs/toolkit";
import categories from './categories';
import products from './products';
import user from "./user";
import { useDispatch } from "react-redux";
import product from "./product";
import { apiSlice } from "./apiSlice";


export const store = configureStore({
    reducer: {
        categories,
        products,
        user,
        product,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
    devTools: true
});

export const useStoreDispatch = ()  => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;