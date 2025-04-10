import React from 'react';
import figma from '../../image/figma.svg';
import fiveratings from '../../image/fiveratings.svg';

function CartItemDetails() {
  return (
    <>
    <div className="bg-white rounded-lg border-solid border-grey-border border w-full h-fit py-2 relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-between w-[99%] ">
            <div className="w-full flex flex-col lg:flex-row gap-2 items-center justify-start relative">
                <img className="rounded w-48 h-[108px] relative"
                    src={figma}
                />
                <div className="w-full flex flex-col gap-2 items-start justify-start shrink-0 relative p-2">
                    <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                        <div className="text-[#000000] text-left font-heading-5-subheading-font-family text-[17px] lg:text-[18px] leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative flex items-center justify-start">
                            Introduction to User Experience Design
                        </div>
                        <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative flex items-center justify-start">
                            By John Doe
                        </div>
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative">
                        <div className="flex flex-row gap-1 items-center justify-start shrink-0 h-[19px] relative">
                            <div className="text-warning-300 text-left font-['Poppins-Medium',_sans-serif] text-base leading-[120%] font-medium relative">
                            4.6
                            </div>
                            <div className="flex flex-row gap-0 items-center justify-start shrink-0 h-[19px] relative">
                                <img
                                    className="shrink-0 relative overflow-visible"
                                    src={fiveratings}
                                />
                            </div>
                            <div className="text-[#64748b] text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                                (250 rating)
                            </div>
                        </div>
                        <div
                            className="border-solid border-[rgba(0,0,0,0.12)] border-t border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[13px] h-0 relative"
                        ></div>
                        <div className="text-[#020617] text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                            22 Total Hours.
                        </div>
                    </div>
                    <button className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative text-red-600 cursor-pointer">
                        <div className="text-error-600 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                            Remove
                        </div>
                    </button>
                </div>
            </div>
            <div className="text-[#000000] text-right font-['Poppins-SemiBold',_sans-serif] text-[20px] lg:text-[24px] leading-[120%] font-semibold relative">
            ₦300.00
            </div>
        </div>
    </div>

    </>
  )
}

export default CartItemDetails