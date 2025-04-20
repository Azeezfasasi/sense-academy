import React from 'react';
import profileimage from '../../image/profileimage.svg';
import review from '../../image/review.svg';
import graduation from '../../image/graduation.svg';
import courseicon from '../../image/courseicon.svg';

function CourseIntructorDetails({ creator, enrolledUsersCount, reviewCount }) {
  // Use default values in case creator prop is not immediately available
  const creatorFirstName = creator?.firstName || 'Instructor';
  const creatorLastName = creator?.lastName || 'Name';
  const creatorHeadline = creator?.headline || 'No headline available';
  const creatorProfileImage = creator?.profileImage || profileimage;
  const creatorBio = creator?.bio || 'No bio available.';
  const reviews = reviewCount !== undefined ? `${reviewCount} Reviews` : 'No reviews yet';
  const students = enrolledUsersCount !== undefined ? `${enrolledUsersCount} Students` : '0 Students';

  return (
    <>
    <div className="w-full flex flex-col gap-4 items-start justify-start shrink-0 relative mt-[0px]">
        <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
            <div
            className="text-primary-600 text-left font-heading-4-subheading-font-family text-[17px] md:text-[20px] leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative flex items-center justify-start"
            >
            {`${creatorFirstName} ${creatorLastName}`}
            </div>
            <div
            className="text-grey-700 text-left font-paragraph-font-family text-[14px] md:text-[16px] leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start"
            >
            {creatorHeadline}
            </div>
        </div>
        <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
            <img
            className="rounded-[50%] shrink-0 w-[120px] h-[120px] relative"
            src={creatorProfileImage}
            alt={`${creatorFirstName} ${creatorLastName}`}
            />
            <div
            className="flex flex-col gap-2 items-start justify-start shrink-0 relative"
            >
            <div
                className="flex flex-row gap-1 items-center justify-start shrink-0 relative"
            >
                <img
                className="shrink-0 w-5 h-5 md:w-6 lg:h-6 relative overflow-visible"
                src={review}
                alt="Reviews"
                />
                <div
                className="text-grey-900 text-left font-small-text-font-family text-[13px] lg:text-[14px] leading-small-text-line-height font-small-text-font-weight relative flex items-center justify-start"
                >
                {reviews}
                </div>
            </div>
            <div
                className="flex flex-row gap-1 items-center justify-start shrink-0 relative"
            >
                <img
                className="shrink-0 w-5 h-5 md:w-6 lg:h-6 relative overflow-visible"
                src={graduation}
                alt="Students"
                />
                <div
                className="text-grey-900 text-left font-small-text-font-family text-[13px] lg:text-[14px] leading-small-text-line-height font-small-text-font-weight relative flex items-center justify-start"
                >
                {students}
                </div>
            </div>
            </div>
        </div>
        <div
            className="text-grey-700 text-left font-paragraph-font-family text-[14px] lg:text-[16px] leading-paragraph-line-height font-paragraph-font-weight relative w-full flex items-center justify-start"
        >
            {creatorBio}
        </div>
    </div>
    </>
  );
}

export default CourseIntructorDetails;