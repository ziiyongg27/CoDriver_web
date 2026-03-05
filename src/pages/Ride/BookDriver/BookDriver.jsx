// src/components/BookDriver.jsx
import React from 'react';

function BookDriver() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', minHeight: '500px' }}>
      <h1>Book A Driver</h1>
      <p>这里是预定司机的表单页面。</p>
      {/* 以后把你的 bookdriver.html 表单放在这里 */}
      <form style={{ marginTop: '20px' }}>
          <input type="text" placeholder="Location" style={{ padding: '10px', width: '300px' }} /><br/><br/>
          <button style={{ padding: '10px 20px', background: 'blue', color: 'white' }}>Search Driver</button>
      </form>
    </div>
  );
}

export default BookDriver;