// src/components/Sidebar/PersonalizedFeed.jsx
import React from "react";
import TrendingItems from "./TrendingItems";
import { personalizedFeed } from "../../data/personalizedFeed";

const PersonalizedFeed = () => {
  return (
    <div className="feed-content">
      <h3>🎯 Personalized Alerts</h3>
      <div className="feed-items">
        {personalizedFeed.map((item) => (
          <div key={item.id} className={`feed-item ${item.priority.toLowerCase()}`}>
            <div className="feed-icon-container">
              {item.priority === "High" && <span className="feed-icon">🚨</span>}
              {item.priority === "Medium" && <span className="feed-icon">⚠️</span>}
              {item.priority === "Low" && <span className="feed-icon">ℹ️</span>}
            </div>
            <div className="feed-details">
              <div className="feed-header">
                <h4>{item.title}</h4>
                <span className="feed-type-tag">{item.type}</span>
              </div>
              <p>{item.message}</p>
              <div className="feed-footer">
                <span className="feed-location">{item.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h3>🔥 Trending Now</h3>
      <TrendingItems />
    </div>
  );
};

export default PersonalizedFeed;
