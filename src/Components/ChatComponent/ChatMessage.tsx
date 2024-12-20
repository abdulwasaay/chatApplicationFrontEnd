
const ChatMessage = ({ isOwnMessage, message }:any) => {
    return (
        <div
            className={`flex mt-4 ${isOwnMessage ? "justify-end" : "justify-start"
                }`}
        >
            <div
                className={`${isOwnMessage ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                    } px-4 py-2 rounded-lg max-w-xs break-words`}
            >
                {message}
            </div>
        </div>
    );
};

export default ChatMessage;
