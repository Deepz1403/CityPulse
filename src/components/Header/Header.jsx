// src/components/Header/Header.jsx
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="dashboard-header">
      <div className="header-content">
        <h1>🌆 CityPulse</h1>
        <div className="header-stats">
          <div className="language-selector">
            <select>
              <option value="">Select Language</option>
              <option value="en">English</option>
              <option value="hi">Hindi</option>
              <option value="kn">Kannada</option>
              <option value="pa">Punjabi</option>
            </select>
          </div>
          <div className="stat">
            <span className="stat-number">127</span>
            <span className="stat-label">Active Events</span>
          </div>
          <div className="stat">
            <span className="stat-number">89%</span>
            <span className="stat-label">Verified</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
