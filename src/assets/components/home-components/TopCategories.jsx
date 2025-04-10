import React from 'react';
import { Link } from 'react-router-dom';
import webdev from '../../image/webdev.png';
import dataanalysis from '../../image/dataanalysis.png';
import graphics from '../../image/graphics.png';
import backend from '../../image/backend.png';

function TopCategories() {
  return (
    <>
    <div className="w-[100%] flex flex-col gap-6 items-start justify-start shrink-0 relative overflow-hidden ml-auto mr-auto mt-10 mb-10">
        <div className="w-[90%] flex flex-row items-center justify-between shrink-0 relative ml-auto mr-auto">
            <div className="text-grey-900 text-left font-heading-3-font-family text-heading-3-font-size leading-heading-3-line-height font-heading-3-font-weight relative">
            Top Categories
            </div>
            <Link to="" className="rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center shrink-0 h-12 relative">
                <div className="text-primary-500 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                    See All
                </div>
            </Link>
        </div>

        {/* Category lists */}
        <div className="w-[100%] flex flex-row flex-wrap gap-[20px] items-start justify-center shrink-0 relative ml-auto mr-auto">
            <Link to="" className="w-[23%] bg-white rounded-2xl border-solid border-grey-border border pt-6 pr-[93px] pb-6 pl-[93px] flex flex-row gap-2 items-center justify-center shrink-0 relative">
                <div className="flex flex-col gap-2.5 items-center justify-center shrink-0 relative">
                    <div className="shrink-0 w-[100px] h-[100px] static">
                        <div className="bg-primary-100 rounded-[100px] w-[100px] h-[100px] flex items-center justify-center">
                            <img
                                className="w-20 h-20 overflow-visible"
                                src={webdev}
                            />
                        </div>
                    </div>
                    <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-[16px] lg:text-[20px] leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                    Web Development
                    </div>
                    <div className="text-grey-700 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative">
                    11 Courses
                    </div>
                </div>
            </Link>
            <Link to="" className="w-[23%] bg-white rounded-2xl border-solid border-grey-border border pt-6 pr-[93px] pb-6 pl-[93px] flex flex-row gap-2 items-center justify-center shrink-0 relative">
                <div className="flex flex-col gap-2.5 items-center justify-start shrink-0 relative">
                    <div className="shrink-0 w-[100px] h-[100px] static">
                        <div className="bg-primary-100 rounded-[100px] w-[100px] h-[100px] flex items-center justify-center relative">
                            <div className="w-20 h-20 ">
                                <img
                                className="w-[100%] h-[100%] overflow-visible"
                                src={dataanalysis}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-[16px] lg:text-[20px] leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                    Data Analysis
                    </div>
                    <div className="text-grey-700 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative">
                    12 Courses
                    </div>
                </div>
            </Link>
            <Link to="" className="w-[23%] bg-white rounded-2xl border-solid border-grey-border border pt-6 pr-[93px] pb-6 pl-[93px] flex flex-row gap-2 items-center justify-center shrink-0 relative">
                <div className="flex flex-col gap-2.5 items-center justify-start shrink-0 relative">
                    <div className="shrink-0 w-[100px] h-[100px] static">
                        <div className="bg-primary-100 rounded-[100px] w-[100px] h-[100px] flex items-center justify-center relative">
                            <div className="w-20 h-20 ">
                                <img
                                className="w-[100%] h-[100%] overflow-visible"
                                src={graphics}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-[16px] lg:text-[20px] leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                    Graphic Design
                    </div>
                    <div className="text-grey-700 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative">
                    12 Courses
                    </div>
                </div>
            </Link>
            <Link to="" className="w-[23%] bg-white rounded-2xl border-solid border-grey-border border pt-6 pr-[93px] pb-6 pl-[93px] flex flex-row gap-2 items-center justify-center shrink-0 relative">
                <div className="flex flex-col gap-2.5 items-center justify-start shrink-0 relative">
                    <div className="shrink-0 w-[100px] h-[100px] static">
                        <div className="bg-primary-100 rounded-[100px] w-[100px] h-[100px] flex items-center justify-center relative">
                            <div className="w-20 h-20 ">
                                <img
                                className="w-[100%] h-[100%] overflow-visible"
                                src={backend}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-[16px] lg:text-[20px] leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                    Backend Development
                    </div>
                    <div className="text-grey-700 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative">
                    12 Courses
                    </div>
                </div>
            </Link>
        </div>
    </div>

    </>
  )
}

export default TopCategories