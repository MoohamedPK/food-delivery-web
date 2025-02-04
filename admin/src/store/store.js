import {configureStore} from "@reduxjs/toolkit"
import userOrdersSlice from "./userOrders/ordersSlice";

const store = configureStore({
    reducer: {
        orders: userOrdersSlice,
    }
})

export default store