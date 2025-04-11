import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
useNavigate

const CertificateLists = () => {
  
  return (
    <div className="p-6 w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Courses</h2>
      <ul className="space-y-4">
          <li className="p-4 border rounded shadow-sm flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">aaaaaa</h3>
              <p className="text-sm text-gray-600">description</p>
            </div>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              View Certificate
            </button>
          </li>
      </ul>
    </div>
  );
};

export default CertificateLists;
