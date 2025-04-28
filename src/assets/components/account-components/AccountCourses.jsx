import React, { useContext, useEffect, useState } from 'react';
import courseimage from '../../image/courseimage.svg';
import { Progress, Rate } from 'rsuite';
import { Link } from 'react-router-dom';
import { CourseContext } from '@/assets/contextAPI/CourseContext';
import axios from 'axios';
import API_BASE_URL from '@/config';
import star from '../../image/star.svg'

function AccountCourses() {
  const { fetchPurchasedCourses } = useContext(CourseContext);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [courseRatings, setCourseRatings] = useState({}); // Store average ratings for each course

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const courses = await fetchPurchasedCourses();
        setPurchasedCourses(courses);

        // Fetch ratings for each course
        const ratings = {};
        for (const course of courses) {
          const res = await axios.get(`${API_BASE_URL}/api/reviews/courses/${course._id}/reviews`);
          const reviews = res.data;

          // Calculate average rating
          const averageRating =
            reviews.length > 0
              ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
              : 0;

          ratings[course._id] = averageRating;
        }
        setCourseRatings(ratings);
      } catch (error) {
        console.error('Failed to fetch purchased courses or ratings:', error);
      }
    };

    fetchCourses();
  }, [fetchPurchasedCourses]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4 p-4">
      {purchasedCourses.length > 0 ? (
        purchasedCourses.map((course) => (
          <div
            key={course._id}
            className="bg-white rounded-2xl border border-grey-border p-4 flex flex-col gap-4 items-center justify-start"
          >
            <Link to={`/app/coursepreview/${course._id}`}>
              <img
                className="rounded-lg w-full h-[139px] object-cover"
                src={course.introImage || courseimage}
                alt={course.title}
              />
            </Link>
            <div className="flex flex-col gap-2 w-full">
              <Link
                to={`/app/coursepreview/${course._id}`}
                className="text-grey-900 font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight"
              >
                {course.title}
              </Link>
              <div className="text-grey-700 font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight">
                By {course.createdBy?.firstName} {course.createdBy?.lastName || 'Unknown Instructor'}
              </div>
              {/* Display individual course progress */}
              <Progress.Line percent={course.progressPercentage || 0} status="active" />
              <div className="flex flex-row items-end gap-2">
                <div className="overflow-hidden">
                  <img src={star} alt={star} />
                </div>
                <span className="text-grey-700 font-label-font-family text-[11px]">
                  {courseRatings[course._id]?.toFixed(1) || 0} Ratings
                </span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center text-gray-600">No purchased courses found.</div>
      )}
    </div>
  );
}

export default AccountCourses;