import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import "./NewsSlider.css";

function NewsSlider() {
    const newsData = [
        {
        id: 1,
        name: "Michael Lee",
        role: "CEO",
        image: "/image/background-img/img2.jpg",
        desc: "CoDriver is a cutting-edge app designed to ensure your safe and convenient transportation needs."
        },
        {
        id: 2,
        name: "Sarah Tan",
        role: "CTO",
        image: "/image/background-img/img1.jpeg",
        desc: "With a focus on user security, our platform provides trusted designated driving services."
        },
        {
        id: 3,
        name: "John Doe",
        role: "Manager",
        image: "/image/background-img/img3.jpg",
        desc: "Safeguarding your personal login and electronic wallet data is our top priority."
        },
        {
        id: 4,
        name: "Emily Chen",
        role: "Developer",
        image: "/image/background-img/img4.jpg",
        desc: "Enjoy a smooth travel experience with our advanced security features."
        },
        {
        id: 5,
        name: "AI Assistant",
        role: "Support",
        image: "/image/background-img/ai.jpeg",
        desc: "Our AI-driven system ensures that your rides are both safe and reliable."
        },
    ];

    return (
        <div className="slider-section">
            <div className="slide-container">
                {/* Title */}
                <div>
                    <a className="slider-h1-a" href="/news"><h1 className="slider-h1">Newsroom</h1></a>
                </div>

                <div className="swiper-button-prev custom-prev-arrow"></div>
                <div className="swiper-button-next custom-next-arrow"></div>

                <div className="slide-content">
                {/* Swiper 组件开始 */}
                <Swiper
                    slidesPerView={3} // 默认显示 3 张
                    spaceBetween={25} // 卡片之间的间距
                    loop={true}       // 允许无限循环滑动
                    centerSlide={true} // 居中显示
                    fade={true}
                    grabCursor={true} // 鼠标放上去变手型
                    pagination={{
                    clickable: true, // 圆点可以点击
                    dynamicBullets: true, // 圆点大小动态变化
                    }}
                    navigation={{
                        nextEl: '.custom-next-arrow',
                        prevEl: '.custom-prev-arrow',
                    }} 
                    modules={[Pagination, Navigation]} // 注册模块
                    className="mySwiper"
                    // 响应式断点：不同屏幕宽度显示不同数量
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        750: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 },
                    }}
                >
                    {/* 这里的魔法是：map 循环。自动把上面的数据变成卡片 */}
                    {newsData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="card">
                            <div className="image-content">
                                <span className="overlay"></span>
                                <div className="card-image">
                                    {/* 这里的 src 是动态读取的 */}
                                    <img src={item.image} alt={item.name} className="card-img" />
                                </div>
                            </div>

                            <div className="card-content">
                                <h2 className="card-name">{item.name}</h2>
                                <p className="card-description">{item.desc}</p>
                                <button className="card-button">View More</button>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))}
                </Swiper>
                </div>
            </div>
        </div>
    );
}

export default NewsSlider;