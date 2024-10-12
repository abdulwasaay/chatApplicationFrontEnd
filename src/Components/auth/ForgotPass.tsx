import { useFormik } from "formik"
import textInputStyles from "../../Styles/InputStyles"
import CustomButton from "../customButton/CutomButtomLatest"
import TextInputField from "../inputFields/InputField"
import * as Yup from 'yup';
import React from "react";
import { useSelector } from "react-redux";


interface forgotPassProps{
    handleForgotPassword: (obj:any) => void
}

const ForgotPass:React.FC<forgotPassProps> = ({handleForgotPassword}) => {

    const {isLoading} = useSelector((state:any) => state.forgotSlice)

    const forgotPassFormik: any = useFormik({
        enableReinitialize: true,
        initialValues: { email: "" },
        onSubmit: (values) => {
            const obj = {
                email : values?.email
            }

            handleForgotPassword(obj)

        },
        validationSchema: Yup.object().shape({
            email: Yup.string().required('Email is required').test('', function (value, context) {
                const strongEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (value) {
                    if (!strongEmailRegex.test(value)) {
                        return this.createError({ message: "Please enter a correct email" })
                    }
                    return true
                }
            }),
        })
    })

    const submitHandler = (e:any) => {
        e.preventDefault();
        forgotPassFormik.submitForm();
    }

    return (
        <div className="w-full h-full flex justify-center items-center overflow-hidden" >
            <div className={`bg-[#261585] rounded-md w-[440px]  p-[20px] max-[488px]:w-[90%]`}>
                <h1 className=" text-3xl">Forgot your Password?</h1>
                <h3 className=" mt-2 text-xl">Send reset password link</h3>
                <form onSubmit={submitHandler}>
                    <div className="mt-6">
                        <p className=" ml-[1px]">EMAIL</p>
                        <TextInputField
                            styles={textInputStyles}
                            types="email"
                            formik={forgotPassFormik}
                            name="email"
                        />
                    </div>
                    <div className="mt-6">
                        <CustomButton text="Send reset link" types='submit' loadings={isLoading} styles={{ width: "100%", background: "#3c50e8", borderRadius: "20px" }} onButtonClick={() => console.log("hello")} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPass