import { createSlice } from "@reduxjs/toolkit";
import {actAddCartItems,actRemoveCartItems,actGetUserCartItems} from "./index";

const initialState = {
    items: {},
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: "" | null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {

        resetAfterLogout: (state) => {
            state.items = {}
        },

    },
    extraReducers: (builder) => {
      //ADD CART ITEMS
      builder.addCase(actAddCartItems.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      });

      builder.addCase(actAddCartItems.fulfilled, (state, action) => {
        state.items = action.payload
        state.loading = "succeeded";
        state.error = null;
      });
      builder.addCase(actAddCartItems.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = "failed";
      });

      //REMOVE CART ITEMS
      builder.addCase(actRemoveCartItems.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      });

      builder.addCase(actRemoveCartItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = "succeeded";
        state.error = null;
      });
      builder.addCase(actRemoveCartItems.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = "failed";
      });

      //GET CART ITEMS
      builder.addCase(actGetUserCartItems.pending, (state) => {
        state.loading = "pending";
        state.error = null;
      });

      builder.addCase(actGetUserCartItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = "succeeded";
        state.error = null;
      });
      builder.addCase(actGetUserCartItems.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = "failed";
      });

      
    }
})

export default cartSlice.reducer
export const { addToCart, decreaseQuantity, removeItemFromCart, resetAfterLogout } =
  cartSlice.actions;