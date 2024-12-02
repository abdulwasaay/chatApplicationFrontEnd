import InputField from "../inputFields/InputField";
// import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
// import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';;

const ChatMessBar = () => {

    // const recorderControls = useAudioRecorder()
    // const addAudioElement = (blob: any) => {
    //     const url = URL.createObjectURL(blob);
    //     const audio = document.createElement("audio");
    //     audio.src = url;
    //     audio.controls = true;
    //     document.body.appendChild(audio);
    // };

    return (

        <div className="flex items-center px-4 py-2 bg-[#3f4396] shadow ">
            <InputField name="message" types="text" placeHolder="Type a message..." classes="flex-1 px-4 py-2 bg-[#3f4396] border rounded-full outline-none ring-2 ring-blue-500" />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                Send
            </button>
        </div>
        // <div className="fixed w-[100%] overflow-y-auto bottom-0 m-2" style={{border:"2px solid black"}}>
        //     <div className=" flex justify-start w-full">
        //         {/* <AudioRecorder
        //             onRecordingComplete={(blob) => addAudioElement(blob)}
        //             recorderControls={recorderControls}
        //         /> */}
        //         <button className="mr-2 bg-[#3f4396] pl-2 pr-2 rounded-full hover:bg-[#8795ff] " style={{ transition: "1s ease" }}><KeyboardVoiceIcon /></button>
        //         <InputField name="message" types="text" placeHolder="Enter a message" classes="bg-[#3f4396]" />
        //     </div>
        // </div>
    )
}

export default ChatMessBar