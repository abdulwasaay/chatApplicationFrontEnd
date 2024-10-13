import { createAsyncThunk } from "@reduxjs/toolkit";
import apiBaseUrl from "../../../env";
import { toast } from "react-toastify";
import ApiErrors from "../../../Utils/ApiErrorHandler";

const onForgotPass = createAsyncThunk(
    "FORGOT_API",
    async ({ obj ,onFail , onForgotSuccess }: any, { rejectWithValue }) => {

        try {
            const response = await fetch(`${apiBaseUrl}/api/auth/forgot`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj),
            })
            const data = await response.json()
            if (!response.ok){
                const errMessage = ApiErrors(response,data)
                onFail(errMessage)
            }else{
                onForgotSuccess(data)
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

export default onForgotPass