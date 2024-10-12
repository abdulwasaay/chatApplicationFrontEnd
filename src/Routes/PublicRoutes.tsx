import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const PublicRoutes = ({ children, isAuth }: { children: any, isAuth: Boolean }) => {
    const navigate = useNavigate()
    useEffect(() => {
        if (isAuth) {
            return navigate("/")
        }
    }, [isAuth])
    
    return children
}

export default PublicRoutes