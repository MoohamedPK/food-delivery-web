import { configureStore, combineReducers } from "@reduxjs/toolkit";
import foodReducer from "./foodProducts/foodSlice"
import cartReducer from "./cart/cartSlice"
import authReducer from "./auth/authSlice"
import ordersReducer from "./orders/ordersSlice";
import {persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST,PURGE, REGISTER} from "redux-persist"
import storage from 'redux-persist/lib/storage' // fore defaut (local storage)


const rootPersistConfig = {
  key: "root",
  storage,
  whiteList : [ "cart"]
}

// const authPersistConfig = {
//   key: "auth",
//   storage,
//   whiteList: ["token"],
// };

const cartPersistConfig = {
  key: "cart",
  storage,
  whiteList: ["items"],
};

const rootReducer = combineReducers({
  food: foodReducer,
  cart: persistReducer(cartPersistConfig, cartReducer),
  auth: authReducer,
  orders: ordersReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  // avoid the non serializable problem 
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  
}); 


const persistor = persistStore(store)

export {store, persistor};