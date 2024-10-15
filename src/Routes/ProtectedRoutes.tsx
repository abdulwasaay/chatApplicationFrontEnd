import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import routeLinks from "./links"
import NavbarComp from "../Components/NavcarLatest/Navbar"

const ProtectedRoutes = ({ children, isAuth, hideNav, navArr }: { children: any, isAuth: boolean, hideNav: boolean, navArr: any }) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuth) {
            return navigate(routeLinks.registerPage)
        }
    }, [isAuth])
    return <>
        {!hideNav && <NavbarComp tabs={navArr} />}
        {children}
    </>
}

export default ProtectedRoutes