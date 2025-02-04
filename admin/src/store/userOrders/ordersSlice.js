import {createSlice} from "@reduxjs/toolkit"
import {actGetUserOrders} from "./index"

const userOrdersSlice = createSlice({
    name: "userOrders",
    initialState: {
        orders: [],
        loading: "idle" | "pending" | "succeeded" | "failed",
        error: "" | null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(actGetUserOrders.pending, (state) => {
            state.error = null
            state.loading = "pending"
        });
        builder.addCase(actGetUserOrders.fulfilled, (state, action) => {
          state.error = null;
          state.loading = "succeeded";
          state.orders = action.payload.data
        });
        builder.addCase(actGetUserOrders.rejected, (state, action) => {
          state.error = action.payload.message;
          state.loading = "failed";
        });
    }
})

export default userOrdersSlice.reducer