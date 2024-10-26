import { Route, Routes } from "react-router-dom"
import Auth from "../Pages/auth/Auth"
import routeLinks from "./links"
import privateRoutes from "./Routes"
import NotFound from "../Components/Errors/NotFound/Notfound"
import ProtectedRoutes from "./ProtectedRoutes"
import { useEffect } from "react"
import { authCookie } from "../constants/cookieNames"
import { useDispatch, useSelector } from "react-redux"
import GetCookieValue from "../Utils/getCookie"
import { setAuth } from "../Redux/Slices/AuthSlice"
import HomeIcon from '@mui/icons-material/Home';
import DeleteCookieValue from "../Utils/DeleteCookie"
import ChatIcon from '@mui/icons-material/Chat';
import GroupsIcon from '@mui/icons-material/Groups';
import LogoutIcon from '@mui/icons-material/Logout';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { persistor } from "../Redux/store"

const RoutesLayout = () => {
    const dispatch = useDispatch();
    const { isAuth } = useSelector((state: any) => state.authSlice);

    useEffect(() => {
        
        const token = GetCookieValue(authCookie);
        if (token) {
            dispatch(setAuth(true))
        } else {
            dispatch(setAuth(false))
            persistor.purge()
        }
    }, [])

    const logoutHandler = () => {
        DeleteCookieValue("token")
        window.location.reload()
    }


    const navbarArr = [
        { name: "Profile", link: true, icon: null },
        { name: "Home", link: true, path: routeLinks.chatPage , icon: <HomeIcon /> },
        { name: "Chats", link: true, path: routeLinks.chatPage , icon: <ChatIcon /> },
        { name: "Groups", link: true, path: routeLinks.groupsPage , icon: <GroupsIcon /> },
        { name: "Friends", link: true, path: routeLinks.friendsPage , icon: <Diversity1Icon /> },
        { name: "Logout", link: false, clickHandler: logoutHandler , icon: <LogoutIcon /> }
    ]


    return (
            <Routes>
                <Route path="/*" Component={Auth} />
                {
                    privateRoutes?.map((route: any, ind: any) => (
                        <Route
                            key={ind}
                            element={<ProtectedRoutes isAuth={isAuth} hideNav = {route?.isHideNav} navArr={navbarArr}><route.comp /></ProtectedRoutes>}
                            path={route?.path}
                        />

                    ))
                }
                <Route path="*" Component={NotFound} />
            </Routes>
    )
}

export default RoutesLayout