import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const actDeleteCartItem = createAsyncThunk("cart/actDeleteCartItem", async(itemId, {rejectWithValue, getState}) => {
    const {auth} = getState();
    const token = auth.token
    
    try {

        const response = await axios.delete(
          "http://localhost:5000/api/cart/delete",{
          headers: { token },
            data: { itemId },
    });
         return toast.success(response.data.message);

    } catch (error) {
        rejectWithValue(error.message)
    }
});

export default actDeleteCartItem;