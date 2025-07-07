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
          <div key={item.id} className={`feed-item ${item.priority}`}>
            <div className="feed-header">
              <h4>{item.title}</h4>
              <span className="feed-location">{item.location}</span>
            </div>
            <p>{item.message}</p>
          </div>
        ))}
      </div>

      <h3>🔥 Trending Now</h3>
      <TrendingItems />
    </div>
  );
};

export default PersonalizedFeed;
