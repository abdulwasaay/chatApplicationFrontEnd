import { createContext, useState } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }: any) => {
    const [user, setUser] = useState();
    const [isHide , setIsHide] = useState(false);

    return (
        <UserContext.Provider value={{ user, setUser , isHide , setIsHide }}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider