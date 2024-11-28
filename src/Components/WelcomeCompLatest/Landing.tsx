import LockIcon from '@mui/icons-material/Lock';

const Landing = () => {

    return (

        <div className="w-full sm:min-w-[600px] md:min-w-[0%] bg-[rgb(35,39,117)] flex flex-col items-center justify-center pl-5 pr-5" style={{ marginLeft: "6.4px" }}>
            <div className=" w-full flex justify-center">
                <div className="w-full flex flex-col items-center">
                    <img src="/assets/appicon.png" alt="appicon" className="w-[200px]" />
                    <h1 className="lg:text-[40px] text-3xl mt-6 font-extrabold ml-3 text-[#070a52] max-[500px]:text-[30px] max-[363px]:text-[22px]">
                        Chatly Web App
                    </h1>
                    <p className="w-[70%] text-md lg:text-xl font-normal text-[#a8b1f8] tracking-wider mt-5 text-center">
                        Connect with friends and teams effortlessly! Enjoy secure one-on-one and group chats in real time with our user-friendly chat platform.
                    </p>
                </div>
            </div>
            <div className="flex gap-1 items-center mt-14 text-md lg:text-xl text-[#8795ff] font-bold">
                <LockIcon />
                <p>End to End encrypted</p>
            </div>
        </div>
    )
}

export default Landing