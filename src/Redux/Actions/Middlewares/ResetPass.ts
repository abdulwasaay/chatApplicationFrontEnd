import { createAsyncThunk } from "@reduxjs/toolkit";
import apiBaseUrl from "../../../env";
import { toast } from "react-toastify";
import ApiErrors from "../../../Utils/ApiErrorHandler";

const onResetPassword = createAsyncThunk(
    "RESET_API",
    async ({ formData, onResetSuccess, onResetFail , token }: any, { rejectWithValue }) => {
        try {
            const response = await fetch(`${apiBaseUrl}/api/auth/reset-password`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "authorization": `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            if (response.ok) {
                onResetSuccess(data)
            }
            else {
                const errMessage = ApiErrors(response,data)
                onResetFail(data,errMessage)
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

export default onResetPassword