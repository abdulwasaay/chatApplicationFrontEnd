import { useRef } from "react"
import CustomButton from "../customButton/CutomButtomLatest"
import TextInputField from "../inputFields/InputField"
import textInputStyles from "../../Styles/InputStyles"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HidePassHandler from "../../Utils/passwordHide";


interface signupProps {
    submitHandler: (e?:any) => void,
    formik: any,
    loading:boolean
}

const Signup: React.FC<signupProps> = ({ formik , loading , submitHandler }) => {
    

    const showPasRef = useRef<any>(null);
    const showConfPasRef = useRef<any>(null);

    const showPasswordHandler = (e: any) => {
        e.preventDefault()
        const types = HidePassHandler(showPasRef.current.type);
        showPasRef.current.type = types
    }

    const showConfPasswordHandler = (e: any) => {
        e.preventDefault()
        const types = HidePassHandler(showConfPasRef.current.type);
        showConfPasRef.current.type = types
    }

    return (
        <form className="mt-10" autoComplete="off" onSubmit={submitHandler}>
            <div className="mt-4">
                <p className=" ml-[1px]">FULL NAME</p>
                <TextInputField
                    styles={textInputStyles}
                    types="text"
                    formik={formik}
                    name="name"
                />
            </div>
            <div className="mt-5">
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
                    <button className=" absolute top-3 right-3" type='button' onClick={showPasswordHandler}><RemoveRedEyeIcon /></button>
                </div>
            </div>
            <div className="mt-5">
                <p className=" ml-[1px]">CONFIRM PASSWORD</p>
                <div className="relative">
                    <TextInputField
                        types="password"
                        styles={textInputStyles}
                        ref={showConfPasRef}
                        formik={formik}
                        name="confirmPassword"
                    />
                    <button className=" absolute top-3 right-3" type='button' onClick={showConfPasswordHandler}><RemoveRedEyeIcon /></button>
                </div>
            </div>
            <div className="mt-10">
                <CustomButton text="sign up" types='submit' loadings={loading} styles={{ width: "100%", background: "#3c50e8", borderRadius: "20px" }} onButtonClick={submitHandler} />
            </div>
        </form>
    )
}

export default Signup