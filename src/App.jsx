// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

// 引入刚才创建的两个页面
import ScrollToTop from './components/ScrolltoTop'; 
import Home from './pages/Home';
import Ride from './pages/Ride/Ride';
import BookDriver from './pages/Ride/BookDriver/BookDriver';
import RideOverview from './pages/Ride/Overview/Overview';

function App() {
  return (
    // 1. 包裹整个应用
    <BrowserRouter>
      <ScrollToTop /> {/* 每次路由切换时滚动到顶部 */}

      <Routes>
        {/* 2. 定义路由规则 */}
        <Route path="/" element={<Home />} />           {/* 首页 */}

        <Route path="/ride" element={<Ride />}>
          <Route index element={<RideOverview />} />   
          <Route path="book" element={<BookDriver />} />    
        </Route> 
        
        {/* 你以后还可以加更多页面，比如：
        <Route path="/about" element={<About />} /> 
        */}
      </Routes>
    </BrowserRouter>

  );
}

export default App;