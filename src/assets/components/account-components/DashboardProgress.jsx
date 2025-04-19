import React, { useEffect, useState, useContext } from 'react';
import { Progress } from 'rsuite';
import { CourseContext } from '@/assets/contextAPI/CourseContext';
import { Link } from 'react-router-dom';

const style = {
  width: 160,
  display: 'inline-block',
  marginRight: 20,
  textAlign: 'center',
};

const DashboardProgress = () => {
  const { fetchPurchasedCourses } = useContext(CourseContext);
  const [topCourses, setTopCourses] = useState([]);

  useEffect(() => {
    const fetchTopCourses = async () => {
      try {
        const courses = await fetchPurchasedCourses();
        // Sort courses by progressPercentage in descending order and take the top 3
        const sortedCourses = courses
          .sort((a, b) => b.progressPercentage - a.progressPercentage)
          .slice(0, 4);
        setTopCourses(sortedCourses);
      } catch (error) {
        console.error('Failed to fetch top courses:', error);
      }
    };

    fetchTopCourses();
  }, [fetchPurchasedCourses]);

  return (
    <div className="dashboard-container p-[20px] bg-[#f9f9f9] rounded-[10px] shadow-md mb-10">
      <p className='font-bold text-[18px] mb-2'>Take a step closer to Mastery!</p>
      <div className="flex flex-col lg:flex-row items-center gap-4">
        {topCourses.map((course) => (
          <div key={course._id} style={style}>
            <Link to={`/app/coursepreview/${course._id}`} className='no-underline hover:no-underline cursor-pointer'>
            <p>{course.title}</p>
            <Progress.Circle
              percent={course.progressPercentage || 0}
              strokeColor="#2563eb"
            />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardProgress;