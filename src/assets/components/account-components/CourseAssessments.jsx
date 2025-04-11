// import React from 'react';

// const CourseAssessments = ({ assessments, onSelectAssessment }) => {
//   return (
//     <div className="w-full max-w-full bg-white shadow rounded-lg p-2">
//       <h2 className="text-xl font-semibold mb-4">Course Assessments</h2>
//       <ul>
//         {assessments.map((assessment) => (
//           <li key={assessment.id} className="mb-4 border-b pb-4">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h3 className="text-lg font-medium">{assessment.title}</h3>
//                 <p className="text-gray-500 text-sm">{assessment.description}</p>
//               </div>
//               <button onClick={() => onSelectAssessment(assessment.id)}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//                 Take Test
//               </button>
//             </div>
//             {assessment.progress !== undefined && (
//               <div className="mt-2">
//                 <div className="flex items-center justify-between text-sm text-gray-600">
//                   <span>Progress:</span>
//                   <span>{`${assessment.progress}%`}</span>
//                 </div>
//                 <div className="bg-gray-200 rounded-full h-2">
//                   <div
//                     className="bg-green-500 h-2 rounded-full"
//                     style={{ width: `${assessment.progress}%` }}
//                   ></div>
//                 </div>
//               </div>
//             )}
//           </li>
//         ))}
//         {assessments.length === 0 && <p className="text-gray-600">No assessments available yet.</p>}
//       </ul>
//     </div>
//   );
// };

// export default CourseAssessments;

import React from 'react';

const CourseAssessments = ({ assessments, onSelectAssessment }) => {
  return (
    <div className="w-full max-w-full bg-white shadow rounded-lg p-4 sm:p-4 md:p-6">
      <h2 className="text-xl font-semibold mb-4">Course Assessments</h2>
      <ul>
        {assessments.map((assessment) => (
          <li key={assessment.id} className="mb-4 border-b pb-4">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
              <div>
                <h3 className="text-lg font-medium">{assessment.title}</h3>
                <p className="text-gray-500 text-sm">{assessment.description}</p>
              </div>
              <button
                onClick={() => onSelectAssessment(assessment.id)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-start sm:self-auto"
              >
                Take Test
              </button>
            </div>
            {assessment.progress !== undefined && (
              <div className="mt-2">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>Progress:</span>
                  <span>{`${assessment.progress}%`}</span>
                </div>
                <div className="bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: `${assessment.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
          </li>
        ))}
        {assessments.length === 0 && (
          <p className="text-gray-600">No assessments available yet.</p>
        )}
      </ul>
    </div>
  );
};

export default CourseAssessments;
