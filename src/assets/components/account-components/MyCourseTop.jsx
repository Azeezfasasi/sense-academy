import React from 'react';
import filter from '../../image/filter.svg'

function MyCourseTop() {
  return (
    <>
    <div className="flex flex-col gap-4 items-start justify-center relative">
        <div className="text-grey-900 text-left relative">
            <span>
            <span className="courses-12-span">Courses</span>
            <span className="courses-12-span2">(12)</span>
            </span>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row items-center justify-between shrink-0 w-[96%] relative px-2">
            <div className="bg-white rounded-lg border-solid border-grey-border border pr-1 flex flex-row items-center justify-between shrink-0 w-[300px] relative">
                <input type='search' placeholder='Search...' className="pl-2 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative py-3 w-[90%]" />
                <span className="fa fa-search"></span>
            </div>
            <div className="flex flex-row gap-6 items-center justify-end shrink-0 relative">
                <div className="flex flex-row gap-[15px] items-center justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-paragraph-font-family text-[15px] lg:text-[16px] leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start">
                    Sort By
                    </div>
                    <select className="bg-white rounded-lg border-solid border-grey-900 border pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center shrink-0 relative">
                        <option value="" className="text-grey-900 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                            Relevance
                        </option>
                        <option value="" className="text-grey-900 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                            Completed
                        </option>
                    </select>
                </div>
                <div className="bg-white rounded-lg border-solid border-grey-900 border pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center shrink-0 relative">
                    <img className="shrink-0 w-6 h-6 relative overflow-visible"
                    src={filter}
                    />
                    <div className="text-grey-900 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                    Filter
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MyCourseTop