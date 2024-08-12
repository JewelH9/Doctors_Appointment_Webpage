import React from "react";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  const defaultImage =
    "https://cdn-icons-png.flaticon.com/512/3774/3774299.png"; // Default image URL

  return (
    <div className="bg-white p-4 border border-gray-200 rounded shadow">
      <div className="w-24 h-24 mx-auto">
        <img
          src={doctor.image || defaultImage}
          alt={doctor.name}
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <h2 className="text-lg font-semibold mt-4 text-center">{doctor.name}</h2>
      <p className="text-gray-700 text-center">{doctor.specialty}</p>
      <p className="text-gray-700 text-center">{doctor.location}</p>
      <p className="text-gray-700 text-center">
        Available: {doctor.availability}
      </p>
      <div className="text-center mt-4">
        <Link to={`/doctors/${doctor.id}`}>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
