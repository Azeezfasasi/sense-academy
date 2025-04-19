import React, { useState, useEffect, useContext } from 'react';
import ReactPlayer from 'react-player';
import { Video } from 'lucide-react';
import { CourseContext } from '../../contextAPI/CourseContext';
import API_BASE_URL from '@/config';

function CoursePreviewMain({ courseId }) {
  const { fetchAllCourses, courses, updateLessonProgress } = useContext(CourseContext);
  const [currentLesson, setCurrentLesson] = useState(null);
  const [completedLessons, setCompletedLessons] = useState([]);
  const [expandedChapter, setExpandedChapter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const token = localStorage.getItem('token');

  // Fetch all courses and user progress on component mount
  useEffect(() => {
    const fetchData = async () => {
      await fetchAllCourses();

      // Fetch user progress for the course
      try {
        const response = await fetch(`${API_BASE_URL}/api/courses/${courseId}/progress`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const userProgress = await response.json();
        setCompletedLessons(userProgress.completedLessons || []);
        setProgress(userProgress.progressPercentage || 0);
      } catch (error) {
        console.error("Failed to fetch user progress:", error);
      }

      setLoading(false);
    };
    fetchData();
  }, [fetchAllCourses, courseId]);

  const course = courses.find((course) => course._id === courseId);
  const chapters = course?.chapters || [];

  useEffect(() => {
    if (!currentLesson && chapters.length > 0 && chapters[0].lessons.length > 0) {
      setCurrentLesson(chapters[0].lessons[0]);
      }
  }, [chapters, currentLesson]);
  

  // Debugging: Log the current lesson
  useEffect(() => {
    console.log("Current Lesson:", currentLesson);
  }, [currentLesson]);

  // Handle Next and Previous Buttons
  const handleNextLesson = () => {
    if (!currentLesson) return;

    const currentChapterIndex = chapters.findIndex((chapter) =>
      chapter.lessons.some((lesson) => lesson._id === currentLesson._id)
    );
    const currentLessonIndex = chapters[currentChapterIndex].lessons.findIndex(
      (lesson) => lesson._id === currentLesson._id
    );

    if (currentLessonIndex < chapters[currentChapterIndex].lessons.length - 1) {
      // Move to the next lesson in the same chapter
      setCurrentLesson(chapters[currentChapterIndex].lessons[currentLessonIndex + 1]);
    } else if (currentChapterIndex < chapters.length - 1) {
      // Move to the first lesson of the next chapter
      setExpandedChapter(currentChapterIndex + 1);
      setCurrentLesson(chapters[currentChapterIndex + 1].lessons[0]);
    }
  };

  const handlePreviousLesson = () => {
    if (!currentLesson) return;

    const currentChapterIndex = chapters.findIndex((chapter) =>
      chapter.lessons.some((lesson) => lesson._id === currentLesson._id)
    );
    const currentLessonIndex = chapters[currentChapterIndex].lessons.findIndex(
      (lesson) => lesson._id === currentLesson._id
    );

    if (currentLessonIndex > 0) {
      // Move to the previous lesson in the same chapter
      setCurrentLesson(chapters[currentChapterIndex].lessons[currentLessonIndex - 1]);
    } else if (currentChapterIndex > 0) {
      // Move to the last lesson of the previous chapter
      setExpandedChapter(currentChapterIndex - 1);
      const previousChapter = chapters[currentChapterIndex - 1];
      setCurrentLesson(previousChapter.lessons[previousChapter.lessons.length - 1]);
    }
  };

  // Check if Next and Previous buttons should be disabled
  const isFirstLesson = () => {
    if (!currentLesson) return true;

    const currentChapterIndex = chapters.findIndex((chapter) =>
      chapter.lessons.some((lesson) => lesson._id === currentLesson._id)
    );
    const currentLessonIndex = chapters[currentChapterIndex].lessons.findIndex(
      (lesson) => lesson._id === currentLesson._id
    );

    return currentChapterIndex === 0 && currentLessonIndex === 0;
  };

  const isLastLesson = () => {
    if (!currentLesson) return true;

    const currentChapterIndex = chapters.findIndex((chapter) =>
      chapter.lessons.some((lesson) => lesson._id === currentLesson._id)
    );
    const currentLessonIndex = chapters[currentChapterIndex].lessons.findIndex(
      (lesson) => lesson._id === currentLesson._id
    );

    return (
      currentChapterIndex === chapters.length - 1 &&
      currentLessonIndex === chapters[currentChapterIndex].lessons.length - 1
    );
  };

  if (loading) {
    return <p>Loading course data...</p>;
  }

  if (!course) {
    return <p>Course not found</p>;
  }

  return (
    <div className="w-full flex flex-col md:flex-row justify-start md:justify-center gap-7 md:gap-0 md:space-x-12 items-start rounded-2xl">
      {/* Course video preview */}
      <div className="w-full h-[400px] md:w-[60%] relative overflow-hidden rounded-[10px]">
        {currentLesson ? (
          <ReactPlayer
            key={currentLesson?._id} 
            url={currentLesson?.videoLink}
            controls
            width="100%"
            height="100%"
            className="rounded-md"
            onEnded={handleNextLesson}
            onProgress={({ played }) => {
              if (played >= 0.9 && !completedLessons.includes(currentLesson._id)) {
                // Mark the lesson as completed
                setCompletedLessons((prev) => [...prev, currentLesson._id]);
                console.log(`Lesson marked as completed: ${currentLesson.title}`);

                // Persist progress to the backend
                try {
                  updateLessonProgress(courseId, currentLesson._id);
                } catch (error) {
                  console.error("Failed to update lesson progress:", error);
                }
              }
            }}
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

        {/* Next and Previous Buttons */}
        <div className="flex justify-between w-full mt-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            onClick={handlePreviousLesson}
            disabled={isFirstLesson()}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
            onClick={handleNextLesson}
            disabled={isLastLesson()}
          >
            Next
          </button>
        </div>

        {/* Custom Accordion */}
        <div className="w-full mt-4">
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
                        onClick={() => {
                          console.log("Selected Lesson:", lesson); // Debugging log
                          setCurrentLesson(lesson);
                        }}
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
