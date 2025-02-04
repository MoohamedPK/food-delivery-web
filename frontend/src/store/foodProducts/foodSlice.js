import { createSlice } from "@reduxjs/toolkit";
import actGetFoodList from "./actions/actGetFoodList";

const initialState = {
    records: [],
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: "" | null,
}

const foodSlice = createSlice({
    name:'food',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actGetFoodList.pending, (state) => {
            state.loading = "pending",
            state.error = null;
        });
        builder.addCase(actGetFoodList.fulfilled, (state, action) => {
            state.records = action.payload;
            state.loading = "succeeded",
            state.error = null;
        }); 
        builder.addCase(actGetFoodList.rejected, (state, action) => {
            state.error = action.payload.message
            state.loading = "failed"
            
        });
    }
})

export default foodSlice.reducer;