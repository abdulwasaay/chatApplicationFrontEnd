import React, { useRef } from "react";
import textInputStyles from "../../Styles/InputStyles"
import CustomButton from "../customButton/CutomButtomLatest"
import TextInputField from "../inputFields/InputField"
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import HidePassHandler from "../../Utils/passwordHide";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

interface resetProps {
    handleResetPassword : (formData:any ,token:any) => void
}

const ResetPass:React.FC<resetProps> = ({handleResetPassword}) => {

    const showPasRef = useRef<any>(null);
    const showConfPasRef = useRef<any>(null);
    const {isLoading} = useSelector((state:any) => state.ResetSlice);
    const {userId ,token} = useParams();

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

    const initValues: any = {
        password: "",
        confirmPassword: ""
    }

    const resetPassSchema: any = Yup.object().shape({
        password: Yup.string().required("Password is required").test('', function (value, context) {
          const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&,])[A-Za-z\d@$!%*?&,]{8,}$/;
          if (value) {
            if (!strongPasswordRegex.test(value)) {
              return this.createError({ message: "Password must be strong" })
            }
            return true
          }
        }),
        confirmPassword: Yup.string().required("password is required").test('', function (value: any, context: any) {
          const password: any = this.from
          if (value) {
            if (password[0].value.password !== value) {
              return this.createError({ message: "Password mismatch" })
            }
            return true
          }
        }),
      });

    const resetPassFormik: any = useFormik({
        enableReinitialize: true,
        initialValues: initValues,
        onSubmit: (values) => {
            const formData = {
                id: userId,
                password: values?.password,
                confirmPassword: values?.confirmPassword
            }

            handleResetPassword(formData , token)

        },
        validationSchema: resetPassSchema
    })

    const submitHandler = (e:any)=>{
        e.preventDefault();
        resetPassFormik.submitForm();
        // resetPassFormik.resetForm();
    }

    return (
        <div className="w-full h-full flex justify-center items-center overflow-hidden" >
            <div className={`bg-[#261585] rounded-md w-[440px]  p-[20px] max-[488px]:w-[90%]`}>
                <h1 className=" text-3xl">Reset your Password?</h1>
                <form onSubmit={submitHandler}>
                    <div className="mt-6">
                        <p className=" ml-[1px]">PASSWORD</p>
                        <div className="relative">
                            <TextInputField
                                types="password"
                                styles={textInputStyles}
                                ref={showPasRef}
                                name="password"
                                formik={resetPassFormik}
                            />
                            <button  type="button" className=" absolute top-3 right-3" onClick={showPasswordHandler}><RemoveRedEyeIcon /></button>
                        </div>
                    </div>
                    <div className="mt-5">
                        <p className=" ml-[1px]">CONFIRM PASSWORD</p>
                        <div className="relative">
                            <TextInputField
                                types="password"
                                styles={textInputStyles}
                                ref={showConfPasRef}
                                name="confirmPassword"
                                formik={resetPassFormik}
                            />
                            <button  type="button" className=" absolute top-3 right-3" onClick={showConfPasswordHandler}><RemoveRedEyeIcon /></button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <CustomButton text="Reset" types="submit" loadings={isLoading}  styles={{ width: "100%", background: "#3c50e8", borderRadius: "20px" }} onButtonClick={() => console.log("hello")} />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ResetPass