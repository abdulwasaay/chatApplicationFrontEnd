import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"

const ChatComp = () => {
    const { user } = useContext<any>(UserContext);

    return (
        <div className=" border w-full bg-[#232775]">
            <div>

            </div>
        </div>
    )
}
export default ChatComp