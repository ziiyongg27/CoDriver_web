import React, { useState } from 'react';
import "./DownloadBar.css";

function DownloadBar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a id="app-download-bar-a" href="#">
        <div className="app-download-bar-div"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <p className="app-download-bar-p">{isHovered ? "Download CoDriver" : "Download App"}</p>
        </div>
    </a>
  );
}

export default DownloadBar;