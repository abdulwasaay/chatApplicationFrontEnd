import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import onLogin from "../../Actions/Middlewares/Login";

const loginState:any = {
    isLoading: false,
    isAuth : false,
    user:{}
}

const loginSlice = createSlice({
    name: "login",
    initialState: loginState,
    reducers: {
        onLoginReducer : (state , action:PayloadAction<any>) => {
            state.user = action.payload
            state.isAuth = true
        },
        setAuth : (state , action:PayloadAction<any>) => {
            state.isAuth = action.payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(onLogin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(onLogin.fulfilled, (state , action:PayloadAction<any>) => {
                state.isLoading = false
            })
            .addCase(onLogin.rejected, (state) => {
                state.isLoading = false
            })

    },
})

export const {onLoginReducer , setAuth} = loginSlice.actions

export default loginSlice.reducer