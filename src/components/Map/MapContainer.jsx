// src/components/Map/MapContainer.jsx
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapContainer.css";

// Fix for default markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapComponent = ({ events, selectedEvent, onEventSelect }) => {
  const center = [12.9716, 77.5946]; // Bengaluru coordinates

  // Custom marker icons for different event types
  const createCustomIcon = (eventType) => {
    const iconColors = {
      Traffic: "#EA4335",
      Accident: "#FBBC04",
      Festival: "#34A853",
      Infrastructure: "#4285F4",
      Event: "#9C27B0",
    };

    return L.divIcon({
      className: "custom-marker",
      html: `
        <div class="marker-pin" style="background-color: ${
          iconColors[eventType] || "#666"
        }">
          <div class="marker-icon">${getEventIcon(eventType)}</div>
        </div>
      `,
      iconSize: [30, 30],
      iconAnchor: [15, 30],
    });
  };

  const getEventIcon = (type) => {
    const icons = {
      Traffic: "🚗",
      Accident: "⚠️",
      Festival: "🎉",
      Infrastructure: "🔧",
      Event: "📍",
    };
    return icons[type] || "📍";
  };

  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{ height: "100%", width: "100%" }}
      className="leaflet-container"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {events.map((event) => (
        <Marker
          key={event.id}
          position={[event.position.lat, event.position.lng]}
          icon={createCustomIcon(event.type)}
          eventHandlers={{
            click: () => onEventSelect(event),
          }}
        >
          <Popup>
            <div className="custom-popup">
              <div className="popup-header">
                <h3>{event.title}</h3>
                <span
                  className={`urgency-badge ${event.urgency.toLowerCase()}`}
                >
                  {event.urgency}
                </span>
              </div>
              <div className="popup-content">
                <p>
                  <strong>Type:</strong> {event.type}
                </p>
                <p>
                  <strong>Description:</strong> {event.description}
                </p>
                <p>
                  <strong>Reported:</strong> {event.timestamp}
                </p>
                <div className="verification-status">
                  <span
                    className={`status-badge ${
                      event.isVerified ? "verified" : "pending"
                    }`}
                  >
                    {event.isVerified ? "✓ Verified" : "⏳ Pending"}
                  </span>
                  <span className="confirmation-count">
                    {event.verificationCount} confirmations
                  </span>
                </div>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
