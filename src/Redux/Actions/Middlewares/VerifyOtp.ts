import { createAsyncThunk } from "@reduxjs/toolkit";
import apiBaseUrl from "../../../env";
import { toast } from "react-toastify";
import ApiErrors from "../../../Utils/ApiErrorHandler";

const onVerifyOtp = createAsyncThunk(
    "VERIFY_OTP_API",
    async ({ formData, onverifyOtpSuccess, onFail }: any, { rejectWithValue }) => {
        try {
            const response = await fetch(`${apiBaseUrl}/api/auth/verifyotp`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            if (response.ok || response?.status === 301) {
                onverifyOtpSuccess(data)
            } else {
                const errMessage = ApiErrors(response,data)
                onFail(data,errMessage)
            }
        } catch (err: any) {
            if (err.message === 'Failed to fetch') {
                toast.error("Network Error")
            }
            else {
                toast.error("Something went wrong")
            }
            return rejectWithValue(err)
        }


    }
)

export default onVerifyOtp