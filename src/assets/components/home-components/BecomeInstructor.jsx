import React from 'react';
import becomeinstuctor from '../../image/becomeinstuctor.svg';
import becometwo from '../../image/becometwo.svg';
import arrowright from '../../image/arrowright.svg';
import { Link } from 'react-router-dom';

function BecomeInstructor() {
  return (
    <>
    {/* Top Section */}
    <div className="w-full flex flex-col lg:flex-row items-center justify-around shrink-0 relative mx-auto">
        <div className="flex flex-row justify-center shrink-0 w-[95%] lg:w-[50%] h-[425px] static mx-auto">
            <img
            className="w-[400px] h-[425px]"
            style={{ objectFit: "cover" }}
            src={becomeinstuctor}
            />
        </div>
        <div className="w-[90%] lg:w-[50%] md:w-fit flex flex-col gap-4 items-start justify-center shrink-0 relative mt-[30px] lg:mt-0">
            <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
            <div className="text-black text-left font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                Become an Instructor
            </div>
            <div className="text-gray-800 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-full md:w-[549px]">
                Instructors from around the world teach millions of students on Sense Academy.
                We provide the tools and skills to teach what you love.
            </div>
            </div>
            <Link to="" className="bg-grey-text-dark rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center shrink-0 h-12 relative">
                <div className="text-white text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                    Start Your Instructor Journey
                </div>
                <img
                    className="shrink-0 w-6 h-6 relative overflow-visible"
                    src={arrowright}
                />
            </Link>
        </div>
    </div>

    {/* Second Section */}
    <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-around shrink-0 relative mx-auto mt-[40px] lg:mt-0">
        <div className="flex flex-row justify-center shrink-0 w-[95%] lg:w-[50%] h-[425px] static mx-auto">
            <img
            className="w-[400px] h-[425px]"
            style={{ objectFit: "cover" }}
            src={becometwo}
            />
        </div>
        <div className="w-[90%] lg:w-[50%] md:w-fit flex flex-col gap-4 items-end self-center justify-center shrink-0 relative mt-[30px] lg:mt-0">
            <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                <div className="text-black text-left font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                    Become an Instructor
                </div>
                <div className="text-gray-800 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-full md:w-[549px]">
                    Instructors from around the world teach millions of students on Sense Academy.
                    We provide the tools and skills to teach what you love.
                </div>
                <Link to="" className="bg-grey-text-dark rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-start justify-start shrink-0 h-12 relative mt-[10px]">
                    <div className="text-white text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                        Start Your Instructor Journey
                    </div>
                    <img
                        className="shrink-0 w-6 h-6 relative overflow-visible"
                        src={arrowright}
                    />
                </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default BecomeInstructor