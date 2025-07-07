// src/data/constants.js
export const mapConfig = {
  containerStyle: {
    width: "100%",
    height: "100vh",
  },
  center: {
    lat: 12.9716,
    lng: 77.5946,
  },
  zoom: 13,
  options: {
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  },
};

export const filters = [
  { name: "All", icon: "🗺️", color: "#4285F4" },
  { name: "Traffic", icon: "🚗", color: "#EA4335" },
  { name: "Accident", icon: "⚠️", color: "#FBBC04" },
  { name: "Festival", icon: "🎉", color: "#34A853" },
  { name: "Infrastructure", icon: "🔧", color: "#9AA0A6" },
  { name: "Event", icon: "📍", color: "#FF6D01" },
  { name: "Rain", icon: "🌧️", color: "#4A90E2" },
  { name: "City Sentiment", icon: "😊", color: "#7ED321" },
];
