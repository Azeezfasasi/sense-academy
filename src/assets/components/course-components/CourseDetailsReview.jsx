import React from 'react';
import { Rate } from 'rsuite';
import fourratings from '../../image/fourratings.svg';
import threeratings from '../../image/threeratings.svg';
import tworatings from '../../image/tworatings.svg';
import oneratings from '../../image/oneratings.svg';
import fiveratings from '../../image/fiveratings.svg';
import star from '../../image/star.svg';
import profileimage from '../../image/profileimage.svg';

function CourseDetailsReview() {
  return (
    <>    
    {/* Add Review section */}
    <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-[30px] items-start justify-start shrink-0 relative overflow-x-hidden">
        {/* Rating percentages */}
        <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
            <div className="flex flex-row gap-2 justify-start shrink-0 relative">
            <div className="flex flex-row gap-[3px] items-center justify-start shrink-0 relative">
                <img
                className="shrink-0 w-5 h-5 relative overflow-visible"
                src={star}
                />
                <div className="text-grey-900 text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-[140%] font-semibold relative">
                4.6
                </div>
            </div>
            <div className="text-grey-700 text-left font-['Inter-Medium',_sans-serif] text-sm leading-5 font-medium relative w-[123px] flex items-center justify-start">
                146,951 reviews
            </div>
            </div>
            <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
            <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                <img
                    className="shrink-0 relative overflow-visible"
                    src={fiveratings}
                />
                </div>
                <div className="text-grey-700 text-left font-['Poppins-Regular',_sans-serif] text-sm leading-[120%] font-normal relative flex items-center justify-start">
                100%
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                <img
                    className="shrink-0 relative overflow-visible"
                    src={fourratings}
                />
                </div>
                <div className="text-grey-700 text-left font-['Poppins-Regular',_sans-serif] text-sm leading-[120%] font-normal relative flex items-center justify-start">
                80%
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                <img
                    className="shrink-0 relative overflow-visible"
                    src={threeratings}
                />
                </div>
                <div className="text-grey-700 text-left font-['Poppins-Regular',_sans-serif] text-sm leading-[120%] font-normal relative flex items-center justify-start">
                60%
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                <img
                    className="shrink-0 relative overflow-visible"
                    src={tworatings}
                />
                </div>
                <div className="text-grey-700 text-left font-['Poppins-Regular',_sans-serif] text-sm leading-[120%] font-normal relative flex items-center justify-start">
                40%
                </div>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                <img
                    className="shrink-0 relative overflow-visible"
                    src={oneratings}
                />
                </div>
                <div className="text-grey-700 text-left font-['Poppins-Regular',_sans-serif] text-sm leading-[120%] font-normal relative flex items-center justify-start">
                20%
                </div>
            </div>
            </div>
        </div>

        {/* Rating Review */}
        <div className="w-[100%] flex flex-col gap-4 items-start justify-start shrink-0 relative">
            <div className="flex flex-col items-start bg-white rounded-2xl border-solid border-grey-border border relative overflow-hidden p-2 w-full lg:w-[78%]">
                <div className="flex flex-row gap-3 items-center justify-start">
                    <img
                    className="rounded-[50%] shrink-0 w-[60px] h-[60px] relative"
                    style={{ objectFit: "cover" }}
                    src={profileimage}
                    />
                    <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative w-[200px] flex items-center justify-start">
                    John Doe
                    </div>
                </div>
                <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative w-full">
                    <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
                        <div className="flex flex-row gap-0 items-center justify-start shrink-0 relative">
                            <img
                                className="shrink-0 w-[19.2px] h-[19.2px] relative overflow-visible"
                                src={star}
                            />
                        </div>
                        <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative flex items-center justify-start">
                            4.6
                        </div>
                    </div>
                    <div className="text-grey-700 text-left text-[14px] leading-[150%] font-[400] relative flex items-start justify-start">
                        Reviewed on 22nd March
                    </div>
                    <div className='w-ful'>
                    I was initially apprehensive, having no prior design experience. But the instructor, John Doe, did an amazing job of breaking down complex concepts into easily digestible modules. The video lectures were
                    engaging, and the real-world examples really helped solidify my understanding.
                    </div>
                </div>
            </div>
            <button className="rounded-lg border-solid border-grey-900 border pt-1 lg:pt-2 pr-6 pb-1 lg:pb-2 pl-6 flex flex-row gap-1.5 items-center justify-center shrink-0 relative">
                <div className="text-grey-900 text-left font-button-text-font-family text-[13px] lg:text-[14px] leading-button-text-line-height font-button-text-font-weight relative">
                    View more Reviews
                </div>
            </button>
        </div>
    </div>

    {/*Add a Review  */}
    <div className='border border-grey-border rounded-2xl bg-white w-full lg:w-[40%] flex flex-col gap-4 items-start justify-start relative mx-auto px-5 py-6 mt-8'>
        <p className='text-[22px] font-bold'>Add a Review</p>
        <form className='w-full flex flex-col gap-4 items-start justify-start relative'>
            <Rate defaultValue={5} size='sm' color="yellow" />
            <input type="text" placeholder='Enter your name' className='border p-3 w-full rounded-md' required/>
            <textarea className='border border-grey-border rounded-lg w-full h-[100px] p-2 mt-0' placeholder='Write your review here...'></textarea>
            <button className='bg-blue-700 text-white px-4 py-2 rounded-md'>Submit Review</button>
        </form>
     </div>

    </>
  )
}

export default CourseDetailsReview