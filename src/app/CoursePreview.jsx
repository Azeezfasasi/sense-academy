import React from 'react'
import AccountHeader from '../assets/components/account-components/AccountHeader'
import AccountMenu from '../assets/components/account-components/AccountMenu'
import CoursePreviewMain from '../assets/components/account-components/CoursePreviewMain'

function CoursePreview() {
  return (
    <>
    <AccountHeader />
    <main className="flex flex-row justify-around w-full p-0 m-0 mx-auto pt-[30px]">
      <aside className="lg:flex flex-col w-fit border ml-0 p-0 relative -top-8">
        <AccountMenu />
      </aside>
      <section className="flex flex-col items-start w-full px-4">
        <CoursePreviewMain />
      </section>
    </main>
    </>
  )
}

export default CoursePreview
