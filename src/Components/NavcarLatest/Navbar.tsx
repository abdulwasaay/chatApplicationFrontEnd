import React, { useState } from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import profileColors from "../../constants/ProfileColorScheme";
import MainProfile from "../ProfileComp/MainProfile";

interface Navbar {
    tabs: any
}

const NavbarComp: React.FC<Navbar> = ({ tabs }) => {
    const [opens, setOpens] = useState<boolean>(false)
    const { user } = useSelector((state: any) => state.authSlice);
    const userFirstLetter: string = user?.name && user?.name?.charAt(0);

    const HandleClose = () => {
        setOpens(false)
    }

    return (
        <>
            <div className={`bg-[#3f4396] w-14 min-w-14 h-full relative`}>
                <div className=" text-center h-[60px] pt-5" >
                    <button onClick={() => setOpens(true)} className=" pl-3 pr-3 pt-[5px] pb-[5px] rounded-full" style={{ background: profileColors[userFirstLetter.toUpperCase() && userFirstLetter.toUpperCase()] }}>{userFirstLetter}</button>
                </div>
                {
                    tabs.map((tab: any, ind: any) => (
                        <div key={ind} className=" text-center h-[60px]">
                            {
                                tab?.link ? (
                                    <Link to={tab?.path} >{tab.icon && tab.icon}</Link>
                                ) : (
                                    <button type="button" onClick={tab?.clickHandler} className=" absolute bottom-4 right-3">{tab.icon && tab.icon}</button>
                                )
                            }
                        </div>
                    ))
                }
            </div>
            <div className=" w-full fixed">
                <MainProfile open={opens} closeHandler={HandleClose} />
            </div>
        </>
    )
}

export default NavbarComp