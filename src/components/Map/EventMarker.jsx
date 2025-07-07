// src/components/Map/EventMarker.jsx
import React from "react";
import { Marker } from "@react-google-maps/api";
import { getMarkerIcon } from "../../utils/helpers";

const EventMarker = ({ event, onClick }) => {
  return (
    <Marker
      position={event.position}
      onClick={onClick}
      icon={{
        url: getMarkerIcon(event),
        scaledSize: new window.google.maps.Size(32, 32),
      }}
    />
  );
};

export default EventMarker;
