import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"


const actGetUserOrders = createAsyncThunk("orders/actGetUserOrders", async(_, {rejectWithValue, getState}) => {

    const {auth} = getState()
    const token = auth.token;

    try {
        if (token) {
            const response = await axios.post("https://food-delivery-web-backend-xjvc.onrender.com/api/order/userorders", {}, {headers: {token}})
            return response.data
        }
    } catch (error) {
        rejectWithValue(error.message)
    }
});

export default actGetUserOrders
