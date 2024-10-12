import { createAsyncThunk } from "@reduxjs/toolkit";
import apiBaseUrl from "../../../env";
import { toast } from "react-toastify";

const onOtpSent = createAsyncThunk(
    "OTP_SENT_API",
    async ({ email }: any, { rejectWithValue }) => {

        try {
            await fetch(`${apiBaseUrl}/api/auth/getotp?email=${email}`)

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

export default onOtpSent