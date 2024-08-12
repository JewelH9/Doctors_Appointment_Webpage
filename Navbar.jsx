import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <nav className="flex items-center justify-center h-16 bg-blue-600 relative">
      <button
        className="absolute left-4 bg-blue-600 text-white px-4 py-2 rounded text-2xl"
        onClick={handleBack}
      >
        Back
      </button>
      <h1 className="text-white text-3xl m-0">Doctor's Appointment</h1>
    </nav>
  );
};

export default Navbar;
