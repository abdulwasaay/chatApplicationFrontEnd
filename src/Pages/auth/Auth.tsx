import { memo } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import NotFound from "../../Components/Errors/NotFound/Notfound"
import PublicRoutes from "../../Routes/PublicRoutes"
import routeLinks from "../../Routes/links"
import Register from "../../Components/auth/Register"
import ForgotPass from "../../Components/auth/ForgotPass"
import ResetPass from "../../Components/auth/ResetPassword"
import { useDispatch, useSelector } from "react-redux"
import onRegister from "../../Redux/Actions/Middlewares/Signup"
import { toast } from "react-toastify"
import onLogin from "../../Redux/Actions/Middlewares/Login"
import { onLoginReducer } from "../../Redux/Slices/ApiSLices/LoginSlice"
import onForgotPass from "../../Redux/Actions/Middlewares/Forgot"
import OtpVerify from "../../Components/auth/OtpVerify"
import onOtpSent from "../../Redux/Actions/Middlewares/SentOTP"
import onVerifyOtp from "../../Redux/Actions/Middlewares/VerifyOtp"
import onResetPassword from "../../Redux/Actions/Middlewares/ResetPass"

const Auth = () => {
    const dispatch: any = useDispatch();
    const navigate = useNavigate();
    const { isAuth } = useSelector((state: any) => state.loginSlice);

    const signupHandler = (formData: any) => dispatch(onRegister({ formData, onSignupSuccess, onFail }));
    const loginHandler = (formData: any) => dispatch(onLogin({ formData, onRedirection, onLoginSuccess, onFail }));
    const forgotHandler = (obj: any) => dispatch(onForgotPass({ obj, onForgotSuccess, onFail }));
    const sentOTP = (email: string) => dispatch(onOtpSent({ email }))
    const verifyOTP = (formData: any) => dispatch(onVerifyOtp({ formData, onverifyOtpSuccess, onFail }))
    const resetHandler = (formData: any, token: any) => dispatch(onResetPassword({ formData, onResetSuccess, onResetFail, token }))

    const onSignupSuccess = (res: any) => {
        navigate(routeLinks.otpPage, { state: res?.email })
    }

    const onFail = (res: any, message: string) => {
        toast.error(message)

    }

    const onLoginSuccess = (data: any) => {
        toast.success("Login SuccessFull");
        dispatch(onLoginReducer(data))
    }

    const onRedirection = (email: string) => {
        navigate(routeLinks.otpPage, { state: email })
    }

    const onForgotSuccess = (data: any) => {
        toast.success("Email Sent Successfully")
    }

    const onverifyOtpSuccess = (data: any) => {
        toast.success("OTP Verified");
        navigate(routeLinks.registerPage)
    }
    const onResetSuccess = (data: any) => {
        toast.success("Password Changed");
        navigate(routeLinks.registerPage);
    }

    const onResetFail = (res: any, message: string) => {
        navigate(routeLinks.registerPage);
        toast.error(message)
    }

    return (
        <Routes>
            <Route
                path={routeLinks.registerPage}
                element={
                    <PublicRoutes isAuth={isAuth}>
                        <Register
                            handleSignup={signupHandler}
                            handleLogin={loginHandler}
                        />
                    </PublicRoutes>
                }
            />
            <Route
                path={routeLinks.forgotPage}
                element={
                    <PublicRoutes isAuth={isAuth}>
                        <ForgotPass handleForgotPassword={forgotHandler} />
                    </PublicRoutes>
                }
            />
            <Route
                path={routeLinks.resetPage}
                element={
                    <PublicRoutes isAuth={isAuth}>
                        <ResetPass
                            handleResetPassword={resetHandler}
                        />
                    </PublicRoutes>
                }
            />

            <Route
                path={routeLinks.otpPage}
                element={
                    <PublicRoutes isAuth={isAuth}>
                        <OtpVerify
                            handleSentOtp={sentOTP}
                            handleVerifyOTP={verifyOTP}
                        />
                    </PublicRoutes>
                }
            />

            <Route path="*" Component={NotFound} />
        </Routes>
    )
}

export default memo(Auth)