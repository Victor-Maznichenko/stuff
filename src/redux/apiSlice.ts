import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BASE_URL, buildURL} from "../utils/constants";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (params) => buildURL("/products", params),
            providesTags: ["Products"],
        }),
        getCategory: builder.query({
            query: (id) => `${BASE_URL}/categories/${id}`,
            providesTags: ["Category"],
        })
    }),
});

export const { useGetProductsQuery, useGetCategoryQuery } = apiSlice;
