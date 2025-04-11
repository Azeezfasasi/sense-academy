import React from 'react';
import profileimage from '../../image/profileimage.svg';

function ProfileMain() {
  return (
    <>
    <form action="">
        <div className="w-full bg-white rounded-2xl border-solid border-grey-border border relative overflow-hidden mb-5">
            <div className="w-full px-2 py-4 flex flex-col gap-4 items-start justify-start">
                {/* First and last name */}
                <div className="w-full flex flex-col gap-3 md:gap-3 md:flex-row items-center justify-between shrink-0 relative px-2">
                    <div className="w-full md:w-[48%] flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
                        <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        First Name
                        </div>
                        <input type='text' placeholder='Enter First Name' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" required/>
                    </div>
                    <div className="w-full md:w-[48%] flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
                        <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        Last Name
                        </div>
                        <input type='text' placeholder='Enter Last Name' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" />
                    </div>
                </div>

                {/* Headline */}
                <div className="w-full md:w-[48%] flex flex-col gap-1.5 items-start justify-start shrink-0 relative px-2">
                    <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        Headline
                    </div>
                    <input type='text' placeholder='Enter Headline' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" />
                </div>

                {/* Description */}
                <div className="w-full md:w-[48%] flex flex-col gap-1.5 items-start justify-start shrink-0 relative px-2">
                    <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative" >
                        Description
                    </div>
                    <textarea placeholder='Enter description'  className='bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-start justify-start shrink-0 w-full h-[120px] relative'></textarea>
                </div>

                {/* Description and Language */}
                <div className="w-full md:w-[48%] flex flex-col gap-1.5 items-start justify-start shrink-0 relative px-2">
                    <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        Language
                    </div>
                    <select className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row items-center justify-between shrink-0 w-full relative">
                        <option value="">English</option>
                        <option value="">French</option>
                    </select>
                </div>
            </div>
        </div>

        {/* Image section */}
        <div className="flex flex-col gap-3 bg-white rounded-2xl border-solid border-grey-border border relative overflow-hidden px-4 py-3 mb-5">
            <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] lg:text-[18px] leading-heading-5-subheading-line-height font-thin lg:font-[600]">
                Image Preview
            </div>
            <div className="bg-grey-border rounded-lg flex flex-row items-center justify-center w-[60%] lg:w-[392.48px] h-[140px] p-4 mx-auto lg:mx-0">
                <img
                className="w-[100px] h-[100px]"
                src={profileimage}
                />
            </div>
            
            <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] lg:text-[18px] leading-heading-5-subheading-line-height font-thin lg:font-[600]">
                Add/Change Image
            </div>
            <div className='flex flex-row gap-3 items-center justify-start'>
                <div className='w-[50%]'>
                    <input type='text' placeholder='Label' className="bg-white rounded-lg border-solid border-grey-border border p-2 lg:p-4 flex flex-row gap-2 items-center justify-start w-full" />
                </div>
                <button className="w-[40%] lg:w-[20%] bg-white rounded-lg border-solid border-grey-900 border pt-1 lg:pt-3 pr-2 lg:pr-6 pb-1 lg:pb-3 pl-2 lg:pl-6 flex flex-row gap-1.5 items-center justify-center">
                    <div className="text-grey-900 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                    Upload Image
                    </div>
                </button>
            </div>
        </div>


        {/* Links section */}
        <div className="bg-white rounded-2xl border-solid border-grey-border border h-[589px] relative overflow-hidden px-6 py-2 mb-4">
            <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight">
                Links
            </div>
            <div className="flex flex-col gap-4 items-start justify-start ">
                <div className="w-full flex flex-col gap-[9px] items-start justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        Website
                    </div>
                    <input type='text' placeholder='Website' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" /> 
                </div>
                <div className="w-full flex flex-col gap-[9px] items-start justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        Facebook
                    </div>
                    <input type='text' placeholder='Facebook' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" /> 
                </div>
                <div className="w-full flex flex-col gap-[9px] items-start justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        LinkedIn
                    </div>
                    <input type='text' placeholder='LinkedIn' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" /> 
                </div>
                <div className="w-full flex flex-col gap-[9px] items-start justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        Youtube
                    </div>
                    <input type='text' placeholder='Youtube' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" /> 
                </div>
                <div className="w-full flex flex-col gap-[9px] items-start justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                        Instagram
                    </div>
                    <input type='text' placeholder='Instagram' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full relative" /> 
                </div>
            </div>
        </div>
        <div className='mb-10 mx-auto'>
            <button type='submit' className="bg-grey-900 rounded-lg pt-1 lg:pt-3 pr-2 lg:pr-6 pb-1 lg:pb-3 pl-2 lg:pl-6 flex flex-row gap-1.5 items-center justify-center w-[40%] lg:w-[20%] mt-6 mb-6 mx-auto lg:mx-0">
                <div className="text-white text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                Save Image
                </div>
            </button>
        </div>
    </form>

    </>
  )
}

export default ProfileMain