import { configureStore } from "@reduxjs/toolkit";
import categories from './categories';
import { useDispatch } from "react-redux";


export const store = configureStore({
    reducer: {
        categories
    },
    devTools: true
});

export const useStoreDispatch = ()  => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>;