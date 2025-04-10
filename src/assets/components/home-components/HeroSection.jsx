import React from 'react';
import heroimage1 from '../../image/heroimage1.svg';
import heroimage2 from '../../image/heroimage2.svg';
import heroimage3 from '../../image/heroimage3.svg';
import heromultipleimage from '../../image/heromultipleimage.svg';
import { Link } from 'react-router-dom';


function HeroSection() {
  return (
    <>
    <div className="w-full flex flex-col md:flex-col lg:flex-row justify-start md:justify-center items-center bg-[#ffffff] h-[400px] md:h-[600px] relative overflow-hidden">
        <div className="w-[100%] md:w-[90%] lg:w-[50%] flex flex-col gap-6 items-start justify-start mt-[30px] md:mt-0">
            <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
                <div
                    className="text-grey-900 text-left font-['Inter-Bold',_sans-serif] text-[28px] md:text-[40px] leading-[140%] font-bold relative w-[95%] md:w-[483px] ml-[10px] md:ml-0"
                    style={{ letterSpacing: "-0.02em" }}
                >
                    Unlock Your Potential with Sense Academy
                </div>
                <div className="text-grey-text-light text-left font-['Inter-Regular',_sans-serif] text-base font-normal relative w-[95%] md:w-[592px] ml-[10px] md:ml-0">
                    Welcome to Sense Academy, where learning knows no bounds. We believe that education is the key to personal and professional growth, and we're here to guide you on your journey to success. Whether you're a student,
                    professional, or lifelong learner, our cutting-edge Learning Management System is designed to elevate your learning experience.
                </div>
            </div>
            <Link to="/app/coursecategory" className="bg-blue-600 rounded-lg p-4 flex flex-row gap-2 items-center justify-center shrink-0 relative ml-[10px] md:ml-0">
                <div className="text-white text-left font-['Inter-Medium',_sans-serif] text-base font-medium relative">
                    Get Started
                </div>
            </Link>
        </div>

        {/* Hero Rightside */}
        <div className="hidden lg:flex lg:flex-row lg:justify-center w-[40%] h-[557px] overflow-hidden ml-[-30px] relative">
            <div className="bg-white rounded-lg border-solid border-grey-border border w-[167px] h-[114px] absolute left-[130px] top-[415px] overflow-hidden">
                <div className="flex flex-row items-start justify-start absolute left-3 top-3 border-none outline-none">
                    <img
                    className="shrink-0 relative"
                    style={{
                        boxShadow: "-1px 0px 2px 0px rgba(0, 0, 0, 0.12)",
                        objectFit: "cover"
                    }}
                    src={heromultipleimage}
                    />
                </div>
                <div className="text-grey-900 text-left font-label-font-family text-label-font-size font-label-font-weight absolute left-3 top-[62px] w-[143px]">
                    Join our community of 1200+ Students
                </div>
            </div>

            {/* Hero image */}
            <div className="w-[235.52px] h-[274.75px] static">
                <div className="rounded-[581.07px] w-[204.54px] h-[204.54px] absolute left-[65.72px] top-[172.78px] overflow-hidden">
                    <div className="bg-active-400 rounded-[50%] w-[204.54px] h-[204.54px] absolute left-0 top-0" />
                    <img
                    className="w-[217.35px] h-[289.08px] absolute left-0 top-[-55.78px]"
                    style={{ objectFit: "contain" }}
                    src={heroimage1}
                    />
                </div>
            </div>
            
            <div className="w-[232px] h-[273.89px] static">
                <div className="rounded-[543.38px] w-[217.35px] h-[217.35px] absolute left-[283px] top-[54.56px] overflow-hidden">
                    <div className="bg-primary-400 rounded-[50%] w-[217.35px] h-[217.35px] absolute left-0 top-0" />
                    <img
                    className="w-[217.35px] h-[289.08px] absolute left-0 bottom-[-27.17px]"
                    style={{ objectFit: "contain" }}
                    src={heroimage3}
                    />
                </div>
            </div>
            <div className="rounded-[630.68px] w-[222px] h-[222px] absolute left-[190px] top-[307px] ">
                <div className="rounded-[50%] w-[222px] h-[222px] absolute left-0 top-0">
                    <img
                        className="w-[231.64px] h-[221.09px] absolute left-[297.86px] top-[11px]"
                        style={{
                        transformOrigin: "0 0",
                        transform: "rotate(0deg) scale(-1, 1)",
                        objectFit: "contain"
                        }}
                        src={heroimage2}
                    />
                </div>
            </div>
           </div> 
    </div>
    </>
  )
}

export default HeroSection