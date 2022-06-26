import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getOfferList } from '../../actions/offerList'

export const fetchOfferList = createAsyncThunk('offerList', async () => {
    return await getOfferList()
})

export const initialState = {
    list: [],
    loading: false,
    error: null
}

const offerListPrice = createSlice({
    name: "offerList",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchOfferList.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchOfferList.fulfilled, (state, action) => {
            state.loading = false
            state.list = action.payload
        })
        builder.addCase(fetchOfferList.rejected, state => {
            state.loading = false
            state.error = "Something went wrong. Offer list not found"
        })
    }
})

export default offerListPrice.reducer