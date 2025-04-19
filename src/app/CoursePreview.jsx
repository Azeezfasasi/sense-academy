import React from 'react'
import AccountHeader from '../assets/components/account-components/AccountHeader'
import AccountMenu from '../assets/components/account-components/AccountMenu'
import CoursePreviewMain from '../assets/components/account-components/CoursePreviewMain'
import { useParams } from 'react-router-dom';

function CoursePreview() {
  const { courseId } = useParams(); // Get courseId from route parameters

  // Debugging: Log the courseId
  console.log('Course ID from route:', courseId);
  return (
    <>
    <AccountHeader />
    <main className="flex flex-row justify-around w-full p-0 m-0 mx-auto pt-[30px]">
      <aside className="lg:flex flex-col w-fit border ml-0 p-0 relative -top-8">
        <AccountMenu />
      </aside>
      <section className="flex flex-col items-start w-full px-4">
        <CoursePreviewMain courseId={courseId} />
      </section>
    </main>
    </>
  )
}

export default CoursePreview
