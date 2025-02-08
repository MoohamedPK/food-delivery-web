import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

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
      
      if (response.data.success) {
        toast.success(response.data.message)
        return response.data.items
      } else {
        return toast.error(response.data.message)
      }

    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export default actAddCartItems;
