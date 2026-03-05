import React from 'react';
import "./HeroBanner.css";

function HeroBanner() {
  return (
    <div className="header-container">
        <div className="header-img-container">
            {/* 记得检查图片路径是否正确对应你 public 文件夹里的位置 */}
            <img draggable={false} src="/image/background-img/driver4.png" alt="Driver 4" />
            <img draggable={false} src="/image/background-img/driver1.jpeg" alt="Driver 1" />
            <img draggable={false} src="/image/background-img/driver3.jpeg" alt="Driver 3" />
        </div>
    </div>
  );
}

export default HeroBanner;