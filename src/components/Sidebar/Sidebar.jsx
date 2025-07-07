// src/components/Sidebar/Sidebar.jsx
import React from "react";
import PersonalizedFeed from "./PersonalizedFeed";
import CityRecap from "./CityRecap";
import "./Sidebar.css";

const Sidebar = ({ activeTab, onTabChange }) => {
  return (
    <div className="sidebar">
      <div className="sidebar-tabs">
        <button
          className={`tab-btn ${activeTab === "feed" ? "active" : ""}`}
          onClick={() => onTabChange("feed")}
        >
          📱 Feed
        </button>
        <button
          className={`tab-btn ${activeTab === "recap" ? "active" : ""}`}
          onClick={() => onTabChange("recap")}
        >
          📊 Recap
        </button>
      </div>

      <div className="sidebar-content">
        {activeTab === "feed" && <PersonalizedFeed />}
        {activeTab === "recap" && <CityRecap />}
      </div>
    </div>
  );
};

export default Sidebar;
