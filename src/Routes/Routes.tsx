import ChatPage from "../Pages/Chat/ChatPage"
import FriendsPage from "../Pages/Friends/Friends"
import GroupsPage from "../Pages/Groups/GroupsPage"
import Home from "../Pages/Home/Home"
import routeLinks from "./links"

const privateRoutes: any = [
    {
        comp: Home,
        exact: true,
        path: routeLinks.homePage,
        isHideNav:true
    },
    {
        comp: ChatPage,
        exact: true,
        path: routeLinks.chatPage,
        isHideNav:false
    },
    {
        comp: GroupsPage,
        exact: true,
        path: routeLinks.groupsPage,
        isHideNav:false
    },
    {
        comp: FriendsPage,
        exact: true,
        path: routeLinks.friendsPage,
        isHideNav:false
    }
]

export default privateRoutes