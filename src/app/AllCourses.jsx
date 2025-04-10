import React from 'react';
import ratings from '../assets/image/ratings.svg';
import courseimage from '../assets/image/courseimage.svg';
import { Link } from 'react-router-dom';

function AllCourses() {
  return (
    <>
    <div className="w-[90%] flex flex-col gap-6 items-start justify-start shrink-0 relative mx-auto mt-[30px]">
        {/* Course Lists */}
        <div className="w-full flex flex-row flex-wrap items-center justify-center gap-[20px] lg:gap-[50px] self-stretch shrink-0 relative">
            <div className="bg-white rounded-2xl border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-center shrink-0 relative shadow-lg">
                <div className="flex flex-col gap-4 items-center justify-start shrink-0 relative">
                    <Link to="/app/coursedetails">
                        <img
                        className="rounded-lg shrink-0 w-[266px] h-[139px] relative"
                        style={{ objectFit: "cover" }}
                        src={courseimage}
                        />
                    </Link>
                    <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                        <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                            <div className="flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
                                <Link to="/app/coursedetails" className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative w-[258px]">
                                    Beginner’s Guide to Design
                                </Link>
                                <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                                    By Ronald Richards
                                </div>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                                    <img
                                    className="shrink-0 relative overflow-visible"
                                    src={ratings}
                                    />
                                </div>
                                <div className="text-grey-700 text-left font-label-font-family text-label-font-size font-label-font-weight relative">
                                    (1200 Ratings)
                                </div>
                            </div>
                            <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                            22 Total Hours. 155 Lectures. Beginner
                            </div>
                        </div>
                        <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                        ₦149.9
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-2xl border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-center shrink-0 relative shadow-lg">
                <div className="flex flex-col gap-4 items-center justify-start shrink-0 relative">
                    <Link to="/app/coursedetails">
                        <img
                        className="rounded-lg shrink-0 w-[266px] h-[139px] relative"
                        style={{ objectFit: "cover" }}
                        src={courseimage}
                        />
                    </Link>
                    <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                        <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                            <div className="flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
                                <Link to="/app/coursedetails" className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative w-[258px]">
                                    Beginner’s Guide to Design
                                </Link>
                                <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                                    By Ronald Richards
                                </div>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                                    <img
                                    className="shrink-0 relative overflow-visible"
                                    src={ratings}
                                    />
                                </div>
                                <div className="text-grey-700 text-left font-label-font-family text-label-font-size font-label-font-weight relative">
                                    (1200 Ratings)
                                </div>
                            </div>
                            <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                            22 Total Hours. 155 Lectures. Beginner
                            </div>
                        </div>
                        <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                        ₦149.9
                        </div>
                    </div>
                </div>
            </div>
            <div>
            <div className="bg-white rounded-2xl border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-center shrink-0 relative shadow-lg">
                <div className="flex flex-col gap-4 items-center justify-start shrink-0 relative">
                    <Link to="/app/coursedetails">
                        <img
                        className="rounded-lg shrink-0 w-[266px] h-[139px] relative"
                        style={{ objectFit: "cover" }}
                        src={courseimage}
                        />
                    </Link>
                    <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                        <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                            <div className="flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
                                <Link to="/app/coursedetails" className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative w-[258px]">
                                    Beginner’s Guide to Design
                                </Link>
                                <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                                    By Ronald Richards
                                </div>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                                    <img
                                    className="shrink-0 relative overflow-visible"
                                    src={ratings}
                                    />
                                </div>
                                <div className="text-grey-700 text-left font-label-font-family text-label-font-size font-label-font-weight relative">
                                    (1200 Ratings)
                                </div>
                            </div>
                            <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                            22 Total Hours. 155 Lectures. Beginner
                            </div>
                        </div>
                        <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                        ₦149.9
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="bg-white rounded-2xl border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-center shrink-0 relative shadow-lg">
                <div className="flex flex-col gap-4 items-center justify-start shrink-0 relative">
                    <Link to="/app/coursedetails">
                        <img
                        className="rounded-lg shrink-0 w-[266px] h-[139px] relative"
                        style={{ objectFit: "cover" }}
                        src={courseimage}
                        />
                    </Link>
                    <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                        <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                            <div className="flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
                                <Link to="/app/coursedetails" className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative w-[258px]">
                                    Beginner’s Guide to Design
                                </Link>
                                <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                                    By Ronald Richards
                                </div>
                            </div>
                            <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                                    <img
                                    className="shrink-0 relative overflow-visible"
                                    src={ratings}
                                    />
                                </div>
                                <div className="text-grey-700 text-left font-label-font-family text-label-font-size font-label-font-weight relative">
                                    (1200 Ratings)
                                </div>
                            </div>
                            <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                            22 Total Hours. 155 Lectures. Beginner
                            </div>
                        </div>
                        <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                        ₦149.9
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AllCourses