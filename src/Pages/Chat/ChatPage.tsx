
import { useContext } from "react";
import ChatComp from "../../Components/ChatComponent/Chat"
import AppBarContainer from "../../Components/MainAppBar/AppBarContainer"
import { UserContext } from "../../Context/UserContext";
import Landing from "../../Components/WelcomeCompLatest/Landing";


const ChatPage = () => {
    const smScreen = window.innerWidth <= 639;
    const { isHide, user, setIsHide } = useContext<any>(UserContext);

    return (
        <div className=" sm:flex sm:gap-4 sm:overflow-x-auto md:overflow-x-visible h-[100%] overflow-hidden" style={{ marginLeft: "56px" }}>
            {
                smScreen ? (
                    <>
                        {!isHide && <AppBarContainer type="chat" />}
                        {
                            user ? (
                                isHide && <ChatComp setHide={setIsHide} />
                            ) : (
                                <Landing />
                            )
                        }
                    </>
                ) : (
                    <>
                        <AppBarContainer type="chat" />
                        {
                            user ? (
                                <ChatComp setHide={setIsHide} />
                            ) : (
                                <Landing />
                            )
                        }
                    </>
                )
            }
        </div>
    )
}
export default ChatPage