import {createAsyncThunk} from "@reduxjs/toolkit"
import axios from "axios"

const registerAction = createAsyncThunk("auth/registerAction", async (formData, {rejectWithValue}) => {


    try {
        const response = await axios.post("http://localhost:5000/api/user/register", formData)
        return response.data

    } catch (error) {
        rejectWithValue(error.message)
    }
});

export default registerAction