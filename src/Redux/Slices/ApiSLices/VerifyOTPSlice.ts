import { createSlice } from "@reduxjs/toolkit";
import onVerifyOtp from "../../Actions/Middlewares/VerifyOtp";

const otpVerifyState = {
    isLoading: false
}

const otpVerifySlice = createSlice({
    name: "otpVerify",
    initialState: otpVerifyState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(onVerifyOtp.pending, (state) => {
                state.isLoading = true
            })
            .addCase(onVerifyOtp.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(onVerifyOtp.rejected, (state) => {
                state.isLoading = false
            })

    },
})

export default otpVerifySlice.reducer