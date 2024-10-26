import { useState } from "react"
import { useSelector } from "react-redux";
import profileColors from "../../constants/ProfileColorScheme";
import InputField from "../inputFields/InputField";
import EditIcon from '@mui/icons-material/Edit';
import { textColours } from "../../constants/colours";
import CustomButton from "../customButton/CutomButtomLatest";
import { InputFileUpload } from "../inputFields/UploadFile";
import { ProfileStyle } from "./ProfileStyles";

const ProfileComp = ({ formik }: any) => {
    const [isDisabled, setIsDisabled] = useState(true);
    const { user } = useSelector((state: any) => state.authSlice);

    const userFirstLetter: string = user?.name && user?.name?.charAt(0);

    const fileUpload = (files: any) => {
        const file = files[0]
        if (file && (file.type === "image/png" || file.type === "image/jpeg" || file.type === "image/jpg")) {
            formik.setFieldValue("profileUrl", URL.createObjectURL(file));
            formik.setFieldValue("profile", file);
        };
    }


    return (
        <>
            <div className=" w-[400px] p-3 rounded-md bg-[#3f4396] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] max-[472px]:w-[90%]">
                <div className=" flex justify-center">
                    <h1 className=" text-4xl text-white">Your</h1>
                    <h1 className=" text-4xl text-[white] ml-2">Profile</h1>
                </div>
                <div className="mt-4">
                    {
                        !formik.values.profileUrl ? (
                            <div className=" w-full flex justify-center">
                                <div className="relative">
                                    <div className={`text-[160px] w-56 rounded-full h-56 text-center flex flex-col justify-center pb-5 text-white`} style={{ background: profileColors[userFirstLetter.toUpperCase() && userFirstLetter.toUpperCase()] }}>
                                        {userFirstLetter}
                                    </div>
                                    <InputFileUpload
                                        name="profileUrl"
                                        handleUpload={fileUpload}
                                        formik={formik}
                                        styles={ProfileStyle}
                                    />
                                </div>

                            </div>
                        ) : (
                            <div className=" w-full flex justify-center">
                                <div className="relative">
                                    <div className="w-56 h-56 rounded-full overflow-hidden">
                                    <img src={formik.values.profileUrl} alt="Profile Image"className="w-full h-full object-cover bg-white"  />
                                    </div>
                                    <InputFileUpload
                                        name="profileUrl"
                                        handleUpload={fileUpload}
                                        formik={formik}
                                        styles={ProfileStyle}
                                    />
                                </div>

                            </div>
                        )
                    }
                </div>
                <div className="mt-3 mb-5">
                    <div className=" flex justify-between">
                        <p className="text-white pb-1">Name</p>
                        <p className="text-white pb-1 cursor-pointer" onClick={() => setIsDisabled(false)}><EditIcon /></p>
                    </div>
                    <InputField
                        name="name"
                        types="text"
                        required={false}
                        disabled={isDisabled}
                        formik={formik}
                        styles={{ background: !isDisabled && textColours.lightBlue, color: "white", borderRadius: "5px" }}
                    />
                </div>
                <hr />
                <div className="w-full mt-5">
                    <CustomButton text="Save Profile" styles={{ width: "100%" }} onButtonClick={() => console.log("s")} />
                </div>
            </div>

        </>

    )
}
export default ProfileComp