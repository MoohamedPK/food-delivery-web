import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const actPlaceorder = createAsyncThunk("cart/actPlaceorder", async({formData, subTotalAmount}, {rejectWithValue, getState}) => {
    const {auth, food, cart} = getState()

    const foodList = food.records
    const cartItems = cart.items;
    const token = auth.token
    let orderItems = [];

    try {

        foodList.map((item) => {
            if (cartItems[item._id] > 0) {
                const itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo)
            } else {
                return;
            }
        })
        let orderData = {
          address: formData,
          items: orderItems,
          amount: subTotalAmount + 2,
        };

        const response = await axios.post('http://localhost:5000/api/order/place', orderData, {headers: {token}})
        console.log(response.data)
        if (response.data.success) {
            const {session_url} = response.data
            return window.location.replace(session_url);
        } else {
            return response.data.message
        }

    } catch (error) {
        rejectWithValue(error.message)
    }
});

export default actPlaceorder;