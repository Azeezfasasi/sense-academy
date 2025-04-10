import React, { useState } from 'react';
import filter from '../../image/filter.svg';
import FilterContents from './FilterContents';

function Filter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
    {/* Title */}
    <div className='w-[90%] flex flex-row items-start justify-start relative mx-auto my-[20px]'>
        <div className="w-full text-grey-900 text-left font-heading-1-font-family text-[22px] lg:text-[40px] leading-heading-1-line-height font-heading-1-font-weight relative">
            All Courses
        </div>
    </div>

    <div className='w-[90%] flex flex-row items-start justify-start relative mx-auto mt-[20px] mb-[10px]'>
        <div className="text-grey-900 text-left font-heading-3-font-family text-[17px] lg:text-[24px] leading-heading-3-line-height font-heading-3-font-weight relative">
            All Development Courses
        </div>

    </div>

      <div className="w-[90%] flex flex-row items-start justify-between shrink-0 relative mt-[10px] mx-auto">
        {/* Button to toggle filter */}
        <button
          onClick={toggleFilter}
          className="bg-white rounded-lg border-solid border-grey-900 border pt-1 pr-2 pb-1 pl-2 lg:pt-2.5 lg:pr-6 lg:pb-2.5 lg:pl-6 flex flex-row gap-1.5 items-center justify-center shrink-0 h-8 lg:h-12 relative"
        >
          <img
            className="shrink-0 w-4 lg:w-6 h-4 lg:h-6 relative overflow-visible"
            src={filter}
            alt="Filter"
          />
          <div className="text-grey-900 text-left font-button-text-font-family text-[12px] lg:text-[14px] leading-button-text-line-height font-button-text-font-weight relative">
            Filter
          </div>
        </button>

        {/* Sort By Section */}
        <div className="flex flex-row gap-[6px] lg:gap-[10px] items-center justify-start shrink-0 relative">
          <div className="text-blue-900 text-left font-paragraph-font-family text-[12px] lg:text-[16px] leading-paragraph-line-height font-semibold relative flex items-center justify-start">
            Sort By
          </div>
          <div className="bg-white rounded-lg border-solid border-grey-900 border flex flex-row gap-1.5 items-center justify-center shrink-0 h-8 lg:h-12 relative">
            <select
              className="text-grey-900 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight pr-2 pl-2 lg:pt-2.5 lg:pr-6 lg:pb-2.5 lg:pl-6 outline-none"
            >
              <option value="">Relevance</option>
              <option value="">Low to High</option>
              <option value="">High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      <div
        className={`fixed top-[80px] left-0 h-full bg-white shadow-lg transform ${
          isFilterOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 overflow-y-scroll z-[9999]`}
        style={{ width: '300px' }}>
        <div className="p-4">
          <h3 className="text-lg font-bold">Filters</h3>
          {/* Add your filter options here */}
          <FilterContents />
        </div>
        <button
          onClick={toggleFilter}
          className="absolute top-4 right-4 text-gray-500"
        >
          Close
        </button>
      </div>
    </>
  );
}

export default Filter;
