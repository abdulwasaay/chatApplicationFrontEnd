import React, { useRef } from "react"
import CustomButton from "../customButton/CutomButtomLatest"
import TextInputField from "../inputFields/InputField"
import textInputStyles from "../../Styles/InputStyles"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CheckBoxField from "../inputFields/Checkbox"
import HidePassHandler from "../../Utils/passwordHide";
import { Link } from "react-router-dom";

interface loginProps {
    formik: any,
    submitHandler: (e?:any) => void,
    loading:boolean
}

const Login: React.FC<loginProps> = ({formik , loading , submitHandler }) => {

    const showPasRef = useRef<any>(null);

    const showPasswordHandler = (e: any) => {
        e.preventDefault()
        const types = HidePassHandler(showPasRef.current.type);
        showPasRef.current.type = types
    }

    return (
        <form className="mt-10" autoComplete="off" onSubmit={submitHandler}>
            <div className="mt-4">
                <p className=" ml-[1px]">EMAIL</p>
                <TextInputField
                    styles={textInputStyles}
                    types="email"
                    formik={formik}
                    name="email"
                />
            </div>

            <div className="mt-5">
                <p className=" ml-[1px]">PASSWORD</p>
                <div className="relative">
                    <TextInputField
                        types="password"
                        styles={textInputStyles}
                        ref={showPasRef}
                        formik={formik}
                        name="password"

                    />
                    <button className=" absolute top-3 right-3" type="button" onClick={showPasswordHandler}><RemoveRedEyeIcon /></button>
                </div>
            </div>
            <div className="mt-5">
                <label className=" flex leading-[15px]">
                    <CheckBoxField
                        types="checkbox"
                    />
                    <p className=" ml-[15px]">Keep me Logged In.</p>
                </label>
            </div>
            <div className="mt-5">
                <CustomButton text="sign in" types='submit' loadings={loading} styles={{ width: "100%", background: "#3c50e8", borderRadius: "20px" }} onButtonClick={submitHandler} />
            </div>
            <div className="mt-14 ">
                <hr />
            </div>
            <div className=" text-center mt-5">
                <p><Link to="/auth/forgot">Forgot Your password?</Link></p>
            </div>
        </form>
    )
}

export default Login