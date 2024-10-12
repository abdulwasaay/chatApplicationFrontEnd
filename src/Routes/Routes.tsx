import Home from "../Pages/Home/Home"
import routeLinks from "./links"

const privateRoutes: any = [
    {
        comp: Home,
        exact: true,
        path: routeLinks.homePage
    }
]

export default privateRoutes