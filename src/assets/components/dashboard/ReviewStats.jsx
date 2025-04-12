import React from 'react'

function ReviewStats() {
  return (
    <>
    <div className="flex flex-col gap-2.5 items-start justify-end shrink-0 relative overflow-hidden mt-[70px] md:mt-[40px] mb-[50px] md:mb-0 ">
        <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
            Reviews
        </div>
        <div className="w-full flex flex-row gap-2 flex-wrap items-start justify-start relative overflow-hidden">
            <div className="bg-[#ffffff] rounded-lg border-solid border-grey-border border shrink-0 w-[47%] lg:w-[172px] h-[100px] relative overflow-hidden">
                <div className="flex flex-col gap-1 items-start justify-start absolute left-6 top-[25px]">
                    <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    Total Reviews
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-heading-3-font-family text-heading-3-font-size leading-heading-3-line-height font-heading-3-font-weight relative">
                        1000
                    </div>
                </div>
            </div>
            </div>
            <div className="bg-[#ffffff] rounded-lg border-solid border-grey-border border shrink-0 w-[47%] lg:w-[172px] h-[100px] relative overflow-hidden">
                <div className="flex flex-col gap-1 items-start justify-start absolute left-6 top-[25px]">
                    <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    1 star reviews
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-heading-3-font-family text-heading-3-font-size leading-heading-3-line-height font-heading-3-font-weight relative">
                        100
                    </div>
                    <div className="bg-error-500 rounded pt-1 pr-2.5 pb-1 pl-2.5 flex flex-row gap-2 items-center justify-center shrink-0 relative">
                        <div className="text-error-50 text-left font-label-font-family text-label-font-size font-label-font-weight relative">
                        1.0
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#ffffff] rounded-lg border-solid border-grey-border border shrink-0 w-[47%] lg:w-[172px] h-[100px] relative overflow-hidden">
                <div className="flex flex-col gap-1 items-start justify-start absolute left-6 top-[25px]">
                    <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    2 star reviews
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative">
                        <div className="text-grey-900 text-left font-heading-3-font-family text-heading-3-font-size leading-heading-3-line-height font-heading-3-font-weight relative">
                            100
                        </div>
                        <div className="bg-warning-600 rounded pt-1 pr-2.5 pb-1 pl-2.5 flex flex-row gap-2 items-center justify-center shrink-0 relative">
                            <div className="text-error-50 text-left font-label-font-family text-label-font-size font-label-font-weight relative">
                            2.0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#ffffff] rounded-lg border-solid border-grey-border border shrink-0 w-[47%] lg:w-[172px] h-[100px] relative overflow-hidden">
                <div className="flex flex-col gap-1 items-start justify-start absolute left-6 top-[25px]">
                    <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    3 star reviews
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative">
                        <div className="text-grey-900 text-left font-heading-3-font-family text-heading-3-font-size leading-heading-3-line-height font-heading-3-font-weight relative">
                            100
                        </div>
                        <div className="bg-warning-400 rounded pt-1 pr-2.5 pb-1 pl-2.5 flex flex-row gap-2 items-center justify-center shrink-0 relative">
                            <div className="text-error-50 text-left font-label-font-family text-label-font-size font-label-font-weight relative">
                            3.0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#ffffff] rounded-lg border-solid border-grey-border border shrink-0 w-[47%] lg:w-[172px] h-[100px] relative overflow-hidden">
                <div className="flex flex-col gap-1 items-start justify-start absolute left-6 top-[25px]">
                    <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    4 star reviews
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative">
                        <div className="text-grey-900 text-left font-heading-3-font-family text-heading-3-font-size leading-heading-3-line-height font-heading-3-font-weight relative">
                            100
                        </div>
                        <div className="bg-warning-400 rounded pt-1 pr-2.5 pb-1 pl-2.5 flex flex-row gap-2 items-center justify-center shrink-0 relative">
                            <div className="text-error-50 text-left font-label-font-family text-label-font-size font-label-font-weight relative">
                            4.0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#ffffff] rounded-lg border-solid border-grey-border border shrink-0 w-[47%] lg:w-[172px] h-[100px] relative overflow-hidden">
                <div className="flex flex-col gap-1 items-start justify-start absolute left-6 top-[25px]">
                    <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    5 star reviews
                    </div>
                    <div className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative">
                        <div className="text-grey-900 text-left font-heading-3-font-family text-heading-3-font-size leading-heading-3-line-height font-heading-3-font-weight relative">
                            100
                        </div>
                        <div className="bg-warning-400 rounded pt-1 pr-2.5 pb-1 pl-2.5 flex flex-row gap-2 items-center justify-center shrink-0 relative">
                            <div className="text-error-50 text-left font-label-font-family text-label-font-size font-label-font-weight relative">
                            5.0
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    </div>

    </>
  )
}

export default ReviewStats