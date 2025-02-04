import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const registerAction = createAsyncThunk("auth/registerAction", async (formData, {rejectWithValue}) => {


    try {
        const response = await axios.post("https://food-delivery-web-backend-xjvc.onrender.com/api/user/register", formData)
        return response.data

    } catch (error) {
        rejectWithValue(error.message)
    }
});

export default registerAction
