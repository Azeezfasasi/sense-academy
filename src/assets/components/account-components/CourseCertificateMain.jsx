// import React from 'react';

// const CourseCertificateMain = () => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-8 border-2 border-blue-500">
//       <div className="text-center mb-6">
//         <h2 className="text-3xl font-bold text-blue-700 mb-2">Certificate of Completion</h2>
//         <p className="text-gray-600">This certificate is awarded to</p>
//       </div>

//       <div className="text-center mb-8">
//         <h3 className="text-4xl font-semibold text-green-600 mb-1">Azeez Fasasi</h3>
//         <p className="text-lg text-gray-700">for successfully completing the course</p>
//         <p className="text-2xl font-medium text-blue-500">UI/UX Design Course</p>
//       </div>

//       <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
//         <div>
//           <p className="font-semibold">Date of Completion:</p>
//           <p>11th April, 2025</p>
//         </div>
//         <div>
//           <p className="font-semibold">Issued By:</p>
//           <p>Sense Academy</p>
//         </div>
//       </div>

//       <div className="border-t-2 border-gray-300 pt-4 text-center text-gray-600 text-xs">
//         <p>This is to certify that the above-named student has demonstrated satisfactory knowledge and skills in the specified course.</p>
//         <p className="mt-2">Certificate ID: #[UNIQUE_CERTIFICATE_ID]</p>
//       </div>
//     </div>
//   );
// };

// export default CourseCertificateMain;

// import React, { useEffect, useState } from 'react';
// import { useCertificate } from '@/assets/contextAPI/CertificateContext';

// const CourseCertificateMain = ({ courseId }) => {
//   const { certificates, fetchCertificates, loading, error } = useCertificate();
//   const [certificate, setCertificate] = useState(null);

//   // Fetch certificates and find the one for the current course
//   useEffect(() => {
//     const fetchAndSetCertificate = async () => {
//       await fetchCertificates(); // Ensure certificates are fetched
//       const courseCertificate = certificates.find((cert) => cert.courseId === courseId);
//       setCertificate(courseCertificate);
//     };

//     fetchAndSetCertificate();
//   }, [certificates, courseId, fetchCertificates]);

//   if (loading) return <div>Loading certificate...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-8 border-2 border-blue-500">
//       {certificate ? (
//         <>
//           <div className="text-center mb-6">
//             <h2 className="text-3xl font-bold text-blue-700 mb-2">Certificate of Completion</h2>
//             <p className="text-gray-600">This certificate is awarded to</p>
//           </div>

//           <div className="text-center mb-8">
//             <h3 className="text-4xl font-semibold text-green-600 mb-1">
//               {certificate.firstName} {certificate.lastName}
//             </h3>
//             <p className="text-lg text-gray-700">for successfully completing the course</p>
//             <p className="text-2xl font-medium text-blue-500">{certificate.courseTitle}</p>
//           </div>

//           <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
//             <div>
//               <p className="font-semibold">Date of Completion:</p>
//               <p>{new Date(certificate.issueDate).toLocaleDateString()}</p>
//             </div>
//             <div>
//               <p className="font-semibold">Issued By:</p>
//               <p>Sense Academy</p>
//             </div>
//           </div>

//           <div className="border-t-2 border-gray-300 pt-4 text-center text-gray-600 text-xs">
//             <p>
//               This is to certify that the above-named student has demonstrated satisfactory
//               knowledge and skills in the specified course.
//             </p>
//             <p className="mt-2">Certificate ID: #{certificate._id}</p>
//           </div>
//         </>
//       ) : (
//         <div className="text-center">
//           <p className="text-gray-600">No certificate available for this course yet.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CourseCertificateMain;

import React from 'react';

const CourseCertificateMain = ({ certificate }) => {
  if (!certificate) {
    return (
      <div className="text-center">
        <p className="text-gray-600">Select a certificate to view its details.</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 border-2 border-blue-500">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-blue-700 mb-2">Certificate of Completion</h2>
        <p className="text-gray-600">This certificate is awarded to</p>
      </div>

      <div className="text-center mb-8">
        <h3 className="text-4xl font-semibold text-green-600 mb-1">
          {certificate.firstName} {certificate.lastName}
        </h3>
        <p className="text-lg text-gray-700">for successfully completing the course</p>
        <p className="text-2xl font-medium text-blue-500">{certificate.courseTitle}</p>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <div>
          <p className="font-semibold">Date of Completion:</p>
          <p>{new Date(certificate.issueDate).toLocaleDateString()}</p>
        </div>
        <div>
          <p className="font-semibold">Issued By:</p>
          <p>Sense Academy</p>
        </div>
      </div>

      <div className="border-t-2 border-gray-300 pt-4 text-center text-gray-600 text-xs">
        <p>
          This is to certify that the above-named student has demonstrated satisfactory
          knowledge and skills in the specified course.
        </p>
        <p className="mt-2">Certificate ID: #{certificate._id}</p>
      </div>
    </div>
  );
};

export default CourseCertificateMain;