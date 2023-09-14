import React from 'react';
import './LoginWidget.css';
import LoginWidget from './loginWidget'; // Import your LoginWidget component

export function HomePage() {
  return (
    <div className="">
    
      <div className="login-widget-wrapper">
      <div>
      <h1>Sign In</h1>
      <h2>Sign in to your account</h2>
      </div>
       <div>
       <LoginWidget />
       </div>
      </div>
    </div>
  );
}

export default HomePage;
