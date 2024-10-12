import { createSlice } from "@reduxjs/toolkit";
import onRegister from "../../Actions/Middlewares/Signup";

const otpSentState = {
    isLoading: false
}

const otpSentSlice = createSlice({
    name: "otpSent",
    initialState: otpSentState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(onRegister.pending, (state) => {
                state.isLoading = true
            })
            .addCase(onRegister.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(onRegister.rejected, (state) => {
                state.isLoading = false
            })

    },
})

export default otpSentSlice.reducer