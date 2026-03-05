import React from "react";
import { createPortal } from "react-dom";
import "./MessageCenter.css";


function MessagePanel({ onClose }) {
    const messages = [
        { id: 1, type: "trip", text: "Your trip is confirmed!", time: "2 minutes ago" },
        { id: 2, type: "trip", text: "Your trip is confirmed!", time: "6 minutes ago" }
    ];

    return createPortal(
      <div className="msg-panel" onClick={(e) => e.stopPropagation()} >
          <div className="msg-panel-header">
              <span>Notifications</span>
              <button onClick={onClose} className="close-btn">✕</button>
          </div>

          <div className="msg-panel-content">
              {messages.length === 0 ? (
              <p>No new messages</p>
              ) : (
              messages.map(m => (
                  <div key={m.id} className="msg-item">
                  <p>{m.text}</p>
                  <small>{m.time}</small>
                  
                  </div>
              ))
              )}
          </div>
      </div>,

      document.body

    );
};

export default MessagePanel;

