import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import FilterButton from "./components/FilterButton";
import DoctorList from "./components/DoctorList";

function App() {
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      location: "New York",
      availability: "Mon-Fri",
      image: "",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      specialty: "Dermatologist",
      location: "Los Angeles",
      availability: "Tue-Thu",
      image: "",
    },
    {
      id: 3,
      name: "Dr. Emily Johnson",
      specialty: "Pediatrician",
      location: "Chicago",
      availability: "Mon-Wed",
      image: "",
    },
    {
      id: 4,
      name: "Dr. Michael Brown",
      specialty: "Orthopedic",
      location: "Houston",
      availability: "Mon-Fri",
      image: "",
    },
    {
      id: 5,
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      location: "New York",
      availability: "Mon-Fri",
      image: "",
    },
    {
      id: 6,
      name: "Dr. Jane Smith",
      specialty: "Dermatologist",
      location: "Los Angeles",
      availability: "Tue-Thu",
      image: "",
    },
    {
      id: 7,
      name: "Dr. Emily Johnson",
      specialty: "Pediatrician",
      location: "Chicago",
      availability: "Mon-Wed",
      image: "",
    },
    {
      id: 8,
      name: "Dr. Michael Brown",
      specialty: "Orthopedic",
      location: "Houston",
      availability: "Mon-Fri",
      image: "",
    },
    // Add more doctor objects here...
  ]);

  const handleSearch = (searchTerm) => {
    console.log("Searching for:", searchTerm);
    // Add your search logic here
  };

  const handleFilter = (filter) => {
    console.log("Filter selected:", filter);
    // Add your filter logic here
  };

  return (
    <Router>
      <Navbar />
      <div className="flex justify-center items-center my-4 space-x-2">
        <SearchBar onSearch={handleSearch} />
        <FilterButton onFilter={handleFilter} />
      </div>
      <Routes>
        <Route path="/" element={<DoctorList doctors={doctors} />} />
        <Route path="/doctors/:id" element={<div>Doctor Details Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
