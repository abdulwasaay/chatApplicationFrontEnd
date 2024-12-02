// import React, { useContext } from "react"
// import { UserContext } from "../../Context/UserContext"
// import profileColors from "../../constants/ProfileColorScheme";
// import IconButton from '@mui/material/IconButton';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Drawer from '@mui/material/Drawer';
// import Button from '@mui/material/Button';
// import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
// import CloseIcon from '@mui/icons-material/Close';
// import CustomButton from "../customButton/CutomButtomLatest";
// import EmailIcon from '@mui/icons-material/Email';
// import FacebookFilled from '@ant-design/icons/FacebookFilled';
// import LinkedinFilled from '@ant-design/icons/LinkedinFilled';
// import TwitterSquareFilled from '@ant-design/icons/TwitterSquareFilled';
// import InstagramFilled from "@ant-design/icons/InstagramFilled";
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import ChatMessBar from "./ChatMessageBar";
// import ChatMessage from "./ChatMessage";

// const options = [
//     "Block"
// ];

// const ITEM_HEIGHT = 20;
// type Anchor = 'top' | 'left' | 'bottom' | 'right';

interface ChatCompInterface {
    setHide: (bool: any) => void
}

const ChatComp: React.FC<ChatCompInterface> = ({ setHide }) => {

    console.log(setHide)
    // const [state, setState] = React.useState({
    //     top: false,
    //     left: false,
    //     bottom: false,
    //     right: false,
    // });
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);
    // const { user, setUser } = useContext<any>(UserContext);
    // const userFirstLetter: string = user?.name && user?.name?.charAt(0);
    // console.log(user)

    // const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    // const toggleDrawer =
    //     (anchor: Anchor, open: boolean) =>
    //         (event: React.KeyboardEvent | React.MouseEvent) => {
    //             if (
    //                 event.type === 'keydown' &&
    //                 ((event as React.KeyboardEvent).key === 'Tab' ||
    //                     (event as React.KeyboardEvent).key === 'Shift')
    //             ) {
    //                 return;
    //             }

    //             setState({ ...state, [anchor]: open });
    //         };

    // const backNavigate = () => {
    //     setUser()
    //     user && setHide(false)
    // }

    return (
        //     <div className="flex flex-col h-screen bg-gray-100">
        //   {/* Top Bar */}
        //   <div className="flex items-center justify-between px-4 py-2 bg-blue-600 text-white shadow">
        //     <div className="flex items-center space-x-3">
        //       <img
        //         src="https://via.placeholder.com/40"
        //         alt="User Profile"
        //         className="w-10 h-10 rounded-full"
        //       />
        //       <h1 className="text-lg font-semibold">User Name</h1>
        //     </div>
        //   </div>

        //   {/* Chat Container */}
        //   <div className="flex-1 overflow-y-auto p-4 space-y-3">
        //     {/* Sample Messages */}
        //     <ChatMessage isOwnMessage={false} message="Hello! How are you?" />
        //     <ChatMessage isOwnMessage={true} message="I'm good, thanks!" />
        //     <ChatMessage isOwnMessage={false} message="What about you?" />
        //   </div>

        //   {/* Message Input */}
        //   <ChatInput />
        // </div>
        <div className="flex flex-col h-screen justify-end w-full bg-[#232775] relative border" >
            {/* <div className="flex items-center justify-between px-4 py-2 text-white shadow bg-[#3f4396] p-3">
                <div>
                    <button onClick={backNavigate}><NavigateBeforeIcon /></button>
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
                                    <div className="mt-5 flex items-center font-bold gap-3">
                                        <EmailIcon className="mt-1 text-[#3f4396]" />
                                        <p className="text-white">user@chatly.com</p>
                                    </div>
                                    <div className="mt-12 flex justify-between items-center">
                                        <FacebookFilled className="text-[#3f4396] text-[30px] cursor-pointer" />
                                        <LinkedinFilled className="text-[#3f4396] text-[30px] cursor-pointer" />
                                        <InstagramFilled className="text-[30px] text-[#3f4396] cursor-pointer" />
                                        <TwitterSquareFilled className="text-[#3f4396] text-[30px] cursor-pointer" />
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
            <div className="flex-1 overflow-y-auto p-4">
                {/* Sample Messages */}
                {/* <ChatMessage isOwnMessage={false} message="Hello! How are you?" />
                <ChatMessage isOwnMessage={true} message="I'm good, thanks!" />
                <ChatMessage isOwnMessage={false} message="What about you?" />
                <ChatMessage isOwnMessage={true} message="I'm good, thanks!" />
                <ChatMessage isOwnMessage={false} message="What about you?" />
                <ChatMessage isOwnMessage={true} message="I'm good, thanks!" />
                <ChatMessage isOwnMessage={false} message="What about you?" />
                <ChatMessage isOwnMessage={true} message="I'm good, thanks!" />
                <ChatMessage isOwnMessage={false} message="What about you?" />
                <ChatMessage isOwnMessage={true} message="I'm good, thanks!" />
                <ChatMessage isOwnMessage={false} message="What about you?" />
                <ChatMessage isOwnMessage={true} message="I'm good, thanks!" />
                <ChatMessage isOwnMessage={false} message="What about you?" />
                <ChatMessage isOwnMessage={true} message="I'm good, thanks!" />
                <ChatMessage isOwnMessage={false} message="What about you?" />
                <ChatMessage isOwnMessage={true} message="I'm good, thanks!" />
                <ChatMessage isOwnMessage={false} message="What about you?" />
                <ChatMessage isOwnMessage={true} message="I'm good, thanks!" />
                <ChatMessage isOwnMessage={false} message="What about you?" />
                <ChatMessage isOwnMessage={true} message="I'm good, thanks!" />
                <ChatMessage isOwnMessage={false} message="What about you?" /> */}
            {/* </div> */}
                <ChatMessBar />
        </div>
    )
}
export default ChatComp