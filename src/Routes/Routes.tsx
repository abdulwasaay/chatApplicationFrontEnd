import ChatPage from "../Pages/Chat/ChatPage"
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
    }
]

export default privateRoutes