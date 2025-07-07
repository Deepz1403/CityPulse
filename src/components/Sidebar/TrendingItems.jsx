// src/components/Sidebar/TrendingItems.jsx
import React from "react";

const trendingData = [
  {
    id: 1,
    emoji: "🚗",
    title: "Traffic Surge",
    description: "Electronic City experiencing heavy traffic",
  },
  {
    id: 2,
    emoji: "🌧️",
    title: "Weather Alert",
    description: "Light rain expected in South Bengaluru",
  },
];

const TrendingItems = () => {
  return (
    <div className="trending-items">
      {trendingData.map((item) => (
        <div key={item.id} className="trending-item">
          <div className="trending-icon-wrapper">
            <span className="trending-emoji">{item.emoji}</span>
            <span className="trending-badge">🔥</span>
          </div>
          <div className="trending-details">
            <strong className="trending-title">{item.title}</strong>
            <p className="trending-description">{item.description}</p>
          </div>
        </div>
      ))}
      <button className="view-all-btn">View All Trends</button>
    </div>
  );
};

export default TrendingItems;
