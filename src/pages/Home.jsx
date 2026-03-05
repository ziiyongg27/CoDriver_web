import React from 'react';
import Navbar  from '../components/Navbar';
import Footer from '../components/Footer';
import HeroBanner from '../components/HeroBanner/HeroBanner';
import DownloadBar from '../components/DownloadBar/DownloadBar';
import IntroSection from '../components/IntroSection/IntroSection';
import NewsSlider from '../components/NewsSlider/NewsSlider';
import ServiceDashboard from '../components/ServiceDashboard/ServiceDashboard';
import FloatingMsgBtn from '../components/MessageCenter/FloatingMsgBtn';
import MessagePanel from '../components/MessageCenter/MessagePanel';

function Home() {
  return (
    <div className="main_content">
      {/* Top NavBar */}
      <Navbar />

      {/* Hero Banner Section */}
      <HeroBanner />

      {/* Download Bar Section */}  
      <DownloadBar />

      {/* Intro Section */}
      <IntroSection />

      {/* News Slider Section */}
      <NewsSlider />

      {/* Service Dashboard Section */}
      <ServiceDashboard />


      {/* Floating Message Button */}
      <FloatingMsgBtn />

      {/* Message Panel (conditionally rendered by FloatingMsgBtn) */}
      
      {/* Bottom Footer */}
      <Footer />

    </div>
  );
}

export default Home;