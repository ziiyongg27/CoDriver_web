import React from 'react';
import "./Overview.css";

function RideOverview() {
  return (
    <>
      {/* 3. Data Bar */}
      <div className="data-bar">
          <div className="data-content">
              <div className="data01">
                  <p id="drive_count">5,552</p>
                  <p>Total Drives</p>
              </div>
              <div className="data02">
                  <p id="distance_count">300.5</p>
                  <p>Total Distances (km)</p>
              </div>
              <div className="data03">
                  <p id="hour_count">200</p>
                  <p>Total Hours</p>
              </div>
          </div>
      </div>

      {/* 4. Overview Text */}
      <div className="overview_text">
          <div className="text_content">
              <h1>Designated Driving Service</h1>
              <p>CoDriver is here to make your life easier...</p>
          </div>
      </div>

      {/* 5. Video Section */}
      <div className="overview_video">
          <iframe 
              width="80%" height="500" 
              src="https://www.youtube.com/embed/Bkc_9lrTwXw?si=buSOieab9Gi9HvFX" 
              title="CoDriver Services" 
              frameBorder="0" allowFullScreen
          ></iframe>
      </div>

      <div className="overview-line"><hr /></div>

      {/* 6. Bottom Model Section */}
      <div className="overview_model">
          <div className="model_content">
              <h1>Any Car, Anytime</h1>
              <p>No matter what car you drive, CoDriver got you covered.</p>
          </div>
      </div>
    </>
  );
}

export default RideOverview;