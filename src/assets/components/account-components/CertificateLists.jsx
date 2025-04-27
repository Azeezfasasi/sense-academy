import React, { useState } from 'react';
import { useCertificate } from '@/assets/contextAPI/CertificateContext';

const CertificateLists = ({ onSelectCertificate }) => {
  const { certificates, loading, error } = useCertificate();

  if (loading) return <div>Loading certificates...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6 w-full mx-auto">
      <h2 className="text-2xl font-bold mb-4">My Certificates</h2>
      {certificates.length === 0 ? (
        <p>No certificates available.</p>
      ) : (
        <ul className="space-y-4">
          {certificates.map((certificate) => (
            <li
              key={certificate._id}
              className="p-4 border rounded shadow-sm flex items-center justify-between"
            >
              <div>
                <h3 className="text-lg font-semibold">{certificate.courseTitle}</h3>
                <p className="text-sm text-gray-600">{certificate.certificateDescription}</p>
              </div>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                onClick={() => onSelectCertificate(certificate)}
              >
                View Certificate
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CertificateLists;
