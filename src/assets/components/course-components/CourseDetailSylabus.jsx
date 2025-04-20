import React, { useEffect, useState } from 'react';
import { Accordion, Stack } from 'rsuite';
import axios from 'axios';
import API_BASE_URL from '../../../config';

const Header = (props) => {
  const { title, lessonCount, ...rest } = props;
  return (
    <Stack {...rest} spacing={10}>
      <Stack spacing={2} direction="column" alignItems="flex-start">
        <div>{title}</div>
        <div style={{ color: 'var(--rs-text-secondary)', fontSize: 12 }}>{lessonCount}</div>
      </Stack>
    </Stack>
  );
};

const CourseDetailSylabus = ({ courseId }) => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/courses/${courseId}`);
        const course = response.data;
  
        // Filter chapters to include only those with lessons
        const filteredChapters = course.chapters.filter((chapter) => chapter.lessons && chapter.lessons.length > 0);
        setChapters(filteredChapters);
      } catch (error) {
        console.error('Failed to fetch course details:', error);
      }
    };
  
    if (courseId) {
      fetchCourseDetails();
    } else {
      console.error('Course ID is undefined');
    }
  }, [courseId]);

  return (
    <Accordion bordered defaultActiveKey={1}>
      {chapters.map((chapter, index) => (
        <Accordion.Panel
          key={chapter._id}
          header={
            <Header
              title={chapter.title}
              lessonCount={`${chapter.lessons.length} Lessons`}
            />
          }
          eventKey={index + 1}
        >
          <ul>
            {chapter.lessons.map((lesson) => (
              <li key={lesson._id} className="mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-[30px] rounded-[3px] px-2">
                    <i className="fa-solid fa-file rounded"></i>
                  </div>
                  <div className="w-full flex flex-row gap-2 items-center justify-between">
                    <p className="text-[14px] font-normal">{lesson.title}</p>
                    <span>{lesson.duration}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Accordion.Panel>
      ))}
    </Accordion>
  );
};

export default CourseDetailSylabus;