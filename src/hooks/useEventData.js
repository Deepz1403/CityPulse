// src/hooks/useEventData.js
import { useState, useEffect } from "react";
import { sampleEvents } from "../data/sampleEvents";

export const useEventData = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setEvents(sampleEvents);
      setLoading(false);
    }, 1000);
  }, []);

  return { events, loading, error };
};
