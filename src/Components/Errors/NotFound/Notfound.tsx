import { textColours } from "../../../constants/colours"

const NotFound = () => {

    return(
        <div className=" w-full h-full flex flex-col items-center justify-center text-center pl-3 pr-3">
            <h1 className={`text-9xl font-bold text-[${textColours.text}] max-[530px]:text-7xl`}>404</h1>
            <div className=" flex items-center mt-3">
                <img src="/assets/alert.png" className="w-[55px] max-[530px]:w-[36px]"/>
            <h2 className=" text-4xl break-words max-[530px]:text-2xl max-[318px]:text-[20px]">This page is not Found</h2>
            </div>
            <p className="mt-3 break-words">The page you are trying to access is not found</p>
        </div>
    )
}
export default NotFound