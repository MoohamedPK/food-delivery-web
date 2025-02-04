import {createSlice} from "@reduxjs/toolkit"
import actGetUserOrders from "./actions/actGetUserOrders"

const ordersSlice = createSlice({
    name: "orders",
    initialState: {
        userOrders:[],
        error: "" | null,
        loading: "idle" | "pending" | "succeeded" | "failed"
    },
    reducers: {
        resetOrdersAfterLogout: (state) => {
            state.userOrders = [];
        }
    },
    extraReducers: (builder) => {
        builder.addCase(actGetUserOrders.pending, (state) => {
            state.error = null
            state.loading = "pending"
        });

        builder.addCase(actGetUserOrders.fulfilled, (state, action) => {
            state.error = null
            state.loading = "succeeded"
            state.userOrders = action.payload.data
        });
        builder.addCase(actGetUserOrders.rejected, (state, action) => {
            state.error = action.payload.message
            state.loading = "failed"
        });
    }
})

export default ordersSlice.reducer
export const { resetOrdersAfterLogout } = ordersSlice.actions;