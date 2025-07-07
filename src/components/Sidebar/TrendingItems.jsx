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
          <span className="trending-emoji">{item.emoji}</span>
          <div>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingItems;
