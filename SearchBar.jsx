import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="flex justify-center items-center my-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for available doctors"
        className="p-2 text-lg w-64 mr-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleSearch}
        className="p-2 text-lg bg-blue-600 text-white rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
