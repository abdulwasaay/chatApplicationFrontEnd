import { createSlice } from "@reduxjs/toolkit";
import onForgotPass from "../../Actions/Middlewares/Forgot";

const forgotState:any = {
    isLoading: false,
}

const forgotSlice = createSlice({
    name: "forgot",
    initialState: forgotState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(onForgotPass.pending, (state) => {
                state.isLoading = true
            })
            .addCase(onForgotPass.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(onForgotPass.rejected, (state) => {
                state.isLoading = false
            })

    },
})

export default forgotSlice.reducer