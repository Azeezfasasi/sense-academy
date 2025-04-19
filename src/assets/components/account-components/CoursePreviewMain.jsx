// import React, { useState, useEffect, useContext } from 'react';
// import ReactPlayer from 'react-player';
// import { Video } from 'lucide-react';
// import { CourseContext } from '../../contextAPI/CourseContext';

// function CoursePreviewMain({ courseId }) {
//   const { fetchAllCourses, courses } = useContext(CourseContext);
//   const [currentLesson, setCurrentLesson] = useState(null);
//   const [completedLessons, setCompletedLessons] = useState([]);
//   const [expandedChapter, setExpandedChapter] = useState(null); // Track which chapter is expanded
//   const [loading, setLoading] = useState(true);

//   // Fetch the course data dynamically
//   useEffect(() => {
//     const fetchData = async () => {
//       await fetchAllCourses();
//       setLoading(false);
//     };
//     fetchData();
//   }, [fetchAllCourses]);

//   const course = courses.find((course) => course._id === courseId);
//   const chapters = course?.chapters || [];

//   // Handle video completion
//   const handleVideoEnd = () => {
//     if (currentLesson) {
//       const lessonId = currentLesson._id;

//       // Update completed lessons
//       setCompletedLessons((prev) => {
//         if (!prev.includes(lessonId)) {
//           return [...prev, lessonId];
//         }
//         return prev;
//       });

//       // Move to the next lesson or chapter
//       const currentChapterIndex = chapters.findIndex((chapter) =>
//         chapter.lessons.some((lesson) => lesson._id === lessonId)
//       );
//       const currentLessonIndex = chapters[currentChapterIndex].lessons.findIndex(
//         (lesson) => lesson._id === lessonId
//       );

//       if (currentLessonIndex < chapters[currentChapterIndex].lessons.length - 1) {
//         // Move to the next lesson in the same chapter
//         setCurrentLesson(chapters[currentChapterIndex].lessons[currentLessonIndex + 1]);
//       } else if (currentChapterIndex < chapters.length - 1) {
//         // Move to the first lesson of the next chapter
//         setCurrentLesson(chapters[currentChapterIndex + 1].lessons[0]);
//         setExpandedChapter(currentChapterIndex + 1); // Expand the next chapter
//       }
//     }
//   };

//   // Calculate course progress
//   const totalLessons = chapters.reduce((total, chapter) => total + chapter.lessons.length, 0);
//   const progress = totalLessons > 0 ? ((completedLessons.length / totalLessons) * 100).toFixed(2) : 0;

//   if (loading) {
//     return <p>Loading course data...</p>;
//   }

//   if (!course) {
//     return <p>Course not found</p>;
//   }

//   return (
//     <div className="w-full flex flex-col md:flex-row justify-start md:justify-center gap-7 md:gap-0 md:space-x-12 items-start rounded-2xl">
//       {/* Course video preview */}
//       <div className="w-full h-[400px] md:w-[60%] relative overflow-hidden">
//         {currentLesson ? (
//           <ReactPlayer
//             url={currentLesson.videoLink}
//             controls
//             width="100%"
//             height="100%"
//             className="rounded-md"
//             onEnded={handleVideoEnd}
//           />
//         ) : (
//           <div className="flex items-center justify-center h-full bg-gray-200 rounded-md">
//             <p>Select a lesson to start</p>
//           </div>
//         )}
//       </div>

//       {/* Course Modules */}
//       <div className="w-full md:w-[40%] gap-4 flex flex-col justify-start items-start">
//         <div className="text-blue-800 text-left font-heading-3-font-family text-[20px] md:text-[24px] leading-heading-3-line-height font-heading-3-font-weight relative flex items-center justify-start">
//           Course Progress: {progress}%
//         </div>

//         {/* Custom Accordion */}
//         <div className="w-full">
//           {chapters.map((chapter, chapterIndex) => (
//             <div key={chapterIndex} className="mb-4 border rounded">
//               {/* Chapter Header */}
//               <div
//                 className="bg-gray-100 p-3 cursor-pointer flex justify-between items-center"
//                 onClick={() =>
//                   setExpandedChapter(expandedChapter === chapterIndex ? null : chapterIndex)
//                 }
//               >
//                 <span className="font-semibold text-lg">{chapter.title}</span>
//                 <span>{expandedChapter === chapterIndex ? '-' : '+'}</span>
//               </div>

//               {/* Chapter Content */}
//               {expandedChapter === chapterIndex && (
//                 <div className="p-3 bg-white">
//                   {chapter.lessons.map((lesson, lessonIndex) => {
//                     const isCompleted = completedLessons.includes(lesson._id);
//                     const isCurrent = currentLesson?._id === lesson._id;

