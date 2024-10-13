import { createAsyncThunk } from "@reduxjs/toolkit";
import apiBaseUrl from "../../../env";
import { toast } from "react-toastify";
import ApiErrors from "../../../Utils/ApiErrorHandler";
import loginErrConst from "../../../constants/lloginErrorConst";

const onLogin = createAsyncThunk(
    "LOGIN_API",
    async ({ formData ,onRedirection , onLoginSuccess , onFail }: any, { rejectWithValue }) => {

        try {
            const response = await fetch(`${apiBaseUrl}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
                credentials:"include"
            })
            const data = await response.json()
            if (!response.ok){
                if (data?.message === loginErrConst){
                    return onRedirection(data?.email)
                }
                const errMessage = ApiErrors(response,data)
                onFail(errMessage)
            }else{
                onLoginSuccess(data)
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

export default onLogin