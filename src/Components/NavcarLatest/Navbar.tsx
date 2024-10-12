import React from "react"

interface Navbar {
    tabs: any
}

const NavbarComp: React.FC<Navbar> = ({ tabs }) => {

    return (
        <>
            {
                tabs.map((tab: any, ind: any) => (
                    <p key={ind}>{tab?.name}</p>
                ))
            }
        </>
    )
}

export default NavbarComp