import React, { useState } from "react";

const FilterButton = ({ onFilter }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("");

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    setShowDropdown(false);
    if (onFilter) {
      onFilter(filter);
    }
  };

  const filterOptions = ["Specialty", "Location", "Availability"];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="p-2 text-lg bg-blue-600 text-white rounded"
      >
        {selectedFilter ? `Filter: ${selectedFilter}` : "Filter Doctors"}
      </button>
      {showDropdown && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
          {filterOptions.map((filter) => (
            <div
              key={filter}
              onClick={() => handleFilterSelect(filter)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {filter}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FilterButton;
