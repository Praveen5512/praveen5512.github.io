import { useEffect, useState } from "react";
import "../css/MessageDisplay.css";

const MessageDisplay = ({ message,setMessage,isError, duration = 3000 }) => {
const [visible, setVisible] = useState(false);
const [displayMessage, setDisplayMessage] = useState("Hello");

useEffect(() => {
    if (!message) return;

    setDisplayMessage(message);
    setVisible(true);

    const fadeTimer = setTimeout(() => {
        setVisible(false);
    }, duration - 400);

    const removeTimer = setTimeout(() => {
        setDisplayMessage("");
        setMessage("")
    }, duration);

    return () => {
        clearTimeout(fadeTimer);
        clearTimeout(removeTimer);
    };
}, [message, duration]);

if (!displayMessage) return null;

return (
    <div
        className={`message-display-container ${visible ? "show" : "hide"} ${isError ? "error" : "success"}`}
    >
        {displayMessage}
    </div>
);

};

export default MessageDisplay;