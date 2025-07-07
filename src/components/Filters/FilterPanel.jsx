// src/components/Filters/FilterPanel.jsx
import React from "react";
import { filters } from "../../data/constants";
import "./FilterPanel.css";

const FilterPanel = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="filter-panel">
      <h4>Event Filters</h4>
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter.name}
            onClick={() => onFilterChange(filter.name)}
            className={`filter-btn ${
              activeFilter === filter.name ? "active" : ""
            }`}
            style={{
              backgroundColor:
                activeFilter === filter.name ? filter.color : "#fff",
              color: activeFilter === filter.name ? "#fff" : "#333",
            }}
          >
            <span className="filter-icon">{filter.icon}</span>
            {filter.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
