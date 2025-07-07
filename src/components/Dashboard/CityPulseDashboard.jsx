// src/components/Dashboard/CityPulseDashboard.jsx
import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import MapContainer from "../Map/MapContainer";
import Sidebar from "../Sidebar/Sidebar";
import FilterPanel from "../Filters/FilterPanel";
import ReportModal from "../Modals/ReportModal";
import { sampleEvents } from "../../data/sampleEvents";
import { useEventData } from "../../hooks/useEventData";
import ChatbotModal from "../Chatbot/ChatbotModal";
import "./CityPulseDashboard.css";
import "../Chatbot/ChatbotModal.css";

function CityPulseDashboard() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [showReportModal, setShowReportModal] = useState(false);
  const [showChatbotModal, setShowChatbotModal] = useState(false);
  const [sidebarTab, setSidebarTab] = useState("feed");

  const { events, loading, error } = useEventData();

  const filteredEvents =
    activeFilter === "All"
      ? events
      : events.filter((e) => e.type === activeFilter);

  return (
    <div className="dashboard-container">
      <Header />

      <div className="main-content">
        <Sidebar activeTab={sidebarTab} onTabChange={setSidebarTab} />
        <div className="map-section">
          <MapContainer
            events={filteredEvents}
            selectedEvent={selectedEvent}
            onEventSelect={setSelectedEvent}
          />
          <button
            className="chatbot-btn"
            onClick={() => setShowChatbotModal(true)}
          >
            💬 Chat with Bot
          </button>
          <button
            className="report-btn"
            onClick={() => setShowReportModal(true)}
          >
            📸 Report Incident
          </button>
        </div>
        <FilterPanel
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />
      </div>

      {showReportModal && (
        <ReportModal onClose={() => setShowReportModal(false)} />
      )}

      {showChatbotModal && (
        <ChatbotModal onClose={() => setShowChatbotModal(false)} />
      )}
    </div>
  );
}

export default CityPulseDashboard;
