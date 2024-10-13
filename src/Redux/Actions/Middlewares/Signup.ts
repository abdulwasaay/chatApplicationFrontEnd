import { createAsyncThunk } from "@reduxjs/toolkit";
import apiBaseUrl from "../../../env";
import { toast } from "react-toastify";
import ApiErrors from "../../../Utils/ApiErrorHandler";

const onRegister = createAsyncThunk(
    "SIGNUP_API",
    async ({ formData, onSignupSuccess, onFail }: any, { rejectWithValue }) => {
        try {
            const response = await fetch(`${apiBaseUrl}/api/auth/signup`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            if (response.ok) {
                onSignupSuccess(data)
            } else if(response?.status === 301){
                onSignupSuccess(data)
            } else {
                const errMessage = ApiErrors(response,data)
                onFail(errMessage)
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

export default onRegister