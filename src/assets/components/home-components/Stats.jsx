import React from 'react'

function Stats() {
  return (
    <>
    <div className="bg-grey-background pt-10 pr-20 pb-10 pl-20 flex flex-col md:flex-row items-start gap-12 md:gap-0 lg:gap-0 md:items-center flex-wrap justify-between relative">
        <div className="w-full md:w-fit flex flex-col gap-1.5 items-center justify-start shrink-0 relative">
            <div className="text-grey-900 text-left font-heading-2-font-family text-heading-2-font-size leading-heading-2-line-height font-heading-2-font-weight relative">
            25+
            </div>
            <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
            Courses by our best mentors
            </div>
        </div>
        <div
            className="hidden lg:block border-solid border-grey-border border-t-4 border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[55px] h-0 relative"
            style={{
            marginTop: "-40px",
            transformOrigin: "0 0",
            transform: "rotate(90deg) scale(1, 1)"
            }}
        />
        <div className="w-full md:w-fit flex flex-col gap-1.5 items-center justify-start shrink-0 relative">
            <div className="text-grey-900 text-left font-heading-2-font-family text-heading-2-font-size leading-heading-2-line-height font-heading-2-font-weight relative">
            3000+
            </div>
            <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
            Registered Students
            </div>
        </div>
        <div
            className="hidden lg:block border-solid border-grey-border border-t-4 border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[55px] h-0 relative"
            style={{
            marginTop: "-40px",
            transformOrigin: "0 0",
            transform: "rotate(90deg) scale(1, 1)"
            }}
        />
        <div className="w-full md:w-fit flex flex-col gap-1.5 items-center justify-start shrink-0 relative">
            <div className="text-grey-900 text-left font-heading-2-font-family text-heading-2-font-size leading-heading-2-line-height font-heading-2-font-weight relative">
            450+
            </div>
            <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
            Issued Certificates
            </div>
        </div>
        <div
            className="hidden lg:block border-solid border-grey-border border-t-4 border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[55px] h-0 relative"
            style={{
            marginTop: "-40px",
            transformOrigin: "0 0",
            transform: "rotate(90deg) scale(1, 1)"
            }}
        />
        <div className="w-full md:w-fit flex flex-col gap-1.5 items-center justify-start shrink-0 relative">
            <div className="text-grey-900 text-left font-heading-2-font-family text-heading-2-font-size leading-heading-2-line-height font-heading-2-font-weight relative">
            20+
            </div>
            <div className="text-grey-900 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
            Instructors
            </div>
        </div>
    </div>
    </>
  )
}

export default Stats