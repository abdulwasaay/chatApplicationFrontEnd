import InputField from "../inputFields/InputField";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
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
        <div className="fixed w-full bottom-0 m-2 ">
            <div className=" flex justify-start w-full">
                {/* <AudioRecorder
                    onRecordingComplete={(blob) => addAudioElement(blob)}
                    recorderControls={recorderControls}
                /> */}
                <button className="mr-2 bg-[#3f4396] pl-2 pr-2 rounded-full hover:bg-[#8795ff] " style={{ transition: "1s ease" }}><KeyboardVoiceIcon /></button>
                <InputField name="message" types="text" placeHolder="Enter a message" classes="bg-[#3f4396]" />
            </div>
        </div>
    )
}

export default ChatMessBar