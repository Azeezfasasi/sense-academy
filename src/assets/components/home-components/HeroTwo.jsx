import React from 'react';
import herotwomainimg from '../../image/herotwomainimg.svg';
import { Link } from 'react-router-dom';
import herocurve from '../../image/herocurve.svg';

function HeroTwo() {
  return (
    <>
    <div className="w-full flex flex-col md:flex-col lg:flex-row justify-start md:justify-around items-center bg-[#ffffff] h-[600px] relative overflow-hidden">
        <div className="w-[100%] md:w-[90%] lg:w-[40%] flex flex-col gap-6 items-start justify-start mt-[30px] md:mt-0">
            <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
                <div
                    className="text-grey-900 text-left font-['Inter-Bold',_sans-serif] text-[28px] md:text-[40px] leading-[140%] font-bold relative w-[95%] md:w-[483px] ml-[10px] md:ml-0"
                    style={{ letterSpacing: "-0.02em" }}
                >
                    Unlock Your Potential with Byway
                </div>
                <div className="text-grey-text-light text-left font-['Inter-Regular',_sans-serif] text-base font-normal relative w-[95%] md:w-[592px] ml-[10px] md:ml-0">
                    Welcome to Byway, where learning knows no bounds. We believe that
                    education is the key to personal and professional growth, and we're here
                    to guide you on your journey to success. Whether you're a student,
                    professional, or lifelong learner, our cutting-edge Learning Management
                    System is designed to elevate your learning experience.
                </div>
            </div>
            <Link to="" className="bg-blue-600 rounded-lg p-4 flex flex-row gap-2 items-center justify-center shrink-0 relative ml-[10px] md:ml-0">
                <div className="text-white text-left font-['Inter-Medium',_sans-serif] text-base font-medium relative">
                    Start your instructor journey
                </div>
            </Link>
        </div>

        {/* Hero Rightside */}
        <div className="w-[50%] h-[526px] relative overflow-hidden border border-solid border-red-700">
            <div className="bg-primary-300 rounded-[81px] w-[404px] h-[397px] absolute left-44 top-[79px] overflow-hidden">
                <div className="bg-primary-300 rounded-[81px] w-[404px] h-[397px] absolute left-0 top-0" />
            </div>
            <img
                className="w-[341px] h-[430px] absolute left-[207.5px] top-[46px]"
                style={{ objectFit: "cover" }}
                src={herotwomainimg}
            />
            <div className="bg-white rounded-lg border-solid border-grey-border border w-[236px] h-[121px] absolute left-11 top-[322px] overflow-hidden">
                <div className="bg-primary-100 rounded-[50%] w-12 h-12 absolute left-4 top-4" />
                <img
                className="w-6 h-6 absolute left-7 top-7 overflow-visible"
                src={herotwomainimg}
                />
                <div className="text-grey-text-light text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight absolute left-[72px] top-[18px] w-[148px]">
                Number of courses sold
                </div>
                <div className="text-black text-left font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight absolute left-[72px] top-[66px]">
                100,000+
                </div>
            </div>
            <div className="bg-white rounded-lg border-solid border-grey-border border w-[186px] h-[146px] absolute left-[444.5px] top-[18px] overflow-hidden">
                <div
                className="text-black text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight absolute left-[50%] top-[50%]"
                style={{ translate: "-50% -50%" }}
                >
                87.6%
                </div>
                <div
                className="text-black text-center font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight absolute left-[50%] top-[50%] w-[165px]"
                style={{ translate: "-50% -50%" }}
                >
                Completion rate of our courses
                </div>
                <div
                className="bg-primary-200 rounded-[50%] w-[130px] h-[130px] absolute left-[50%] top-[50%]"
                style={{ translate: "-50% -50%" }}
                />
                <div
                className="bg-primary-500 rounded-[50%] w-[130px] h-[130px] absolute left-[50%] top-[50%]"
                style={{ translate: "-50% -50%" }}
                />
                <div
                className="bg-primary-600 rounded-[50%] w-3 h-3 absolute left-[50%] top-11"
                style={{ translate: "-50%" }}
                />
            </div>
            <div className="bg-white rounded-lg border-solid border-grey-border border w-[186px] h-[124px] absolute left-[46px] top-[91px] overflow-hidden">
                <div className="flex flex-row items-start justify-start absolute left-4 top-4">
                <img
                    className="rounded-[50%] shrink-0 w-10 h-10 relative"
                    style={{
                    boxShadow: "-1px 0px 2px 0px rgba(0, 0, 0, 0.12)",
                    objectFit: "cover"
                    }}
                    src="ellipse-650.png"
                />
                <img
                    className="rounded-[50%] shrink-0 w-10 h-10 relative"
                    style={{
                    margin: "0 0 0 -15px",
                    boxShadow: "-1px 0px 2px 0px rgba(0, 0, 0, 0.12)",
                    objectFit: "cover"
                    }}
                    src="ellipse-620.png"
                />
                <img
                    className="rounded-[50%] shrink-0 w-10 h-10 relative"
                    style={{
                    margin: "0 0 0 -15px",
                    boxShadow: "-1px 0px 2px 0px rgba(0, 0, 0, 0.12)",
                    objectFit: "cover"
                    }}
                    src="ellipse-640.png"
                />
                <img
                    className="rounded-[50%] shrink-0 w-10 h-10 relative"
                    style={{
                    margin: "0 0 0 -15px",
                    boxShadow: "-1px 0px 2px 0px rgba(0, 0, 0, 0.12)",
                    objectFit: "cover"
                    }}
                    src="ellipse-630.png"
                />
                <img
                    className="rounded-[50%] shrink-0 w-10 h-10 relative"
                    style={{
                    margin: "0 0 0 -15px",
                    boxShadow: "-1px 0px 2px 0px rgba(0, 0, 0, 0.12)",
                    objectFit: "cover"
                    }}
                    src="ellipse-660.png"
                />
                </div>
                <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight absolute left-4 top-[66px] w-[143px]">
                Join our community of 1200+ Students
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default HeroTwo