import React, { use } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import MessagePanel from "./MessagePanel";
import "./MessageCenter.css";

function FloatingMsgBtn() {
    const [isOpen, setIsOpen] = useState(false);

    const [unread] = useState(3); // Example unread message count

    const MessageIcon = () => (
        <svg className="message-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            
        <g>
            <path
            d="M 15 15 H 85 C 88.866 15 92 18.134 92 22 V 68 C 92 71.866 88.866 75 85 75 H 32 L 15 92 V 22 C 15 18.134 18.134 15 22 15 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"      
            />

            <line x1="30" y1="35" x2="75" y2="35" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
            <line x1="30" y1="50" x2="55" y2="50" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
        </g>
        </svg>
    );      
    

    return createPortal(
        <>
            <button className="floating-msg-btn" onClick={() => setIsOpen(!isOpen)}>
                {MessageIcon()}
                {unread > 0 && (
                    <span className="unread-badge">{unread}</span>
                )}
            </button>

            {isOpen && <MessagePanel onClose={() => setIsOpen(false)}/>}
        </>,

        document.body
    );
}


export default FloatingMsgBtn;


