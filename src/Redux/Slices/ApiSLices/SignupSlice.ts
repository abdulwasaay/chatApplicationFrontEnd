import { createSlice } from "@reduxjs/toolkit";
import onRegister from "../../Actions/Middlewares/Signup";

const signupState = {
    isLoading: false
}

const signupSlice = createSlice({
    name: "signup",
    initialState: signupState,
    reducers: {
        addUsers:(state,action)=>{

        }
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

export default signupSlice.reducer