import {createSlice} from "@reduxjs/toolkit";
import registerAction from "./actions/actAuthRegister";
import loginAction from "./actions/actAuthLogin";

const initialState = {
    token: '',
    loading: "idle" | "pending" | "succeeded" | "failed",
    error: "" | null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      logOut: (state) => {
        state.token = ''
      }
    },

    //REGISTER 

    extraReducers: (builder) => {
        builder.addCase(registerAction.pending, (state) => {
          state.loading = "pending";
        });
        builder.addCase(registerAction.fulfilled, (state) => {
          state.loading = "succeeded";
        });
        builder.addCase(registerAction.rejected, (state,) => {
          state.loading = "failed";
        });


        //LOGIN

        builder.addCase(loginAction.pending, (state) => {
          state.loading = "pending";
        });
        builder.addCase(loginAction.fulfilled, (state, action) => {
          state.loading = "succeeded";
          state.token = action.payload.token
        });
        builder.addCase(loginAction.rejected, (state) => {
          state.loading = "failed";
        });

    }
})


export const { logOut } = authSlice.actions;
export default authSlice.reducer