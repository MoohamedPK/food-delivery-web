import { createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const actVerifyPayment = createAsyncThunk(
  "cart/actVerifyPayment",
  async ({orderId, success}, { rejectWithValue }) => {
    const navigate = useNavigate();

    try {
        const response = await axios.post(
          "https://food-delivery-web-backend-xjvc.onrender.com/api/order/verify",
          { orderId, success}
        );
        
        if (response.data.success) {
            navigate('/myorders');
        } else {
            navigate("/")
        }
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export default actVerifyPayment;
