import React from 'react'
import AccountHeader from '../assets/components/account-components/AccountHeader'
import AccountMenu from '../assets/components/account-components/AccountMenu'
import MyCourseTop from '../assets/components/account-components/MyCourseTop'
import AccountCourses from '../assets/components/account-components/AccountCourses'
import Footer from '../assets/components/home-components/Footer'

function MyAccount() {
  return (
    <>
    <AccountHeader />
    <main className="flex flex-row justify-around w-full p-0 m-0 mx-auto pt-[30px]">
      <aside className="w-fit border ml-0 p-0 relative -top-8">
        <AccountMenu />
      </aside>
      <section className="w-full px-4">
        <MyCourseTop />
        <AccountCourses />
      </section>
    </main>
    </>
  )
}

export default MyAccount