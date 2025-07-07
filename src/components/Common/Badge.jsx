// src/components/Common/Badge.jsx
import React from "react";
import "./Common.css";

const Badge = ({ type, level, verified }) => {
  if (type === "urgency") {
    return (
      <span className={`urgency-badge ${level?.toLowerCase()}`}>{level}</span>
    );
  }

  if (type === "verification") {
    return (
      <span
        className={`verification-badge ${verified ? "verified" : "pending"}`}
      >
        {verified ? "✓ Verified" : "⏳ Pending"}
      </span>
    );
  }

  return null;
};

export default Badge;