//                     return (
//                       <div
//                         key={lessonIndex}
//                         className={`flex items-center justify-between p-2 border-b ${
//                           isCompleted ? 'bg-green-100' : isCurrent ? 'bg-blue-100' : 'bg-white'
//                         } cursor-pointer`}
//                         onClick={() => setCurrentLesson(lesson)}
//                       >
//                         <div className="flex items-center gap-2">
//                           <input type="checkbox" checked={isCompleted} readOnly />
//                           <span className="font-medium">{lessonIndex + 1}. {lesson.title}</span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                           <Video className="w-5 h-5" />
//                           <span className="text-gray-500">{lesson.duration}</span>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CoursePreviewMain;

import React, { useState, useEffect, useContext } from 'react';
import ReactPlayer from 'react-player';
import { Video } from 'lucide-react';
import { CourseContext } from '../../contextAPI/CourseContext';

function CoursePreviewMain({ courseId }) {
  const { fetchAllCourses, courses } = useContext(CourseContext);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await fetchAllCourses();
      setLoading(false);
    };
    fetchData();
  }, [fetchAllCourses]);

  const course = courses.find((course) => course._id === courseId);
  const chapters = course?.chapters || [];

  const handleVideoEnd = () => {
    if (!currentLesson) return;

    const lessonId = String(currentLesson._id);

    setCompletedLessons((prev) => {
      const updated = prev.includes(lessonId) ? prev : [...prev, lessonId];

      // Move to the next lesson or chapter after updating completed lessons
      setTimeout(() => {
        const currentChapterIndex = chapters.findIndex((chapter) =>
          chapter.lessons.some((lesson) => String(lesson._id) === lessonId)
        );
        const currentLessonIndex = chapters[currentChapterIndex].lessons.findIndex(
          (lesson) => String(lesson._id) === lessonId
        );

        if (currentLessonIndex < chapters[currentChapterIndex].lessons.length - 1) {
          setCurrentLesson(chapters[currentChapterIndex].lessons[currentLessonIndex + 1]);
        } else if (currentChapterIndex < chapters.length - 1) {
          setExpandedChapter(currentChapterIndex + 1);
          setCurrentLesson(chapters[currentChapterIndex + 1].lessons[0]);
        }
      }, 100); // Small delay to let completedLessons update

      return updated;
    });
  };

  const totalLessons = chapters.reduce(
    (total, chapter) => total + chapter.lessons.length,
    0
  );
  const progress =
    totalLessons > 0
      ? ((completedLessons.length / totalLessons) * 100).toFixed(2)
      : 0;

  if (loading) {
    return <p>Loading course data...</p>;
  }

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div className="w-full flex flex-col md:flex-row justify-start md:justify-center gap-7 md:gap-0 md:space-x-12 items-start rounded-2xl">
      {/* Course video preview */}
      <div className="w-full h-[400px] md:w-[60%] relative overflow-hidden">
        {currentLesson ? (
          <ReactPlayer
            url={currentLesson.videoLink}
            controls
            width="100%"
            height="100%"
            className="rounded-md"
            onEnded={handleVideoEnd}
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-200 rounded-md">
            <p>Select a lesson to start</p>
          </div>
        )}
      </div>

      {/* Course Modules */}
      <div className="w-full md:w-[40%] gap-4 flex flex-col justify-start items-start">
        <div className="text-blue-800 text-left font-heading-3-font-family text-[20px] md:text-[24px] leading-heading-3-line-height font-heading-3-font-weight relative flex items-center justify-start">
          Course Progress: {progress}%
        </div>

        {/* Custom Accordion */}
        <div className="w-full">
          {chapters.map((chapter, chapterIndex) => (
            <div key={chapterIndex} className="mb-4 border rounded">
              {/* Chapter Header */}
              <div
                className="bg-gray-100 p-3 cursor-pointer flex justify-between items-center"
                onClick={() =>
                  setExpandedChapter(
                    expandedChapter === chapterIndex ? null : chapterIndex
                  )
                }
              >
                <span className="font-semibold text-lg">{chapter.title}</span>
                <span>{expandedChapter === chapterIndex ? '-' : '+'}</span>
              </div>

              {/* Chapter Content */}
              {expandedChapter === chapterIndex && (
                <div className="p-3 bg-white">
                  {chapter.lessons.map((lesson, lessonIndex) => {
                    const lessonId = String(lesson._id);
                    const isCompleted = completedLessons.includes(lessonId);
                    const isCurrent = currentLesson?._id === lesson._id;

                    return (
                      <div
                        key={lessonId}
                        className={`flex items-center justify-between p-2 border-b cursor-pointer ${
                          isCurrent
                            ? 'bg-blue-100'
                            : isCompleted
                            ? 'bg-green-100'
                            : 'bg-white'
                        }`}
                        onClick={() => setCurrentLesson(lesson)}
                      >
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            checked={isCompleted}
                            readOnly
                          />
                          <span className="font-medium">
                            {lessonIndex + 1}. {lesson.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Video className="w-5 h-5" />
                          <span className="text-gray-500">{lesson.duration}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CoursePreviewMain;
