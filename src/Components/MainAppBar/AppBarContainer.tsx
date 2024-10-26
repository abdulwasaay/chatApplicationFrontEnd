import ChatBar from "./ChatBar"
import FriendsBar from "./FriendsBar"
import GroupsBar from "./GroupsBar"

const AppBarContainer = ({ type }: { type: any }) => {

    return (
        <div className=" border w-96 max-[500px]:w-full h-full pl-14">
            {
                type === "chat" ? (
                    <ChatBar
                    />
                ) : type === "groups" ? (
                    <GroupsBar
                    />
                ) : type === "friends" ? (
                    <FriendsBar
                    />
                ) : (
                    null
                )
            }
        </div>
    )
}

export default AppBarContainer