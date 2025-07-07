// src/components/Sidebar/CityRecap.jsx
import React from "react";

const CityRecap = () => {
  return (
    <div className="recap-content">
      <h3>📈 Today's City Pulse</h3>
      <div className="recap-stats">
        <div className="recap-stat">
          <span className="recap-number">47</span>
          <span className="recap-label">Traffic Reports</span>
        </div>
        <div className="recap-stat">
          <span className="recap-number">12</span>
          <span className="recap-label">Accidents</span>
        </div>
        <div className="recap-stat">
          <span className="recap-number">8</span>
          <span className="recap-label">Events</span>
        </div>
      </div>

      <h4>🏙️ City Highlights</h4>
      <div className="highlights">
        <p>• Cultural festival at Cubbon Park drew large crowds</p>
        <p>• Traffic congestion peaked during evening rush hour</p>
        <p>• Infrastructure issues reported in 3 areas</p>
        <p>• Overall city mood: Moderately positive</p>
      </div>

      <h4>🔮 Predictions</h4>
      <div className="predictions">
        <p>• Heavy traffic expected on ORR tomorrow 8-10 AM</p>
        <p>• Weekend festival likely to cause road closures</p>
        <p>• Rain may affect traffic in South Bengaluru</p>
      </div>
    </div>
  );
};

export default CityRecap;
