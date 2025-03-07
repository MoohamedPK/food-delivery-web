import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetFoodList = createAsyncThunk("food/actGetFoodList", async(_ ,{rejectWithValue,signal}) => {

    try {
        
        const response = await axios.get("https://food-delivery-web-backend-xjvc.onrender.com/api/food/list", signal);
        return response.data.data

    } catch (error) {
        rejectWithValue(error)
    }
});

export default actGetFoodList
