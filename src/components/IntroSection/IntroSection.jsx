import React from 'react';
import "./IntroSection.css";

function IntroSection() {
  return (
    <div className="maincontent-below-container">
       <div className="introvideo-section">
            <div className="introvideo-div">
                {/* 注意 React 中的 iframe 写法变化：
                   1. frameborder -> frameBorder
                   2. allowfullscreen -> allowFullScreen
                */}
                <iframe 
                    width="100%" 
                    height="450" 
                    src="https://www.youtube.com/embed/Bkc_9lrTwXw?si=buSOieab9Gi9HvFX" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                ></iframe>
            </div>

            <div className="intro-word-div">
                <h2>Premium Designated Driving Services</h2>
                <br />
                <p>CoDriver is a sophisticated app delivering secure and reliable designated driving solutions. With a focus on protecting user data and ensuring a smooth travel experience, CoDriver integrates advanced security features to provide peace of mind on the road.</p>
            </div>
       </div>
    </div>
  );
}

export default IntroSection;