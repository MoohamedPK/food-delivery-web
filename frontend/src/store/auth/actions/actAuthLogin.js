import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const loginAction = createAsyncThunk(
  "auth/loginAction",
  async (formData, { rejectWithValue }) => {
    try {

      const response = await axios.post(
        "http://localhost:5000/api/user/login",formData);
      
        return response.data

    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export default loginAction;
