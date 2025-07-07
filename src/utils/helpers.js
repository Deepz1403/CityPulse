// src/utils/helpers.js
export const getMarkerIcon = (event) => {
  const baseUrl = "http://maps.google.com/mapfiles/ms/icons/";
  const iconMap = {
    Traffic: "red-dot.png",
    Accident: "yellow-dot.png",
    Festival: "green-dot.png",
    Infrastructure: "blue-dot.png",
    Event: "purple-dot.png",
  };
  return baseUrl + iconMap[event.type];
};

export const getUrgencyColor = (urgency) => {
  switch (urgency) {
    case "High":
      return "#EA4335";
    case "Medium":
      return "#FBBC04";
    case "Low":
      return "#34A853";
    default:
      return "#9AA0A6";
  }
};
