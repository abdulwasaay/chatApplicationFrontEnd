// interface Navbar {
//     tabs: any
// }

import "./styles.css"

import { appColour } from "../../constants/colours"
import InputField from "../inputFields/InputField"
import { useFormik } from "formik"
import profileColors from "../../constants/ProfileColorScheme"
import { useContext } from "react"
import { UserContext } from "../../Context/UserContext"

const ChatBar = ({ }) => {

    // const { setUser, setIsHide } = useContext<any>(UserContext);

    const chatsArr = [
        {
            name: "Dummy user1",
            currentMess: "I'm so happy today",
            isOnline: true
        }, {
            name: "Dummy user2",
            currentMess: "shas dsjh jd dsdsjj sdd dsjhh s ds dd sdsdsj dsdn dnd kjhwe ss dhnw w 2323",
            isOnline: true
        }, {
            name: "Dummy user3",
            currentMess: "",
            isOnline: false
        }, {
            name: "Dummy user4",
            currentMess: "Hello, How are you?",
            isOnline: true
        },
        {
            name: "Dummy user5",
            currentMess: "Hello, How are you?",
            isOnline: true
        },
        {
            name: "Dummy user6",
            currentMess: "Hello, How are you?",
            isOnline: true
        },
        {
            name: "Dummy user7",
            currentMess: "Hello, How are you?",
            isOnline: false
        },
        {
            name: "Dummy user8",
            currentMess: "Hello, How are you?",
            isOnline: true
        },
        {
            name: "Dummy user9",
            currentMess: "Hello, How are you?",
            isOnline: true
        },
        {
            name: "Dummy user10",
            currentMess: "Hello, How are you?",
            isOnline: false
        },
        {
            name: "Dummy user11",
            currentMess: "Hello, How are you?",
            isOnline: true
        },
        {
            name: "Dummy user12",
            currentMess: "Hello, How are you?",
            isOnline: true
        },
        {
            name: "Dummy user13",
            currentMess: "Hello, How are you?",
            isOnline: false
        }, {
            name: "Dummy user14",
            currentMess: "Hello, How are you?",
            isOnline: true
        },
        {
            name: "Dummy user15",
            currentMess: "Hello, How are you?",
            isOnline: true
        }, {
            name: "Dummy user16",
            currentMess: "Hello, How are you?",
            isOnline: true
        }, {
            name: "Dummy user17",
            currentMess: "Hello, How are you?",
            isOnline: true
        }, {
            name: "Dummy user18",
            currentMess: "Hello, How are you?",
            isOnline: true
        },

    ];

    const searchFormik = useFormik({
        initialValues: { chatSearch: "" },
        onSubmit: ((values: any) => {
            console.log(values)
        })
    })

    const searchName = searchFormik?.values?.chatSearch.replace(/\s/g, "").toLowerCase();
    const filteredArr = chatsArr?.filter((chat: any) => chat?.name?.replace(/\s/g, "").toLowerCase().startsWith(searchName));

    return (
        <div className="h-[100vh] w-16 border flex flex-col justify-end">
            <h1>ds</h1>
            {/* <div className="flex justify-center pl-5 pr-5">
                <InputField
                    name="chatSearch"
                    types="search"
                    placeHolder="Find Chat"
                    styles={{ backgroundColor: appColour.lightBLue }}
                    classes="hide-cancel-button rounded-sm mt-[20px] sm:w-[300px]"
                    formik={searchFormik}
                />
            </div>
            <div className=" pt-10 h-[100%]" >
                <div className="custom-scrollbar-style w-full h-full flex flex-col items-center gap-4  overflow-x-hidden pl-5 pr-5">
                    {filteredArr?.map((chat: any) => (
                        <div
                            className="bg-[#3f4396] flex w-full sm:w-[300px] items-center gap-4 p-3 rounded-md cursor-pointer"
                            onClick={() => {
                                setUser(chat);
                                setIsHide(true);
                            }}
                        >
                            <div className="relative">
                                <p
                                    className="h-[33px] pl-3 pr-3 pt-1 rounded-full"
                                    style={{
                                        background: profileColors[chat?.name.charAt(0).toUpperCase()],
                                    }}
                                >
                                    {chat?.name.charAt(0).toUpperCase()}
                                </p>
                                {chat?.isOnline ? (
                                    <div className="bg-[#25ec99] border border-[#3f4396] w-[11px] h-[11px] absolute top-[-3px] rounded-full shadow-2xl"></div>
                                ) : (
                                    <div className="bg-[#ffffff83] border border-[#3f4396] w-[11px] h-[11px] absolute top-[-3px] rounded-full shadow-2xl"></div>
                                )}
                            </div>
                            <div>
                                <h1>{chat?.name}</h1>
                                <p className="w-[160px] max-[340px]:w-[120px] whitespace-nowrap overflow-hidden text-ellipsis">
                                    {chat?.currentMess}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </div>
    )
}

export default ChatBar