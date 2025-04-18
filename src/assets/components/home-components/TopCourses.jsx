import React, { useContext } from 'react';
import ratings from '../../image/ratings.svg';
import courseimage from '../../image/courseimage.svg';
import { Link } from 'react-router-dom';
import { CourseContext } from '../../contextAPI/CourseContext';

function TopCourses() {
  const { courses } = useContext(CourseContext);

  // Get the top 5 courses
  const topCourses = courses.slice(0, 5);

  return (
    <>
      <div className="w-full flex flex-col gap-6 items-start justify-start shrink-0 relative mb-10">
        {/* Header */}
        <div className="w-[90%] flex flex-row items-center justify-between self-stretch shrink-0 relative mx-auto">
          <div className="text-grey-900 text-left font-heading-3-font-family text-heading-3-font-size leading-heading-3-line-height font-heading-3-font-weight relative">
            Top Courses
          </div>
          <Link to="/app/coursecategory" className="rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center shrink-0 h-12 relative">
            <div className="text-primary-500 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
              See All
            </div>
          </Link>
        </div>

        {/* Course List */}
        <div className="w-full flex flex-row flex-wrap gap-[20px] lg:gap-[50px] items-center justify-center relative">
          {topCourses.map((course) => (
            <div key={course._id} className="bg-white rounded-2xl border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-center shrink-0 relative shadow-lg">
              <div className="flex flex-col gap-4 items-center justify-start shrink-0 relative">
                <Link to={`/app/coursedetails/${course._id}`}>
                  <img
                    className="rounded-lg shrink-0 w-[266px] h-[139px] relative"
                    style={{ objectFit: 'cover' }}
                    src={course.introImage || courseimage}
                    alt={course.title}
                  />
                </Link>
                <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                  <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                    <div className="flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
                      <Link to={`/app/coursedetails/${course._id}`} className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative w-[258px]">
                        {course.title}
                      </Link>
                      <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        By {course.createdBy?.firstName && course.createdBy?.lastName
                          ? `${course.createdBy.firstName} ${course.createdBy.lastName}`
                          : 'Unknown Instructor'}
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                      <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                        <img
                          className="shrink-0 relative overflow-visible"
                          src={ratings}
                          alt="Ratings"
                        />
                      </div>
                      <div className="text-grey-700 text-left font-label-font-family text-label-font-size font-label-font-weight relative">
                        ({course.ratingsCount || 0} Ratings)
                      </div>
                    </div>
                    <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                      {course.duration || 'N/A'} Total Hours. {course.lectures || 'N/A'} Lectures. {course.level || 'All Levels'}
                    </div>
                  </div>
                  <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                    ₦{course.regularPrice || '0.00'}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default TopCourses;