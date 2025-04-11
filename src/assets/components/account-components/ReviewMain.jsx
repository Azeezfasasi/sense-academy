import React from 'react';
import horizontaldots from '../../image/horizontaldots.svg';
import fiveratings from '../../image/fiveratings.svg'
import { Dropdown } from 'rsuite';
import MoreIcon from '@rsuite/icons/More';

function ReviewMain() {
  return (
    <>
    {/* Top section */}
    <div className="w-[95%] text-grey-900 relative mx-auto font-bold">
        <span>
            <span className="reviews-12-span3">Reviews </span>
            <span className="reviews-12-span4">(12)</span>
        </span>
    </div>

    {/* Review Section */}
    <div className="w-full bg-white rounded-2xl border-solid border-grey-border border relative overflow-hidden px-4 py-3 m-6 mx-auto">
        
        <div className="flex flex-col items-start justify-start">
            <div className='w-full flex flex-row gap-2 items-center justify-between shrink-0 relative'>
                <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative">
                        Beginner’s Guide to Design
                    </div>
                </div>
                <div className=''>
                    <Dropdown placement="leftStart" title="" noCaret icon={<MoreIcon style={{fontWeight: "bold,", fontSize: "24px"}} />}>
                        <Dropdown.Item>Edit Review</Dropdown.Item>
                        <Dropdown.Item>Delete Review</Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    Rating:
                </div>
                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                    <img className="shrink-0 relative overflow-visible"
                    src={fiveratings}
                    />
                </div>
            </div>
            <div className="flex flex-row gap-2 items-start justify-start shrink-0 relative">
                <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    Review:
                </div>
                <div className="text-grey-700 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[90%] flex items-center justify-start">
                    I was initially apprehensive, having no prior design experience. But the
                    instructor, John Doe, did an amazing job of breaking down complex
                    concepts into easily digestible modules. The video lectures were
                    engaging, and the real-world examples really helped solidify my
                    understanding.
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default ReviewMain