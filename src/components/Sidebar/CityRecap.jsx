// src/components/Sidebar/CityRecap.jsx
import React from "react";

const CityRecap = () => {
  return (
    <div className="recap-content">
      <h3>📈 Today's City Pulse</h3>
      <div className="recap-stats">
        <div className="recap-stat">
          <span className="recap-icon">🚗</span>
          <span className="recap-number">47</span>
          <span className="recap-label">Traffic Reports</span>
        </div>
        <div className="recap-stat">
          <span className="recap-icon">💥</span>
          <span className="recap-number">12</span>
          <span className="recap-label">Accidents</span>
        </div>
        <div className="recap-stat">
          <span className="recap-icon">🎉</span>
          <span className="recap-number">8</span>
          <span className="recap-label">Events</span>
        </div>
      </div>

      <h4 className="section-title">🏙️ City Highlights</h4>
      <ul className="highlights-list">
        {[
          { text: "Cultural festival at Cubbon Park drew large crowds", category: "event" },
          { text: "Traffic congestion peaked during evening rush hour", category: "traffic" },
          { text: "Infrastructure issues reported in 3 areas", category: "issue" },
          { text: "Overall city mood: Moderately positive", category: "general" },
        ].map((item, index) => (
          <li key={index} className={`recap-item ${item.category}`}>
            {item.text}
          </li>
        ))}
      </ul>

      <h4 className="section-title">🔮 Predictions</h4>
      <ul className="predictions-list">
        {[
          { text: "Heavy traffic expected on ORR tomorrow 8-10 AM", category: "traffic" },
          { text: "Weekend festival likely to cause road closures", category: "event" },
          { text: "Rain may affect traffic in South Bengaluru", category: "weather" },
        ].map((item, index) => (
          <li key={index} className={`recap-item ${item.category}`}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityRecap;
