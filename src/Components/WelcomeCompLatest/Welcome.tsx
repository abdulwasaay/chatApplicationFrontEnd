import { useNavigate } from "react-router-dom"
import { appColour } from "../../constants/colours"
import CustomButton from "../customButton/CutomButtomLatest"

const Welcome = () => {
    const navigate = useNavigate()

    const onStartHandler = () => {
        navigate("/chats")
    }

    return (
        <div className="w-full h-[100vh] flex flex-col items-center justify-center">
            <div className=" flex items-center pl-5 pr-5 ">
                <img src="/assets/clap.png" alt="Clap Hands" className=" w-20 max-[500px]:w-12 max-[363px]:w-9"/>
                <h1 className=" text-[40px] font-light text-white ml-3 max-[500px]:text-[30px] max-[363px]:text-[22px]">Welcome to </h1>
                <h1 className={`text-[40px] font-light ml-3 text-[${appColour.lightBLue}] max-[500px]:text-[30px] max-[363px]:text-[22px]`}>Chatly</h1>
            </div>
            <p className={`text-white tracking-wider mt-5 pl-5 pr-5 text-center`}>Connect, communicate, and collaborate seamlessly – Welcome to [App Name], your ultimate chat hub!</p>
            <CustomButton text="Let's Chat" styles={{marginTop:"20px"}} onButtonClick = {onStartHandler}/>
        </div>
    )
}

export default Welcome