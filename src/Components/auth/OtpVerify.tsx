import CustomButton from "../customButton/CutomButtomLatest"
import OTPInputField from "../inputFields/OtpInput"
import textInputStyles from "../../Styles/InputStyles"
import React, { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import NotFound from "../Errors/NotFound/Notfound"
import { useSelector } from "react-redux"

interface otpProps {
    handleSentOtp: (email: string) => void;
    handleVerifyOTP: (formData:any) => void;
}

const OtpVerify: React.FC<otpProps> = ({ handleSentOtp , handleVerifyOTP }) => {

    const location = useLocation();
    const email = location?.state;
    const timerCount = 59;
    const [timer, setTimer] = useState<number>(timerCount);
    const [otp, setOtp] = useState(Array(length).fill(""));
    const [showResend, setShowResend] = useState<boolean>(false);
    const {isLoading} = useSelector((state:any) => state.VerifyOTPSlice);

    useEffect(() => {
        const timeInterval = timerFunc();

        return () => clearInterval(timeInterval)
    }, [timer])

    useEffect(() => {
        handleSentOtp(email);
    }, [])

    const showZero = () => {
        if (timer < 10) {
            return true
        }
    }


    const timerFunc = () => {
        if (timer > 0) {
            return setInterval(() => {
                setTimer(timer - 1)
            }, 1000)
        } else {
            setShowResend(true)
        }
        return;
    }

    const resendHandler = (e: any) => {
        e.preventDefault();
        handleSentOtp(email)
        setTimer(timerCount);
        setShowResend(false)
    }

    const getValues = (event:any , idx:number) => {
        const input = event.target;
        const updatedOtp = [...otp];
        updatedOtp[idx] = input.value;
        setOtp(updatedOtp);
    }

    const verifyHandler = (e:any) => {
        e.preventDefault()
        let otP = "";
        otp.forEach((otps:string) => otP +=otps);
        const formData = { email, otP }
        handleVerifyOTP(formData)
    }

    if (!email) {
        return <NotFound />
    }

    return (
        <div className="w-full h-full flex justify-center items-center overflow-hidden" >
            <div className={`bg-[#261585] rounded-md w-[440px]  p-[20px] max-[488px]:w-[90%]`}>
                <h1 className=" text-3xl">Email Confirmation</h1>
                <div className="flex items-center flex-wrap mt-3">
                    <p className=" ml-[1px] mr-2">Enter OTP sent to </p>
                    <p className={`text-[#8795ff] font-semibold`}>{email}</p>
                </div>

                <form className="mt-10" autoComplete="off" onSubmit={verifyHandler}>
                    <div className="mt-4">
                        <p className=" ml-[1px]">OTP</p>
                        <OTPInputField
                            styles={textInputStyles}
                            length={6}
                            changeHandler = {getValues}
                            value = {otp}
                        />
                    </div>
                    <div className="mt-5">
                        {
                            showResend ? (
                                <div className="flex flex-wrap">
                                    <p className="mr-2">Did'nt recieve the OTP? </p>
                                    <button className={`text-[#8795ff] font-semibold`} onClick={resendHandler}>Resend</button>
                                </div>
                            ) : (
                                <div className="flex flex-wrap">
                                    <p className="mr-2">You can resend the code in</p>
                                    <p className={`text-[#8795ff] font-semibold`}>00:{showZero() ? `0${timer}` : timer}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className="mt-3">
                        <CustomButton text="Verify" types='submit' loadings={isLoading} styles={{ width: "100%", background: "#3c50e8", borderRadius: "20px" }} onButtonClick={() => console.log("S")} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OtpVerify