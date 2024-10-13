import { combineReducers } from "@reduxjs/toolkit";
import signupSlice from "./Slices/ApiSLices/SignupSlice";
import loginSlice from "./Slices/ApiSLices/LoginSlice";
import forgotSlice from "./Slices/ApiSLices/ForgotSlice";
import OTPSlice from "./Slices/ApiSLices/OTPSlice";
import VerifyOTPSlice from "./Slices/ApiSLices/VerifyOTPSlice";
import ResetSlice from "./Slices/ApiSLices/ResetSlice";
import authSlice from "./Slices/ApiSLices/AuthSlice";

const rootReducer = combineReducers({
    signupSlice,
    loginSlice,
    forgotSlice,
    OTPSlice,
    VerifyOTPSlice,
    ResetSlice,
    authSlice,
})

export default rootReducer    