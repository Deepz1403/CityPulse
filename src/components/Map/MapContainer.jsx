// src/components/Map/MapContainer.jsx
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, Tooltip, CircleMarker } from "react-leaflet";
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

  // Hardcoded traffic routes
  const trafficRoutes = [
    {
      id: "route1",
      positions: [
        [12.9721, 77.595],
        [12.973, 77.598],
        [12.975, 77.599],
      ],
      info: "Heavy Traffic: Old Airport Road to MG Road",
    },
    {
      id: "route2",
      positions: [
        [12.9171, 77.6238],
        [12.920, 77.625],
        [12.925, 77.628],
      ],
      info: "Heavy Traffic: Silk Board Junction",
    },
    {
      id: "route3",
      positions: [
        [12.9592, 77.6974],
        [12.960, 77.695],
        [12.962, 77.690],
      ],
      info: "Heavy Traffic: Outer Ring Road (ORR)",
    },
  ];

  // Custom marker icons for different event types
  const createCustomIcon = (eventType) => {
    const iconColors = {
      Traffic: "#EA4335",
      Accident: "#FBBC04",
      Festival: "#34A853",
      Infrastructure: "#4285F4",
      Event: "#9C27B0",
      Rain: "#4A90E2",
      "City Sentiment": "#7ED321",
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
      Rain: "🌧️",
      "City Sentiment": "😊",
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

      {events.map((event) => {
        if (event.type === "Rain" || event.type === "City Sentiment") {
          return (
            <CircleMarker
              key={event.id}
              center={[event.position.lat, event.position.lng]}
              radius={30} // Increased radius for better visibility
              color={event.type === "Rain" ? "#4A90E2" : "#7ED321"} // Blue for Rain, Green for Sentiment
              fillColor={event.type === "Rain" ? "#4A90E2" : "#7ED321"}
              fillOpacity={0.6} // Increased opacity for better visibility
              stroke={false} // No border
            >
              <Popup className="area-popup" autoPan={false} closeButton={false} open={true}>
                <div className="area-popup-content">
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                </div>
              </Popup>
            </CircleMarker>
          );
        } else {
          return (
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
          );
        }
      })}

      {trafficRoutes.map((route) => (
        <Polyline
          key={route.id}
          positions={route.positions}
          color="red"
          weight={5}
        >
          <Popup className="traffic-popup" autoPan={false} closeButton={false} open={true}>
            <div className="traffic-popup-content">
              <h4>{route.info}</h4>
            </div>
          </Popup>
        </Polyline>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
