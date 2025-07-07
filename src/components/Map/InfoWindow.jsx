// src/components/Map/InfoWindow.jsx
import React from "react";
import { InfoWindow as GoogleInfoWindow } from "@react-google-maps/api";
import Badge from "../Common/Badge";
import { formatTimestamp } from "../../utils/formatters";

const InfoWindow = ({ event, onClose }) => {
  return (
    <GoogleInfoWindow position={event.position} onCloseClick={onClose}>
      <div className="info-window">
        <div className="info-header">
          <h3>{event.title}</h3>
          <Badge type="urgency" level={event.urgency} />
        </div>
        <div className="info-details">
          <p>
            <strong>Type:</strong> {event.type}
          </p>
          <p>
            <strong>Description:</strong> {event.description}
          </p>
          <p>
            <strong>Reported:</strong> {formatTimestamp(event.timestamp)}
          </p>
          <div className="verification-info">
            <Badge type="verification" verified={event.isVerified} />
            <span className="verification-count">
              {event.verificationCount} confirmations
            </span>
          </div>
        </div>
      </div>
    </GoogleInfoWindow>
  );
};

export default InfoWindow;
