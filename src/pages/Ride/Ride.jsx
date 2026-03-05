import React from "react";
import Navbar  from '../../components/Navbar';
import Footer from '../../components/Footer';  
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Ride.css';
import FloatingMsgBtn from "../../components/MessageCenter/FloatingMsgBtn";

function Ride() {
    const location = useLocation(); // 获取当前网址路径

    // 辅助函数：判断当前是哪个 Tab，决定是否加蓝色边框
    const getActiveStyle = (path) => {
        // 如果路径完全匹配，或者路径是 /services 且 tab 是 overview (默认)
        if (location.pathname === path) {
            return { borderBottom: '4px solid rgba(41, 41, 209, 0.911)' };
        }
        return {};
    };

    return (
        <div className="main_content">
            {/* Top NavBar */}
            <Navbar />

            <div className="hero-topbar">
                <h1>Book a Ride</h1>
            </div>

            <div className="menu-bar">
                <div className="menu-bar-content">
                    <Link id="overview" to="/ride" style={getActiveStyle('/ride')}><div className="overview-div">
                        <h3>Overview</h3>
                    </div></Link>

                    <p className="menu-bar-line">|</p>

                    <Link id="bookdriver" to="/ride/book" style={getActiveStyle('/ride/book')}><div className="bookDriver-div">
                        <h3>Book A Driver</h3>
                    </div></Link>
                </div>
            </div>

            <Outlet />  {/* 渲染子路由内容 */}

            {/* Floating Message Button */}
            <FloatingMsgBtn />

            {/* Bottom Footer */}
            <Footer/>
        </div>
    );
}

export default Ride;