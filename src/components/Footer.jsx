import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

function Footer() {
  // 获取当前年份的简便写法
  const currentYear = new Date().getFullYear();

  // Translation hook
  const { t } = useTranslation("header_footer");
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <footer className="main-codriver-footer">
        <div className="footer-content">
            <div className="footer-top-content">
                {/* Logo 区域 */}
                <div className="footer-logo-container">
                    <a href="/">
                        <div className="footer-codriver-logo">
                            {/* 记得路径前加斜杠 / */}
                            <img draggable="false" src="/image/logo/codriver-logo-dark.png" alt="Logo" />
                        </div>
                    </a>
                    <p>{t("footer.slogan")}</p>
                    <select name="language_selection" id="codriver-multi-language" value={i18n.language} onChange={(e) => changeLanguage(e.target.value)}>
                        <option value="en">{t("footer.english")}</option>
                        <option value="ch">{t("footer.chinese")}</option>                        
                    </select>
                </div>

                {/* 链接列表 1 */}
                <div className="footer-top-div">
                    <p>{t("footer.ride.title")}</p>
                    <ul className="footer-top-list">
                        <li><a href="#">{t("footer.ride.ride")}</a></li>
                        <li><a href="#">{t("footer.ride.airport")}</a></li>
                        <li><a href="#">{t("footer.ride.delivery")}</a></li>
                        <li><a href="#">{t("footer.ride.pets")}</a></li>
                        <li><a href="#">{t("footer.ride.more")}</a></li>
                    </ul>
                </div>

                {/* 链接列表 2 (Drivers) */}
                <div className="footer-top-div">
                    <p>{t("footer.drivers.title")}</p>
                    <ul className="footer-top-list">
                        <li><a href="#">{t("footer.drivers.become")}</a></li>
                        <li><a href="#">{t("footer.drivers.support")}</a></li>
                        <li><a href="#">{t("footer.drivers.resources")}</a></li>
                        <li><a href="#">{t("footer.drivers.community")}</a></li>
                        <li><a href="#">{t("footer.drivers.more")}</a></li>
                    </ul>
                </div>

                {/* 链接列表 3 (Newsroom) */}
                <div className="footer-top-div">
                    <p>Newsroom</p>
                    <ul className="footer-top-list">
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Contacts</a></li>
                    </ul>
                </div>
                
                 {/* 链接列表 4 (About Us) - 我省略了一部分，你可以照着搬 */}
                 <div className="footer-top-div">
                    <p>About Us</p>
                    <ul className="footer-top-list">
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Team</a></li>
                    </ul>
                </div>
                
                 {/* 链接列表 5 (More) */}
                 <div className="footer-top-div">
                    <p>More</p>
                    <ul className="footer-top-list">
                        <li><a href="#">Safety</a></li>
                        <li><a href="#">How CoDriver Works</a></li>
                    </ul>
                </div>

            </div> {/* footer top content */}

            <div className="footer-bottom-content">
                <div className="footer-social-content">
                    <div className="footer-line-div">
                        <div className="footer-line"></div>
                    </div>

                    <div className="content-below-line">
                        <div className="footer-bottom-div">
                            <ul className="terms-div">
                                <li><a href="#">{t("footer.privacy")}</a></li>
                                <li><a href="#">{t("footer.terms")}</a></li>
                                <li><a href="#">{t("footer.code")}</a></li>
                            </ul>
                        </div>
                        <div className="footer-bottom-div">
                            <ul className="social-div">
                                {/* 记得给 img 加上 alt 属性，路径加 / */}
                                <li><a id="social-x" className="social-icon" href="#" title="X"><img src="/image/social_app_icon/x.svg" alt="X"/></a></li>
                                <li><a id="social-facebook" className="social-icon" href="#" title="Facebook"><img src="/image/social_app_icon/facebook.svg" alt="Facebook"/></a></li>
                                <li><a id="social-instagram" className="social-icon" href="#" title="Instagram"><img src="/image/social_app_icon/instagram.svg" alt="Instagram"/></a></li>
                                <li><a id="social-whatsapp" className="social-icon" href="#" title="Whatsapp"><img src="/image/social_app_icon/whatsapp.svg" alt="Whatsapp"/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
        
                <div className="footer-last-bottom">
                    <div className="footer-last-div">
                        {/* 重点看这里：原本的 <script> 变成了 {currentYear} */}
                        <p>© {currentYear} <a id="MIC_TECHNOLOGIES" href="https://michael231022.github.io/MIC-TECH/Website/mic_tech.html" target="_blank" rel="noreferrer">MIC TECHNOLOGIES</a></p>
                    </div>
                </div>
            </div> {/* footer bottom content */}
        </div> {/* FOOTER CONTENT */}
    </footer>
  );
}

export default Footer;