import React from 'react'
import AccountHeader from '../assets/components/account-components/AccountHeader'
import AccountMenu from '../assets/components/account-components/AccountMenu'

function MyCourses() {
  return (
    <>
    <AccountHeader />
    <div className='flex flex-row justify-around w-full p-2 m-0 mx-auto pt-[30px]'>
      <div className='flex flex-col w-[25%] px-4'>
        <AccountMenu />
      </div>
      <div className='flex flex-col w-[75%]'>
        
      </div>
    </div>
    </>
  )
}

export default MyCourses;