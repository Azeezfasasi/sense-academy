import React from 'react';
import courseimage from '../../image/courseimage.svg';
import fiveratings from '../../image/fiveratings.svg';
import { Progress } from 'rsuite';

function AccountCourses() {
  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center gap-4 p-4">
        <div className="bg-white rounded-2xl border border-grey-border p-4 flex flex-col gap-4 items-center justify-start">
            <img
                className="rounded-lg w-full h-[139px] object-cover"
                src={courseimage}
                alt="Course image"
            />
            <div className="flex flex-col gap-2 w-full">
                <div className="text-grey-900 font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight">
                Beginner’s Guide to Design
                </div>
                <div className="text-grey-700 font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight">
                By Azeez Fasasi
                </div>
                <Progress.Line percent={30} status="active" />
                <div className="flex items-center gap-2">
                    <img src={fiveratings} alt="Ratings" />
                    <span className="text-grey-700 font-label-font-family text-[11px]">
                        120 Ratings
                    </span>
                </div>
            </div>
        </div>
        <div className="bg-white rounded-2xl border border-grey-border p-4 flex flex-col gap-4 items-center justify-start">
            <img
                className="rounded-lg w-full h-[139px] object-cover"
                src={courseimage}
                alt="Course image"
            />
            <div className="flex flex-col gap-2 w-full">
                <div className="text-grey-900 font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight">
                Beginner’s Guide to Design
                </div>
                <div className="text-grey-700 font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight">
                By Azeez Fasasi
                </div>
                <Progress.Line percent={30} status="active" />
                <div className="flex items-center gap-2">
                    <img src={fiveratings} alt="Ratings" />
                    <span className="text-grey-700 font-label-font-family text-[11px]">
                        120 Ratings
                    </span>
                </div>
            </div>
        </div>
        <div className="bg-white rounded-2xl border border-grey-border p-4 flex flex-col gap-4 items-center justify-start">
            <img
                className="rounded-lg w-full h-[139px] object-cover"
                src={courseimage}
                alt="Course image"
            />
            <div className="flex flex-col gap-2 w-full">
                <div className="text-grey-900 font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight">
                Beginner’s Guide to Design
                </div>
                <div className="text-grey-700 font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight">
                By Azeez Fasasi
                </div>
                <Progress.Line percent={30} status="active" />
                <div className="flex items-center gap-2">
                    <img src={fiveratings} alt="Ratings" />
                    <span className="text-grey-700 font-label-font-family text-[11px]">
                        120 Ratings
                    </span>
                </div>
            </div>
        </div>
        <div className="bg-white rounded-2xl border border-grey-border p-4 flex flex-col gap-4 items-center justify-start">
            <img
                className="rounded-lg w-full h-[139px] object-cover"
                src={courseimage}
                alt="Course image"
            />
            <div className="flex flex-col gap-2 w-full">
                <div className="text-grey-900 font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight">
                Beginner’s Guide to Design
                </div>
                <div className="text-grey-700 font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight">
                By Azeez Fasasi
                </div>
                <Progress.Line percent={30} status="active" />
                <div className="flex items-center gap-2">
                    <img src={fiveratings} alt="Ratings" />
                    <span className="text-grey-700 font-label-font-family text-[11px]">
                        120 Ratings
                    </span>
                </div>
            </div>
        </div>
        <div className="bg-white rounded-2xl border border-grey-border p-4 flex flex-col gap-4 items-center justify-start">
            <img
                className="rounded-lg w-full h-[139px] object-cover"
                src={courseimage}
                alt="Course image"
            />
            <div className="flex flex-col gap-2 w-full">
                <div className="text-grey-900 font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight">
                Beginner’s Guide to Design
                </div>
                <div className="text-grey-700 font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight">
                By Azeez Fasasi
                </div>
                <Progress.Line percent={30} status="active" />
                <div className="flex items-center gap-2">
                    <img src={fiveratings} alt="Ratings" />
                    <span className="text-grey-700 font-label-font-family text-[11px]">
                        120 Ratings
                    </span>
                </div>
            </div>
        </div>
    </div>
    

    </>
  )
}

export default AccountCourses