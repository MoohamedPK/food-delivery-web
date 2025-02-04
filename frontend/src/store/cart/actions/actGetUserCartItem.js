import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetUserCartItems = createAsyncThunk(
  "cart/actGetUserCartItems",
  async (_, { rejectWithValue, getState }) => {

    const { auth } = getState();
    const token = auth.token;

    try {
      const response = await axios.post(
        "https://food-delivery-web-backend-xjvc.onrender.com/api/cart/get",
        {},
        { headers: { token } }
      );

      return response.data.items
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export default actGetUserCartItems;
