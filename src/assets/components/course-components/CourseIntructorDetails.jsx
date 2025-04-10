import React from 'react';
import profileimage from '../../image/profileimage.svg';
import review from '../../image/review.svg';
import graduation from '../../image/graduation.svg';
import courseicon from '../../image/courseicon.svg';

function CourseIntructorDetails() {
  return (
    <>
    <div className="w-full flex flex-col gap-4 items-start justify-start shrink-0 relative mt-[0px]">
        <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
            <div
            className="text-primary-600 text-left font-heading-4-subheading-font-family text-[17px] md:text-[20px] leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative flex items-center justify-start"
            >
            Ronald Richards
            </div>
            <div
            className="text-grey-700 text-left font-paragraph-font-family text-[14px] md:text-[16px] leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start"
            >
            UI/UX Designer
            </div>
        </div>
        <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
            <img
            className="rounded-[50%] shrink-0 w-[120px] h-[120px] relative"
            src={profileimage || profileimage}
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
                />
                <div
                className="text-grey-900 text-left font-small-text-font-family text-[13px] lg:text-[14px] leading-small-text-line-height font-small-text-font-weight relative flex items-center justify-start"
                >
                40,445 Reviews
                </div>
            </div>
            <div
                className="flex flex-row gap-1 items-center justify-start shrink-0 relative"
            >
                <img
                className="shrink-0 w-5 h-5 md:w-6 lg:h-6 relative overflow-visible"
                src={graduation}
                />
                <div
                className="text-grey-900 text-left font-small-text-font-family text-[13px] lg:text-[14px] leading-small-text-line-height font-small-text-font-weight relative flex items-center justify-start"
                >
                500 Students
                </div>
            </div>
            <div
                className="flex flex-row gap-1 items-center justify-start shrink-0 relative"
            >
                <img
                className="shrink-0 w-5 h-5 md:w-6 lg:h-6 relative overflow-visible"
                src={courseicon}
                />
                <div
                className="text-grey-900 text-left font-small-text-font-family text-[13px] lg:text-[14px] leading-small-text-line-height font-small-text-font-weight relative flex items-center justify-start"
                >
                15 Courses
                </div>
            </div>
            </div>
        </div>
        <div
            className="text-grey-700 text-left font-paragraph-font-family text-[14px] lg:text-[16px] leading-paragraph-line-height font-paragraph-font-weight relative w-full flex items-center justify-start"
        >
            With over a decade of industry experience, Ronald brings a wealth of
            practical knowledge to the classNameroom. He has played a pivotal role in
            designing user-centric interfaces for renowned tech companies, ensuring
            seamless and engaging user experiences.
        </div>
    </div>
    </>
  )
}

export default CourseIntructorDetails