import { Route, Routes } from "react-router-dom"
import Auth from "../Pages/auth/Auth"
import routeLinks from "./links"
import NavbarComp from "../Components/NavcarLatest/Navbar"
import privateRoutes from "./Routes"
import NotFound from "../Components/Errors/NotFound/Notfound"
import ProtectedRoutes from "./ProtectedRoutes"
import getCurrentRoutePath from "../Utils/CurrentPathFinder"
import { useEffect } from "react"
import { authCookie } from "../constants/cookieNames"
import { useDispatch, useSelector } from "react-redux"
import GetCookieValue from "../Utils/getCookie"
import { setAuth } from "../Redux/Slices/AuthSlice"

const RoutesLayout = () => {
    const dispatch = useDispatch();
    const { isAuth } = useSelector((state: any) => state.authSlice);

    useEffect(() => {
        
        const token = GetCookieValue(authCookie);
        if (token) {
            dispatch(setAuth(true))
        } else {
            dispatch(setAuth(false))
        }
    }, [])

    const logoutHandler = () => {
        dispatch(setAuth(false))
    }

    const hideNavPaths = [
        routeLinks.registerPage,
        routeLinks.homePage,
        routeLinks.forgotPage,
        routeLinks.resetPage,
        routeLinks.otpPage
    ]

    const currentRoute: any = getCurrentRoutePath()
    const isHideNav = () => hideNavPaths.find((route: any) => route.split('/').every((seg: any, i: any) => seg === currentRoute.split('/')[i] || seg.startsWith(':')));


    const navbarArr = [
        { name: "Home", link: true, path: routeLinks.homePage },
        { name: "Chats", link: true, path: routeLinks.chatPage },
        { name: "Groups", link: true, path: routeLinks.groupsPage },
        { name: "Signup", link: true, path: routeLinks.registerPage },
        { name: "Login", link: true, path: routeLinks.registerPage },
        { name: "Logout", link: false, clickHandler: logoutHandler }
    ]


    return (
        <>
            {!isHideNav && <NavbarComp tabs={navbarArr} />}
            <Routes>
                <Route path="/*" Component={Auth} />
                {
                    privateRoutes?.map((route: any, ind: any) => (
                        <Route
                            key={ind}
                            element={<ProtectedRoutes isAuth={isAuth}><route.comp /></ProtectedRoutes>}
                            path={route?.path}
                        />

                    ))
                }
                <Route path="*" Component={NotFound} />
            </Routes>
        </>
    )
}

export default RoutesLayout