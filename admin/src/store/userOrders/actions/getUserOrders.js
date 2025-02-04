import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios";

const actGetUserOrders = createAsyncThunk("orders/actGetUserOrders", async(_, {rejectWithValue}) => {

    try {
        
        const response = await axios.get("http://localhost:5000/api/order/list");
        return response.data;

    } catch (error) {
        rejectWithValue(error);
    }
});

export default actGetUserOrders;