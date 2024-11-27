import InputField from "../inputFields/InputField";
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';

const ChatMessBar = () => {
    return (
        <div className="fixed bottom-0 p-2 w-full">
            <div className="flex justify-start  mx-auto">
                <InputField name="message" types="text" placeHolder="Enter a message" classes="bg-[#3f4396]" />
                <button><KeyboardVoiceIcon /></button>
            </div>
        </div>
    )
}

export default ChatMessBar