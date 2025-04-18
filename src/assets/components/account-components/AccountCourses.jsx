import React, { useContext, useEffect, useState } from 'react';
import courseimage from '../../image/courseimage.svg';
import { Progress } from 'rsuite';
import { Link } from 'react-router-dom';
import fiveratings from '../../image/fiveratings.svg';
import { CourseContext } from '@/assets/contextAPI/CourseContext';

function AccountCourses() {
  const { fetchPurchasedCourses } = useContext(CourseContext);
  const [purchasedCourses, setPurchasedCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courses = await fetchPurchasedCourses();
        setPurchasedCourses(courses);
      } catch (error) {
        console.error('Failed to fetch purchased courses:', error);
      }
    };

    fetchCourses();
  }, [fetchPurchasedCourses]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4 p-4">
      {purchasedCourses.length > 0 ? (
        purchasedCourses.map((course) => (
          <div key={course._id} className="bg-white rounded-2xl border border-grey-border p-4 flex flex-col gap-4 items-center justify-start">
            <Link to={`/app/coursepreview/${course._id}`}>
              <img
                className="rounded-lg w-full h-[139px] object-cover"
                src={course.introImage || courseimage}
                alt={course.title}
              />
            </Link>
            <div className="flex flex-col gap-2 w-full">
              <Link to={`/app/coursepreview/${course._id}`} className="text-grey-900 font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight">
                {course.title}
              </Link>
              <div className="text-grey-700 font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight">
                By {course.createdBy?.firstName} {course.createdBy?.lastName || 'Unknown Instructor'}
              </div>
              <Progress.Line percent={30} status="active" />
              <div className="flex items-center gap-2">
                <img src={fiveratings} alt="Ratings" />
                <span className="text-grey-700 font-label-font-family text-[11px]">
                  {course.rating || 0} Ratings
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center text-gray-600">
          No purchased courses found.
        </div>
      )}
    </div>
  );
}

export default AccountCourses;
