import { createAsyncThunk, createSlice, isPending } from "@reduxjs/toolkit";
import { categoryApi, productApi } from "../../api/api";
import axios from "axios";

export const add_product = createAsyncThunk(
    'product/add_product',
    async (info, { rejectWithValue, fulfillWithValue }) => {
        try {
            console.log("axios " + info)
            const response = await productApi.post(
                '/product/add',
                info
            );

            console.log(response)
            return fulfillWithValue(response)
        } catch (error) {
            console.log(error.respone)
            return rejectWithValue(error.response.data)
        }
    }
)

// End Method 

export const productReducer = createSlice({
    name: 'product',
    initialState: {
       
        successMessage: '',
        errorMessage: '',
        isCompleted: false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(add_product.pending, (state, { payload }) => {
                state.isCompleted = false;
            })
            .addCase(add_product.rejected, (state, { payload }) => {
                state.isCompleted = true;
                state.errorMessage = "Server Error"
            })
            .addCase(add_product.fulfilled, (state, { payload }) => {
                state.isCompleted = true;
                state.successMessage = "Successfully Added"
            })
    }
})

export default productReducer.reducer