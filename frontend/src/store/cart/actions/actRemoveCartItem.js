import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actRemoveCartItems = createAsyncThunk(
  "cart/actRemoveCartItems",
  async (itemId, { rejectWithValue, getState }) => {
    const { auth } = getState();
    const token = auth.token;

    try {
      const response = await axios.post(
        "http://localhost:5000/api/cart/remove",
        { itemId },
        { headers: { token } }
      );

      return response.data.items;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export default actRemoveCartItems;
