import React from 'react'

function ProfileMain() {
  return (
    <>
    <div className="bg-white rounded-2xl border-solid border-grey-border border h-[489px] relative overflow-hidden">
        <div className="flex flex-col gap-4 items-start justify-start absolute left-6 top-6">
            <div className="flex flex-row items-center justify-between shrink-0 w-[902px] relative">
                <div className="flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    First Name
                    </div>
                    <input type='text' placeholder='Enter First Name' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[420px] relative" />
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    Last Name
                    </div>
                    <input type='text' placeholder='Enter Last Name' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[420px] relative" />
                </div>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
                <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    Headline
                </div>
                <input type='text' placeholder='Enter Headline' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[420px] relative" />
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
                <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative" >
                    Description
                </div>
                <textarea placeholder='Enter description'  className='bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-start justify-start shrink-0 w-[902px] h-[120px] relative'></textarea>
            </div>
            <div className="flex flex-col gap-1.5 items-start justify-start shrink-0 relative">
                <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    Language
                </div>
                <select className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row items-center justify-between shrink-0 w-[420px] relative">
                    <option value="">English</option>
                    <option value="">French</option>
                </select>
            </div>
        </div>
    </div>

    {/* Image section */}
    <div className="bg-white rounded-2xl border-solid border-grey-border border h-[528px] relative overflow-hidden">
        <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight absolute left-6 top-[355px]">
            Add/Change Image
        </div>
        <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight absolute left-6 top-6">
            Image Preview
        </div>
        <div className="bg-white rounded-2xl border-solid border-grey-border border-[0.62px] w-[425px] h-[255px] absolute left-6 top-[59px]"
        ></div>
        <div className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start w-[599px] absolute left-6 top-[390px]">
            <div className="text-grey-disable-color text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[531px]">
            Path
            </div>
        </div>
        <div className="bg-grey-border rounded-lg p-[8.92px] flex flex-row gap-[11.15px] items-center justify-center w-[392.48px] h-[223px] absolute left-10 top-[75px]">
            <img className="shrink-0 w-[44.6px] h-[44.6px] relative overflow-visible"
            src="image1.svg"
            />
        </div>
        <div className="bg-white rounded-lg border-solid border-grey-900 border pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center h-[58px] absolute left-[639px] top-[390px]">
            <div className="text-grey-900 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
            Upload Image
            </div>
        </div>
        <div className="bg-grey-900 rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center h-12 absolute left-6 top-[464px]">
            <div className="text-white text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
            Save Image
            </div>
        </div>
    </div>

    {/* Links section */}
    <div className="bg-white rounded-2xl border-solid border-grey-border border h-[589px] relative overflow-hidden px-6 py-2">
        <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight">
            Links
        </div>
        <div className="flex flex-col gap-4 items-start justify-start ">
            <div className="flex flex-col gap-[9px] items-start justify-start shrink-0 relative">
                <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    Website
                </div>
                <input type='text' placeholder='Website' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[887px] relative" /> 
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-start shrink-0 relative">
                <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    Facebook
                </div>
                <input type='text' placeholder='Facebook' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[887px] relative" /> 
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-start shrink-0 relative">
                <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    LinkedIn
                </div>
                <input type='text' placeholder='LinkedIn' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[887px] relative" /> 
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-start shrink-0 relative">
                <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    Youtube
                </div>
                <input type='text' placeholder='Youtube' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[887px] relative" /> 
            </div>
            <div className="flex flex-col gap-[9px] items-start justify-start shrink-0 relative">
                <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    Instagram
                </div>
                <input type='text' placeholder='Instagram' className="bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-[887px] relative" /> 
            </div>
        </div>
    </div>

    </>
  )
}

export default ProfileMain