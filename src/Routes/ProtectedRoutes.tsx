import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import routeLinks from "./links"

const ProtectedRoutes = ({ children, isAuth }: { children: any, isAuth: Boolean }) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuth) {
            return navigate(routeLinks.registerPage)
        }
    }, [isAuth])
    return children
}

export default ProtectedRoutes