import React, { useContext } from "react"
import { UserContext } from "../../Context/UserContext"
import profileColors from "../../constants/ProfileColorScheme";
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from "../customButton/CutomButtomLatest";
// import ChatMessBar from "./ChatMessageBar";

const options = [
    "Block"
];

const ITEM_HEIGHT = 20;
type Anchor = 'top' | 'left' | 'bottom' | 'right';

const ChatComp = () => {

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const { user } = useContext<any>(UserContext);
    const userFirstLetter: string = user?.name && user?.name?.charAt(0);
    console.log(user)

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    return (
        <div className=" w-full bg-[#232775]">
            <div className=" relative">
                <div className="flex items-center justify-between bg-[#3f4396] p-3">
                    <div>
                        <Button sx={{ textTransform: "none" }} onClick={toggleDrawer("right", true)}><div className="flex items-center gap-4 cursor-pointer text-[white]">
                            <div className="w-[34px] h-[34px] pl-3 pr-3 pt-[5px] pb-[5px] rounded-full" style={{ background: profileColors[userFirstLetter.toUpperCase() && userFirstLetter.toUpperCase()] }}>
                                {userFirstLetter.toUpperCase()}
                            </div>
                            <p className="font-bold text-[20px]">{user?.name}</p>
                        </div></Button>
                        <Drawer open={state["right"]} onClose={toggleDrawer("right", false)} anchor={"right"}>
                            <div className=" bg-[#8795ff] h-full  flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-end mt-2 mr-2 p-0">
                                        <CloseIcon className="text-white text-right cursor-pointer" onClick={toggleDrawer("right", false)} />
                                    </div>

                                    <div className="p-8">
                                        <div className="w-[190px] h-[190px] text-white flex justify-center items-center text-[110px] rounded-full" style={{ background: profileColors[userFirstLetter.toUpperCase() && userFirstLetter.toUpperCase()] }}>
                                            {userFirstLetter.toUpperCase()}
                                        </div>
                                        <h1 className="text-white text-center font-bold mt-5 text-2xl border-b-2 pb-5" style={{ borderBottomColor: profileColors[userFirstLetter.toUpperCase() && userFirstLetter.toUpperCase()] }}>{user?.name}</h1>
                                        <div className="mt-5 flex items-center font-bold gap-3">
                                            <LocalPhoneIcon className="mt-1 text-[#3f4396]" />
                                            <p className="text-white">+92 3002546883</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" flex justify-center pl-8 pr-8 mb-10">
                                    <CustomButton text={"Block"} onButtonClick={() => console.log("Blocked")} styles={{ width: "100%" }} />
                                </div>
                            </div>
                        </Drawer>
                    </div>
                    <div>
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                            sx={{ color: "white" }}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="long-menu"
                            MenuListProps={{
                                'aria-labelledby': 'long-button',
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                paper: {
                                    style: {
                                        maxHeight: ITEM_HEIGHT * 4.5,
                                        width: '20ch',
                                        background: "#8795ff",
                                        color: "white"
                                    },
                                },
                            }}
                        >
                            {options.map((option) => (
                                <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </div>
                </div>
                <div className=" h-[40rem]">
                    ds
                </div>
                {/* <ChatMessBar /> */}
            </div>
        </div>
    )
}
export default ChatComp