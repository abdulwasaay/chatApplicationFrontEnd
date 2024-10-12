import React, { useState } from "react"
import CustomButton from "../customButton/CutomButtomLatest"
import { customStyles } from "./CustomStyle"
import Signup from "./Signup";
import Login from "./Login";
import { useFormik } from "formik";
import SignupSchema from "./formikValidations/SignupSchema";
import LoginSchema from "./formikValidations/loginSchema";
import { useSelector } from "react-redux";


interface RegisterProps{
    handleSignup: (data:any)=> void
    handleLogin: (data:any)=> void
}

const Register:React.FC<RegisterProps> = ({handleSignup , handleLogin}) => {
    const [isSignIn, setIsSignIn] = useState(true)
    const {isLoading} = useSelector((state:any) => state.signupSlice);
    const loading = useSelector((state:any) => state.loginSlice.isLoading);

    const authInitValues: any = {
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    }

    const signupFormik: any = useFormik({
        enableReinitialize: true,
        initialValues: authInitValues,
        onSubmit: (values) => {
            const formData = {
                fullName: values?.name,
                email: values?.email,
                password: values?.password,
                confirmPassword: values?.confirmPassword
            }

            handleSignup(formData)

        },
        validationSchema: SignupSchema
    })

    const loginFormik: any = useFormik({
        enableReinitialize: true,
        initialValues: { email: "", password: "" },
        onSubmit: (values) => {
            const formData = {
                email: values?.email,
                password: values?.password,
            }
            handleLogin(formData)
        },
        validationSchema: LoginSchema
    })

    const onSignupHandler = (e: any) => {
        e.preventDefault();
        signupFormik.submitForm()
    }

    const onLoginHandler = (e: any) => {
        e.preventDefault();
        loginFormik.submitForm()
    }


    return (
        <div className="w-full h-full flex justify-center items-center overflow-hidden" >
            <div className={`bg-[#261585] rounded-md w-[440px]  p-[20px] max-[488px]:w-[90%]`}>
                <div className=" flex">
                    <div className=" mr-5">
                        <CustomButton text={"sign in"} styles={customStyles} onButtonClick={() => setIsSignIn(true)} />
                        {isSignIn && <div className={`bg-[#3250a8] w-full h-[3px] rounded-full`}></div>}
                    </div>
                    <div>
                        <CustomButton text={"sign up"} styles={customStyles} onButtonClick={() => setIsSignIn(false)} />
                        {!isSignIn && <div className={`bg-[#3250a8] w-full h-[3px] rounded-full`}></div>}
                    </div>
                </div>
                <div>
                    {
                        isSignIn &&
                        <Login
                            formik={loginFormik}
                            submitHandler={onLoginHandler}
                            loading={loading}
                        />
                    }
                    {!isSignIn &&
                        <Signup
                            formik={signupFormik}
                            submitHandler={onSignupHandler}
                            loading = {isLoading}
                        />
                    }

                </div>
            </div>
        </div>

    )
}

export default Register