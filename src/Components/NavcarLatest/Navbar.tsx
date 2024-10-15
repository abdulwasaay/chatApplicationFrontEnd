import React from "react"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import profileColors from "../../constants/ProfileColorScheme";

interface Navbar {
    tabs: any
}

const NavbarComp: React.FC<Navbar> = ({ tabs }) => {
    const { user } = useSelector((state: any) => state.authSlice);
    const userFirstLetter:string = user?.name && user?.name?.charAt(0);

    return (
        <div className={`bg-[#3f4396] w-12 h-full relative`}>
            <div className=" text-center h-[60px] pt-5" >
            <Link to={tabs[0]?.path} className=" pl-3 pr-3 pt-[7px] pb-[7px] rounded-full" style={{background : profileColors[userFirstLetter.toUpperCase() && userFirstLetter.toUpperCase() ]}}>{userFirstLetter}</Link>
            </div>
            {
                tabs.map((tab: any, ind: any) => (
                    <div key={ind} className=" text-center h-[60px]">
                        {
                            tab?.link ? (
                                <Link to={tab?.path} >{tab.icon && tab.icon}</Link>
                            ) : (
                                <button type="button" onClick={tab?.clickHandler} className=" absolute bottom-4 right-2">{tab.icon && tab.icon}</button>
                            )
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default NavbarComp