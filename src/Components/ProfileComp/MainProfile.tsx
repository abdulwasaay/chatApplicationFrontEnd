import { Modal } from "@mui/material"
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import profileSchema from "./ProfileFormikValidations";
import ProfileComp from "./Profile";

const MainProfile = ({ open, closeHandler }: { open: boolean, closeHandler: () => void }) => {
    const { user } = useSelector((state: any) => state.authSlice);

    const profileFormik = useFormik({
        enableReinitialize: true,
        initialValues: {
            profileUrl: "",
            profile: "",
            name: user?.name,
        },
        onSubmit: (values) => {
            console.log(values)
            // const formData = {
            //     fullName: values?.name,
            //     email: values?.email,
            //     password: values?.password,
            //     confirmPassword: values?.confirmPassword
            // }

            // handleSignup(formData)

        },
        validationSchema: profileSchema
    })

    return (
        <>
            <Modal
                open={open}
                onClose={closeHandler}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div>
                    <ProfileComp formik={profileFormik} />
                </div>
            </Modal>
        </>
    )
}
export default MainProfile