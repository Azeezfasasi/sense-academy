import React from 'react';
import play from '../../image/play.svg';
import { Accordion, Span } from "@chakra-ui/react"
import { Video } from 'lucide-react';
import CourseVideoPlayer from './CourseVideoPlayer';
import ReactPlayer from 'react-player';

function CoursePreviewMain() {
  const videoSrc = "https://www.w3schools.com/html/mov_bbb.mp4";
  // const videoSrc = "https://vimeo.com/1074814552/cdaf0e228c";

  return (
    <>
    <div className='w-full flex flex-col md:flex-row justify-start md:justify-center gap-7 md:gap-0 md:space-x-12 items-start rounded-2xl'>
      {/* Course video preview */}
      <div className='w-full h-[400px] md:w-[60%] relative overflow-hidden' >
        <ReactPlayer
          url={videoSrc}
          controls
          width="100%"
          height="100%"
          className="rounded-md"
        />
      </div>

      {/* Course Modules */}
      <div className='w-full md:w-[40%] gap-4 flex flex-col justify-start items-start'>
        <div className="text-blue-800 text-left font-heading-3-font-family text-[20px] md:text-[24px] leading-heading-3-line-height font-heading-3-font-weight relative flex items-center justify-start">
          Course Progress
        </div>

        <Accordion.Root collapsible defaultValue={["b"]}>
            <Accordion.Item >
              <Accordion.ItemTrigger>
                <Span flex="1">
                  <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[17px] md:text-[18px] leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative flex items-center justify-start border-b">
                    Introduction to UX Design
                  </div>
                </Span>
                <Accordion.ItemIndicator />
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                <Accordion.ItemBody>
                  <div className='flex flex-col gap-1
                  items-start justify-start w-full relative'>
                    <div className="bg-grey-background pt-2 pr-4 pb-2 pl-4 flex flex-row items-center justify-between shrink-0 relative border rounded w-full">
                      <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                        <input type="checkbox" />
                        <div className="text-grey-900 text-left font-paragraph-font-family text-[14px] md:text-[15px] leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start">
                          1.
                        </div>
                        <div className="text-grey-900 text-left font-paragraph-font-family text-[14px] md:text-[15px] leading-paragraph-line-height font-paragraph-font-weight relative w-[215px] flex items-center justify-start">
                          Intro to (UX) Design?
                        </div>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative">
                        <div className="shrink-0 w-6 h-6 relative">
                        <Video />
                        </div>
                        <div
                          className="text-grey-text-light text-left font-paragraph-font-family text-[14px] md:text-[15px] leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start"
                        >
                          4min
                        </div>
                      </div>
                    </div>
                    <div className="bg-grey-background pt-2 pr-4 pb-2 pl-4 flex flex-row items-center justify-between shrink-0 relative border rounded w-full">
                      <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                        <input type="checkbox" />
                        <div className="text-grey-900 text-left font-paragraph-font-family text-[14px] md:text-[15px] leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start">
                          2.
                        </div>
                        <div className="text-grey-900 text-left font-paragraph-font-family text-[14px] md:text-[15px] leading-paragraph-line-height font-paragraph-font-weight relative w-[215px] flex items-center justify-start">
                          What is User Experience (UX) Design?
                        </div>
                      </div>
                      <div className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative">
                        <div className="shrink-0 w-6 h-6 relative">
                        <Video />
                        </div>
                        <div
                          className="text-grey-text-light text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative flex items-center justify-start"
                        >
                          4min
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.ItemBody>
              </Accordion.ItemContent>
            </Accordion.Item>
        </Accordion.Root>
      </div>
    </div>
    </>
  )
}

export default CoursePreviewMain;
