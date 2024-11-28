
import { useContext } from "react";
// import ChatComp from "../../Components/ChatComponent/Chat"
import AppBarContainer from "../../Components/MainAppBar/AppBarContainer"
import { UserContext } from "../../Context/UserContext";
// import Landing from "../../Components/WelcomeCompLatest/Landing";


const ChatPage = () => {
    const smScreen = window.innerWidth <= 639;
    const { isHide, user } = useContext<any>(UserContext);
    console.log(user)

    return (
        <div className=" sm:flex sm:gap-4 sm:overflow-x-auto md:overflow-x-visible">
            {
                smScreen ? (
                    <>
                        {!isHide && <AppBarContainer type="chat" />}
                        {/* {
                            user ? (
                                isHide && <ChatComp />
                            ) : (
                                <Landing />
                            )
                        } */}
                    </>
                ) : (
                    <>
                        <AppBarContainer type="chat" />
                        {/* {
                            user ? (
                                <ChatComp />
                            ) : (
                                <Landing />
                            )
                        } */}
                    </>
                )
            }
        </div>
    )
}
export default ChatPage