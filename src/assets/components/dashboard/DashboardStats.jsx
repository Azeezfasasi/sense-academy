import React, {useState, useContext} from 'react';
import statsIcon from '../../image/statsIcon.svg';
import CourseTimeSalesChart from './CourseTimeSalesChart';
import { ProfileContext } from '@/assets/contextAPI/ProfileContext';

function DashboardStats() {
    const { user, adminCount, instructorCount, studentCount } = useContext(ProfileContext);

  return (
    <>
    {user?.role === "Admin" && (
    <div className='flex flex-col lg:flex-row justify-start items-start gap-4'>
        {/* Left side */}
        <div className='w-full lg:w-[40%] flex flex-col gap-6 overflow-hidden'>
            {/*  */}
            <div className="bg-white rounded-lg border-solid border-grey-border border pt-4 pr-10 pb-4 pl-10 flex flex-col gap-2.5 items-start justify-center flex-1 relative" style={{ boxShadow: "0px 0px 8px 0px rgba(59, 130, 246, 0.12)" }}>
                <div className="flex flex-row gap-4 items-center justify-start shrink-0 w-full lg:w-[40%] relative">
                    <img
                    className="shrink-0 w-12 h-12 relative overflow-visible"
                    src={statsIcon}
                    />
                    <div className="flex flex-row gap-4 items-start justify-start shrink-0 relative">
                    <div className="flex flex-col gap-[3px] items-start justify-center shrink-0 relative">
                        <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
                        <div className="text-grey-900 text-left font-heading-3-font-family text-heading-3-font-size leading-heading-3-line-height font-heading-3-font-weight relative">
                            {studentCount}
                        </div>
                        </div>
                        <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        Total Numbers of Students
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="bg-white rounded-lg border-solid border-grey-border border pt-4 pr-10 pb-4 pl-10 flex flex-col gap-2.5 items-start justify-center flex-1 relative" style={{ boxShadow: "0px 0px 8px 0px rgba(59, 130, 246, 0.12)" }}>
                <div className="flex flex-row gap-4 items-center justify-start shrink-0 w-full lg:w-[40%] relative">
                    <img
                    className="shrink-0 w-12 h-12 relative overflow-visible"
                    src={statsIcon}
                    />
                    <div className="flex flex-row gap-4 items-start justify-start shrink-0 relative">
                    <div className="flex flex-col gap-[3px] items-start justify-center shrink-0 relative">
                        <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
                        <div className="text-grey-900 text-left font-heading-3-font-family text-heading-3-font-size leading-heading-3-line-height font-heading-3-font-weight relative">
                            {instructorCount}
                        </div>
                        </div>
                        <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                            Total Number of Instructors
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            {/*  */}
            <div className="bg-white rounded-lg border-solid border-grey-border border pt-4 pr-10 pb-4 pl-10 flex flex-col gap-2.5 items-start justify-center flex-1 relative" style={{ boxShadow: "0px 0px 8px 0px rgba(59, 130, 246, 0.12)" }}>
                <div className="flex flex-row gap-4 items-center justify-start shrink-0 w-full lg:w-[40%] relative">
                    <img
                    className="shrink-0 w-12 h-12 relative overflow-visible"
                    src={statsIcon}
                    />
                    <div className="flex flex-row gap-4 items-start justify-start shrink-0 relative">
                    <div className="flex flex-col gap-[3px] items-start justify-center shrink-0 relative">
                        <div className="flex flex-row gap-4 items-center justify-start shrink-0 relative">
                        <div className="text-grey-900 text-left font-heading-3-font-family text-heading-3-font-size leading-heading-3-line-height font-heading-3-font-weight relative">
                            {adminCount}
                        </div>
                        </div>
                        <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        Totla numbers of Admin
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Right side */}
        <div className='w-full lg:w-[60%] border'>
            <CourseTimeSalesChart />
        </div>
    </div>
    )}

    

    </>
  )
}

export default DashboardStats