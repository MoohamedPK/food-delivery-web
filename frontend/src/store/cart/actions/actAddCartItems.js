import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actAddCartItems = createAsyncThunk(
  "cart/actAddCartItems",
  async (itemId, { rejectWithValue, getState }) => {
      const { auth } = getState();
      const token = auth.token

    try {
      const response = await axios.post(
        "http://localhost:5000/api/cart/add",
        { itemId },
        { headers: { token } }
      );
      return response.data.items;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export default actAddCartItems;