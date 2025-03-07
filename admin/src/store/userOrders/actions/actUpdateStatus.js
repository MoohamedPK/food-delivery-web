import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actUpdateStatus = createAsyncThunk(
  "orders/actUpdateStatus",
  async ({ orderId, status }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://food-delivery-web-backend-xjvc.onrender.com/api/order/status",
        { orderId, status }
      );
      return response.data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export default actUpdateStatus;
