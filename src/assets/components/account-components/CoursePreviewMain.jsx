import React from 'react';
import play from '../../image/play.svg';

function CoursePreviewMain() {
  return (
    <>
    {/* Course Video Preview */}
    <div className='w-full flex flex-row justify-center space-x-12 items-start rounded-2xl'>
      <div className='w-[60%] h-[578px] relative overflow-hidden'>
          <img className="" src={play} />
      </div>

    {/* Course Modules */}
    <div className="w-[30%] bg-grey-background rounded-2xl border-solid border-grey-border border h-[811px] relative overflow-hidden">
        <div
          className="text-grey-900 text-left font-heading-3-font-family text-heading-3-font-size leading-heading-3-line-height font-heading-3-font-weight absolute left-4 top-[21px] flex items-center justify-start"
        >
          Course Completion
        </div>
        <div
          className="flex flex-col gap-0 items-start justify-start absolute left-0 top-32"
        >
          <div
            className="bg-grey-background pt-6 pr-4 pb-6 pl-4 flex flex-row items-start justify-between shrink-0 w-[400px] relative"
          >
            <div
              className="flex flex-row gap-2 items-start justify-start shrink-0 relative"
            >
              <img
                className="shrink-0 w-6 h-6 relative overflow-visible"
                src="checkbox0.svg"
              />
              <div
                className="text-grey-900 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start"
              >
                1.
              </div>
              <div
                className="text-grey-900 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[215px] flex items-center justify-start"
              >
                What is User Experience (UX) Design?
              </div>
            </div>
            <div
              className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative"
            >
              <div className="shrink-0 w-6 h-6 relative">
                <img
                  className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                  src="video-recorder0.svg"
                />
              </div>
              <div
                className="text-grey-text-light text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start"
              >
                4min
              </div>
            </div>
          </div>
          <div
            className="bg-grey-background pt-6 pr-4 pb-6 pl-4 flex flex-row items-start justify-between shrink-0 w-[400px] relative"
          >
            <div
              className="flex flex-row gap-2 items-start justify-start shrink-0 relative"
            >
              <img
                className="shrink-0 w-6 h-6 relative overflow-visible"
                src="checkbox1.svg"
              />
              <div
                className="text-grey-900 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start"
              >
                2.
              </div>
              <div
                className="text-grey-900 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[215px] flex items-center justify-start"
              >
                Historical Overview of UX Design
              </div>
            </div>
            <div
              className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative"
            >
              <div className="shrink-0 w-6 h-6 relative">
                <img
                  className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                  src="video-recorder1.svg"
                />
              </div>
              <div
                className="text-grey-text-light text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start"
              >
                4min
              </div>
            </div>
          </div>
          <div
            className="bg-grey-900 pt-6 pr-4 pb-6 pl-4 flex flex-row items-start justify-between shrink-0 w-[400px] relative"
          >
            <div
              className="flex flex-row gap-2 items-start justify-start shrink-0 relative"
            >
              <img
                className="shrink-0 w-6 h-6 relative overflow-visible"
                src="checkbox2.svg"
              />
              <div
                className="text-white text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start"
              >
                3.
              </div>
              <div
                className="text-white text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[215px] flex items-center justify-start"
              >
                Understanding User-Centered Design
              </div>
            </div>
            <div
              className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative"
            >
              <div className="shrink-0 w-6 h-6 relative">
                <img
                  className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                  src="video-recorder2.svg"
                />
              </div>
              <div
                className="text-grey-text-light text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start"
              >
                4min
              </div>
            </div>
          </div>
          <div
            className="bg-grey-background pt-6 pr-4 pb-6 pl-4 flex flex-row items-start justify-between shrink-0 w-[400px] relative"
          >
            <div
              className="flex flex-row gap-2 items-start justify-start shrink-0 relative"
            >
              <img
                className="shrink-0 w-6 h-6 relative overflow-visible"
                src="checkbox3.svg"
              />
              <div
                className="text-grey-900 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start"
              >
                4.
              </div>
              <div
                className="text-grey-900 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[215px] flex items-center justify-start"
              >
                The Role of UX Design in Digital Products
              </div>
            </div>
            <div
              className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative"
            >
              <div className="shrink-0 w-6 h-6 relative">
                <img
                  className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                  src="video-recorder3.svg"
                />
              </div>
              <div
                className="text-grey-text-light text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start"
              >
                4min
              </div>
            </div>
          </div>
          <div
            className="bg-grey-background pt-6 pr-4 pb-6 pl-4 flex flex-row items-start justify-between shrink-0 w-[400px] relative"
          >
            <div
              className="flex flex-row gap-2 items-start justify-start shrink-0 relative"
            >
              <img
                className="shrink-0 w-6 h-6 relative overflow-visible"
                src="checkbox4.svg"
              />
              <div
                className="text-grey-900 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start"
              >
                5.
              </div>
              <div
                className="text-grey-900 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[215px] flex items-center justify-start"
              >
                Introduction to UX Design Tools and Techniques
              </div>
            </div>
            <div
              className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative"
            >
              <div className="shrink-0 w-6 h-6 relative">
                <img
                  className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-visible"
                  src="video-recorder4.svg"
                />
              </div>
              <div
                className="text-grey-text-light text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start"
              >
                4min
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-grey-background border-solid border-grey-border border-b p-4 flex flex-row gap-[350px] items-center justify-start w-[400px] absolute left-0 top-[77px]"
        >
          <div
            className="flex flex-row gap-4 items-center justify-start shrink-0 relative"
          >
            <img
              className="shrink-0 w-6 h-6 relative overflow-visible"
              src="icon-chevron-up0.svg"
            />
            <div
              className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative flex items-center justify-start"
            >
              Introduction to UX Design
            </div>
          </div>
        </div>
        <div
          className="bg-grey-background border-solid border-grey-border border-b p-4 flex flex-row gap-[350px] items-center justify-start w-[400px] absolute left-0 top-[628px]"
        >
          <div
            className="flex flex-row gap-4 items-center justify-start shrink-0 relative"
          >
            <img
              className="shrink-0 w-6 h-6 relative overflow-visible"
              src="chevron-down0.svg"
            />
            <div
              className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative flex items-center justify-start"
            >
              Basics of User-Centered Design
            </div>
          </div>
        </div>
        <div
          className="bg-grey-background border-solid border-grey-border border-b p-4 flex flex-row gap-[350px] items-center justify-start w-[400px] absolute left-0 top-[689px]"
        >
          <div
            className="flex flex-row gap-4 items-center justify-start shrink-0 relative"
          >
            <img
              className="shrink-0 w-6 h-6 relative overflow-visible"
              src="chevron-down1.svg"
            />
            <div
              className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative flex items-center justify-start"
            >
              Elements of User Experience
            </div>
          </div>
        </div>
        <div
          className="bg-grey-background border-solid border-grey-border border-b p-4 flex flex-row gap-[350px] items-center justify-start w-[400px] absolute left-0 top-[750px]"
        >
          <div
            className="flex flex-row gap-4 items-center justify-start shrink-0 relative"
          >
            <img
              className="shrink-0 w-6 h-6 relative overflow-visible"
              src="chevron-down2.svg"
            />
            <div
              className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative flex items-center justify-start"
            >
              Visual Design Principles
            </div>
          </div>
        </div>
        <div
          className="border-solid border-grey-border border-t border-r-[0] border-b-[0] border-l-[0] w-[400px] h-0 absolute left-[400px] top-[909px]"
        ></div>
      </div>


    </div>
    </>
  )
}

export default CoursePreviewMain;
