const auth = "/auth"

const routeLinks = {
    homePage: "/",
    chatPage: "/chats",
    registerPage: `${auth}/register`,
    forgotPage: `${auth}/forgot`,
    groupsPage: "/groups",
    friendsPage: "/friends",
    resetPage: `${auth}/reset-password/:userId/:token`,
    otpPage: `${auth}/otp-verify`,
}


export default routeLinks