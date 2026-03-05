import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import "./ServiceDashboard.css";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.5,
        }
    }
};

const RideBookingIcon = ({ className }) => (
    <svg 
        className={className}  
        viewBox="0 0 300 121" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <g transform="translate(0.000000,121.000000) scale(0.100000,-0.100000)" stroke="none">
            <path d="M1015 995 c-137 -22 -281 -83 -432 -182 -45 -30 -66 -37 -165 -50 -62 -9 -125 -20 -140 -25 -34 -13 -48 -52 -48 -140 0 -49 -6 -78 -20 -105 -31 -59 -22 -166 19 -206 21 -22 152 -46 247 -47 47 0 53 -2 63 -29 16 -36 68 -87 104 -100 16 -6 52 -11 81 -11 65 0 138 42 163 95 l17 35 587 0 c570 0 588 -1 594 -19 27 -85 156 -136 252 -100 34 13 80 55 98 90 14 26 18 27 124 31 86 3 115 8 130 22 23 21 49 169 33 189 -5 6 -13 28 -17 47 -11 56 -33 80 -98 110 -85 38 -301 89 -535 125 -28 5 -75 28 -135 67 -107 71 -252 150 -317 173 -118 43 -429 58 -605 30z m422 -36 c147 -16 258 -62 448 -184 120 -78 135 -84 262 -105 121 -21 196 -36 343 -72 95 -22 132 -44 62 -35 -55 7 -80 0 -88 -25 -4 -13 2 -28 18 -45 36 -39 72 -53 136 -53 39 0 62 -4 65 -12 2 -7 0 -41 -6 -76 -12 -76 -17 -79 -132 -81 l-81 -2 -11 55 c-14 68 -36 101 -85 132 -76 48 -166 41 -234 -19 -44 -38 -65 -78 -67 -128 l-1 -39 -577 0 -576 0 -5 50 c-9 96 -90 165 -193 165 -50 0 -67 -5 -104 -30 -50 -34 -90 -102 -91 -154 0 -24 -4 -32 -14 -28 -8 3 -61 11 -118 18 -56 6 -111 15 -120 20 -9 5 -22 32 -29 64 -11 48 -10 60 4 90 17 35 17 35 86 35 39 0 73 5 76 11 11 17 -15 96 -41 124 -15 16 -34 25 -54 25 -23 0 -30 4 -30 20 0 23 3 23 148 41 100 12 106 14 220 81 130 76 234 122 311 139 133 28 323 36 478 18z m-1111 -347 c13 -8 34 -46 34 -61 0 -6 -20 -11 -45 -11 l-45 0 0 40 c0 35 3 40 23 40 12 0 27 -4 33 -8z m2322 -98 c6 -2 12 -10 12 -19 0 -11 -11 -15 -45 -15 -46 0 -105 22 -105 40 0 9 105 4 138 -6z m-1854 -93 c71 -40 96 -134 54 -205 -70 -118 -239 -94 -278 40 -11 36 -10 49 5 88 35 92 132 126 219 77z m1546 2 c43 -25 64 -63 68 -123 2 -42 -2 -62 -17 -88 -42 -67 -125 -90 -197 -56 -47 22 -76 67 -82 124 -12 124 120 207 228 143z"/>
            <path d="M1100 924 c-173 -31 -266 -69 -320 -131 -32 -36 -40 -83 -17 -101 12 -11 380 -26 911 -39 250 -6 258 -6 254 13 -9 47 -273 204 -403 240 -58 16 -363 29 -425 18z m201 -94 c4 -30 10 -72 14 -92 l7 -36 -39 4 c-21 2 -140 6 -265 10 -178 5 -228 9 -228 19 0 23 80 84 139 106 71 27 205 48 296 46 l70 -2 6 -55z m150 46 c107 -17 197 -55 314 -130 l90 -58 -115 6 c-63 3 -174 6 -246 6 l-130 0 -13 78 c-7 42 -15 85 -17 95 -7 21 4 21 117 3z"/>
            <path d="M843 613 c-18 -7 -16 -30 3 -37 9 -3 38 -6 65 -6 36 0 51 4 56 16 3 9 0 20 -8 25 -15 9 -95 11 -116 2z"/>
            <path d="M1385 580 c-13 -21 12 -31 71 -28 44 2 59 7 59 18 0 19 -119 28 -130 10z"/>
        </g>
    </svg>
);

function ServiceDashboard() {
    const services = [
        { 
        id: 1, 
        name: 'Ride Booking', 
        href: 'https://github.com/Michael231022/CoDriver/tree/main/Website',
        icon: '/image/service_icon/Rides.png',
        description: 'Reliable rides at your fingertips.' 
        },
        { 
        id: 2, 
        name: 'Airport Transfer',
        href: 'https://www.youtube.com/',
        icon: '/image/service_icon/Airport_Transfer.png',
        description: 'Seamless trips to and from the airport.' 
        },
        { 
        id: 3, 
        name: 'Goods Delivery',
        href: '',
        icon: '/image/service_icon/Goods_Delivery.png',
        description: 'Secure, fast, and door-to-door.' 
        },
        { 
        id: 4, 
        name: 'Pets Taxi', 
        href: '',
        icon: '/image/service_icon/Pets_Taxi.png',
        description: 'Safe journeys for your furry friends.' 
        },
    ];


    return (
        <div className="service-dashboard">
            <motion.h1
                initial = {{ opacity: 0, y: -20 }}
                whileInView = {{ opacity: 1, y: 0 }}
                transition = {{ duration: 0.6 }}
                viewport = {{once: true}}
            >
                CoDriver Services
            </motion.h1>

            <motion.div className="services-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{once: true, amount: 0.2}}>
                {services.map(({ id, name, icon, description, href }) => (
                    <motion.a href={href} className='service-card' key={id} variants={cardVariants}>
                        <div className="icon-wrapper">
                            <img src={icon} alt={`${name} icon`} className="dashboard-icon" />
                        </div>
                        <div className='word-wrapper'>
                            <h2>{name}</h2>
                            <p>{description}</p>
                        </div>
                    </motion.a>
                ))}

                <div className='services-all'>
                    <Link to='/services'>View All Services</Link>
                </div>
            </motion.div>

            
        </div>
    );
}

export default ServiceDashboard;