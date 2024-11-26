import ChatBar from "./ChatBar"
import FriendsBar from "./FriendsBar"
import GroupsBar from "./GroupsBar"

const AppBarContainer = ({ type }: { type: any }) => {

    return (
        <div className="" >
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