// src/components/Filters/FilterPanel.jsx
import React from "react";
import { filters } from "../../data/constants";
import "./FilterPanel.css";

const FilterPanel = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="filter-panel">
      <h4>Filter Events</h4>
      <div className="filter-dropdown">
        <select
          className="filter-select"
          value={activeFilter}
          onChange={(e) => onFilterChange(e.target.value)}
        >
          {filters.map((filter) => (
            <option key={filter.name} value={filter.name}>
              {filter.icon} {filter.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
