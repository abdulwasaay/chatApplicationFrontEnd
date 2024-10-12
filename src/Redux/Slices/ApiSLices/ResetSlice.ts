import { createSlice } from "@reduxjs/toolkit";
import onResetPassword from "../../Actions/Middlewares/ResetPass";

const resetState = {
    isLoading: false
}

const resetSlice = createSlice({
    name: "reset-password",
    initialState: resetState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(onResetPassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(onResetPassword.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(onResetPassword.rejected, (state) => {
                state.isLoading = false
            })

    },
})

export default resetSlice.reducer