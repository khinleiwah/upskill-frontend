import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { categoryApi, productApi } from "../../api/api";
import axios from "axios";

export const get_category = createAsyncThunk(
    'product/get_category',
    async (_, { fulfillWithValue }) => {
        try {
            const { data } = await categoryApi.get('/categories')
            // const { data } = await api.get('category/categories')
            console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.respone)
        }
    }
)
// End Method 

export const get_products = createAsyncThunk(
    'product/get_products',
    async (_, { fulfillWithValue }) => {
        try {
            const { data } = await productApi.get('/products')
            // const { data } = await api.get('product/products')
            console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.respone)
        }
    }
)
// End Method 

export const product_details = createAsyncThunk(
    'product/product_details',
    async (slug, { fulfillWithValue }) => {
        try {
            const { data } = await productApi.get(`/product/details/${slug}`)
            // const { data } = await api.get(`product/product/details/${slug}`)
            console.log("product details" + data)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.respone)
        }
    }
)
// End Method 

export const query_products = createAsyncThunk(
    'product/query_products',
    async (query, { fulfillWithValue }) => {
        try {
            const { data } = await productApi.get(`/product?category=${query.category}&&searchValue=${query.searchValue ? query.searchValue : ''}`)
            // const { data } = await axios.get(`product/product?category=${query.category}&&searchValue=${query.searchValue ? query.searchValue : ''}`)
            console.log(data)
            return fulfillWithValue(data)
        } catch (error) {
            console.log(error.respone)
        }
    }
)

export const add_product = createAsyncThunk(
    'product/add_product',
    async (info, { fulfillWithValue }) => {
        try {

            console.log("axios "+info)
            const response = await productApi.post(
                '/product/add',
                info
              );

            console.log(response)
            return fulfillWithValue(response)
        } catch (error) {
            console.log(error.respone)
        }
    }
)

// End Method 

export const homeReducer = createSlice({
    name: 'home',
    initialState: {
        categorys: [],
        products: [],
        detail: {}
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(get_category.fulfilled, (state, { payload }) => {
                console.log("fullfill category payload " + payload);
                state.categorys = payload;
            })
            .addCase(get_products.fulfilled, (state, { payload }) => {
                console.log("fullfill products payload " + JSON.stringify(payload));
                state.products = payload;
            })
            .addCase(query_products.fulfilled, (state, { payload }) => {
                state.products = payload;
            })
            .addCase(product_details.fulfilled, (state, { payload }) => {
                state.detail = payload;
            })
    }
})

export default homeReducer.reducer