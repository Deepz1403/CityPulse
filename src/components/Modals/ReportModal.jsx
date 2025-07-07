// src/components/Modals/ReportModal.jsx
import React, { useState } from "react";
import Button from "../Common/Button";
import { useGeolocation } from "../../hooks/useGeolocation";
import "./ReportModal.css";

const ReportModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    type: "",
    description: "",
    media: null,
  });
  const { location, getCurrentLocation } = useGeolocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Report submitted:", formData);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h3>📸 Report New Incident</h3>
        <form className="report-form" onSubmit={handleSubmit}>
          <select
            className="form-input"
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
            required
          >
            <option value="">Select Incident Type</option>
            <option value="Traffic">Traffic Jam</option>
            <option value="Accident">Accident</option>
            <option value="Infrastructure">Infrastructure Issue</option>
            <option value="Event">Event/Festival</option>
            <option value="Other">Other</option>
          </select>

          <textarea
            className="form-input"
            placeholder="Describe the incident..."
            rows="3"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />

          <div className="form-row">
            <input
              type="file"
              accept="image/*,video/*"
              className="file-input"
              onChange={(e) =>
                setFormData({ ...formData, media: e.target.files[0] })
              }
            />
            <Button
              type="button"
              onClick={getCurrentLocation}
              variant="secondary"
            >
              📍 Use Current Location
            </Button>
          </div>

          <div className="modal-actions">
            <Button type="button" onClick={onClose} variant="secondary">
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              Submit Report
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportModal;
