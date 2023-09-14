import React from 'react';
import './HomePage.css'; // Import your CSS file for styling
import HomePage from './homePage';

export function Parallelogram() {
  return (
    <div className="homepage">
      <div className="parallelogram">
      <div className="center-content">
          <h1>Board.</h1>
        </div>
      </div>
      <div className="content">
      </div>
      <HomePage/>
    </div>
  );
}

export default Parallelogram;
