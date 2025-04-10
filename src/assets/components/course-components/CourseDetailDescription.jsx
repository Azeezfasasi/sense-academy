import React from 'react'

function CourseDetailDescription() {
  return (
    <>
    <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative overflow-x-hidden mt-[20px]">
        <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
            <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-[18px] lg:text-[20px] leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative flex items-center justify-start">
            Course Description
            </div>
            <div className="text-grey-700 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-full">
            This interactive e-learning course will introduce you to User Experience
            (UX) design, the art of creating products and services that are intuitive,
            enjoyable, and user-friendly. Gain a solid foundation in UX principles and
            learn to apply them in real-world scenarios through engaging modules and
            interactive exercises.
            </div>
        </div>
        <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
            <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative flex items-center justify-start">
            Certification
            </div>
            <div className="text-grey-700 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-full">
            At Sense Academy, we understand the significance of formal recognition for your
            hard work and dedication to continuous learning. Upon successful
            completion of our courses, you will earn a prestigious certification that
            not only validates your expertise but also opens doors to new
            opportunities in your chosen field.
            </div>
        </div>
    </div>

    </>
  )
}

export default CourseDetailDescription