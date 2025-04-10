import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import fiveratings from '../../image/fiveratings.svg';
import fourratings from '../../image/fourratings.svg';
import threeratings from '../../image/threeratings.svg';
import tworatings from '../../image/tworatings.svg';
import oneratings from '../../image/oneratings.svg';


function FilterContents() {
    const [toggleFilterDrop, settoggleFilterDrop] = useState(null);

    const toggleFilter = (menuIndex) => {
        settoggleFilterDrop(toggleFilterDrop === menuIndex ? null : menuIndex);
    };

  return (
    <>
    <div className="w-full flex flex-col gap-0 items-start justify-start shrink-0 relative">
        {/* Price */}
        <div onClick={() => toggleFilter(1)} className="bg-white border-solid border-grey-border border-b p-4 flex flex-row items-center justify-between shrink-0 w-[100%] relative cursor-pointer">
            <div className="text-grey-900 text-left font-paragraph-medium-font-family text-paragraph-medium-font-size leading-paragraph-medium-line-height font-paragraph-medium-font-weight relative flex items-center justify-start">
            Price
            </div>
            <span>{toggleFilterDrop === 1 ? "-" : "+"}</span>
        </div>

        {/* Price Drop Panel */}
        {toggleFilterDrop === 1 && (
            <ul className="submenu bg-gray-50 flex flex-row justify-between items-center py-6">
              <input type="price" placeholder='Min Price' className='w-[45%] border border-solid border-gray-500 rounded-[5px]' />
              <input type="price" placeholder='Max Price' className='w-[45%] border border-solid border-gray-500 rounded-[5px]' />
            </ul>
          )}

          {/* Category */}
        <div onClick={() => toggleFilter(2)} className="bg-white border-solid border-grey-border border-b p-4 flex flex-row items-center justify-between shrink-0 w-[100%] relative cursor-pointer">
            <div className="text-grey-900 text-left font-paragraph-medium-font-family text-paragraph-medium-font-size leading-paragraph-medium-line-height font-paragraph-medium-font-weight relative flex items-center justify-start">
            Categories
            </div>
            <span>{toggleFilterDrop === 2 ? "-" : "+"}</span>
        </div>

        {/* Category Drop Panel */}
        {toggleFilterDrop === 2 && (
            <ul className="submenu bg-gray-50 flex flex-col justify-center items-start gap-2 py-6">
                <Link to="">Web Development</Link>
                <Link to="">Data Analysis</Link>
            </ul>
          )}
        
        {/* Star Rating */}
        <div onClick={() => toggleFilter(3)} className="bg-white border-solid border-grey-border border-b p-4 flex flex-row items-center justify-between shrink-0 w-[100%] relative cursor-pointer">
            <div className="text-grey-900 text-left font-paragraph-medium-font-family text-paragraph-medium-font-size leading-paragraph-medium-line-height font-paragraph-medium-font-weight relative flex items-center justify-start">
            Rating
            </div>
            <span>{toggleFilterDrop === 3 ? "-" : "+"}</span>
        </div>

        {/* Star Rating Drop Panel */}
        {toggleFilterDrop === 3 && (
            <ul className="submenu bg-gray-50 flex flex-col justify-center items-start gap-2 py-6">
                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative cursor-pointer">
                <img
                    className="shrink-0 w-full h-5 relative overflow-visible"
                    src={fiveratings}
                />
                </div>
                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative cursor-pointer">
                    <img
                        className="shrink-0 w-full h-5 relative overflow-visible"
                        src={fourratings}
                    />
                </div>
                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative cursor-pointer">
                    <img
                        className="shrink-0 w-full h-5 relative overflow-visible"
                        src={threeratings}
                    />
                </div>
                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative cursor-pointer">
                    <img
                        className="shrink-0 w-full h-5 relative overflow-visible"
                        src={tworatings}
                    />
                </div>
                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative cursor-pointer">
                    <img
                        className="shrink-0 w-full h-5 relative overflow-visible"
                        src={oneratings}
                    />
                </div>
            </ul>
          )}

         {/*  */}
         <button className="rounded-lg pt-2.5 pb-2.5 flex flex-row gap-1.5 items-center justify-start shrink-0 h-12 relative">
            <div className="text-primary-600 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                Aply Filter
            </div>
        </button>
    </div>

    </>
  )
}

export default FilterContents