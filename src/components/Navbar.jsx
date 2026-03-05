import React from 'react';
import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar() {
  const { t } = useTranslation("header_footer");

  return (
    <header className="header-bar">
        {/* 1. Logo 部分 */}
        <Link id="header-logo-a" to="/" reloadDocument>
            <nav className="header-logo-nav">
                {/* 注意：图片路径前面加了 /，代表从 public 文件夹读取 */}
                <img className="header-logo" draggable="false" src="/image/logo/codriver-logo-dark.png" alt="CoDriver Logo" />
            </nav>
        </Link>

        {/* 2. 登录按钮图标部分 (SVG) */}
        <div className="login-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="30" height="28">
                <path fill="#000000" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/>
            </svg>
            <div className="login-btn-dropdown">
                <Link id="signup_acc_2" to="/signup">Sign Up</Link>
                <Link id="login_acc_2" to="/login">Log in</Link>
            </div>
        </div>

        {/* 3. 汉堡菜单按钮 */}
        <a className="toggle-button">
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
            <span className="toggle-bar"></span>
        </a>

        {/* 4. 中间导航链接 */}
        <nav className="nav-bar">
            <ul className="nav_links">
                <Link to="/ride" reloadDocument><li>{t("header.ride")}</li></Link>
                <Link to="/drivers"><li>{t("header.drivers")}</li></Link>
                <Link to="/news"><li>{t("header.newsroom")}</li></Link>
                <Link to="/about"><li>{t("header.about")}</li></Link>
                <div className="nav_links-more-dropdown-div">
                    <a><li className="nav_links-li">{t("header.more")} <span className="arrow-down-span"><i className="nav-bar-arrow-down"></i></span></li></a>
                    <div className="nav_links-more-dropdown">
                        <a className="nav-links-moredown-first" href="/safety">Safety</a>
                        <a href="/how-it-works">How CoDriver Works</a>
                        <a href="/blog">Blog</a>
                        <a href="/company">Company</a>
                        <a className="nav-links-moredown-last" href="/careers">Careers</a>
                    </div>
                </div>
            </ul>
        </nav>

        {/* 5. 右侧按钮 */}
        <nav className="nav-bar">
            <div className="rightcontent-login-div">
                <Link id="signup_acc" to="/signup"><button>{t("button.signup")}</button></Link>
                <Link id="login_acc" to="/login"><button>{t("button.login")}</button></Link>
            </div>
        </nav>
    </header>
  );
}

export default Navbar;