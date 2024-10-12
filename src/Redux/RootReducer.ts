import { combineReducers } from "@reduxjs/toolkit";
import signupSlice from "./Slices/ApiSLices/SignupSlice";
import loginSlice from "./Slices/ApiSLices/LoginSlice";
import forgotSlice from "./Slices/ApiSLices/ForgotSlice";
import OTPSlice from "./Slices/ApiSLices/OTPSlice";
import VerifyOTPSlice from "./Slices/ApiSLices/VerifyOTPSlice";
import ResetSlice from "./Slices/ApiSLices/ResetSlice";

const rootReducer = combineReducers({
    signupSlice,
    loginSlice,
    forgotSlice,
    OTPSlice,
    VerifyOTPSlice,
    ResetSlice,
})

export default rootReducer    