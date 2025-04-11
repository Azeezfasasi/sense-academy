import AccountHeader from '@/assets/components/account-components/AccountHeader'
import AccountMenu from '@/assets/components/account-components/AccountMenu'
import CourseCreationForm from '@/assets/components/account-components/CourseCreationForm'
import React from 'react'

function CreateCourse() {
  return (
    <>
    <AccountHeader />
    <main className="flex flex-row justify-around w-full p-0 m-0 mx-auto pt-[30px]">
      <aside className="w-fit border ml-0 p-0 relative -top-8">
        <AccountMenu />
      </aside>
      <section className="w-full px-4">
        <CourseCreationForm />
      </section>
    </main>
    </>
  )
}

export default CreateCourse