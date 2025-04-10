import React from 'react';
import senselogo from '../../image/senselogo.png'
import { Link } from 'react-router-dom';
import heart from '../../image/heart.svg';
import bell from '../../image/bell.svg';
import cart from '../../image/cart.svg';
import profileimage from '../../image/profileimage.svg';
import HamburgerMenu from './MobileMenu';

function AccountHeader() {
  return (
    <>
    <div className="flex flex-row justify-between lg:justify-evenly items-center bg-white h-[65px] sticky top-0 z-50 border-b">

        {/* Hamburger Menu */}
        <HamburgerMenu />
        
        {/* Logo */}
        <Link to="/" className="flex flex-row items-center justify-between w-fit pl-4 lg:pl-0 relative">
            <img className="shrink-0 w-[150px] h-[40px]"
            src={senselogo}
            />
        </Link>

        {/* Search */}
        <div className="hidden rounded-lg border-solid border-grey-700 border lg:flex flex-row gap-1 items-center justify-start h-fit w-[622px] relative">
            <span className="fa fa-search ml-1"></span>
            <input type='search' placeholder='Search Courses...' className="text-grey-700 text-left font-['Inter-Medium',_sans-serif] text-xs font-medium relative w-[95%] pt-2.5 pb-2.5 pl-2.5" />
        </div>
        <Link to="" className="hidden lg:block text-grey-700 text-left font-['Inter-Medium',_sans-serif] text-sm leading-5 font-medium border p-2 rounded-md">
            Teach on Sense Academy
        </Link>

        {/* Top Right */}
        <div className="flex flex-row items-center justify-start gap-8 w-[180px] mr-[-10px] md:mr-0">
            <Link to="" className="flex flex-row items-start justify-start relative">
                <img className="shrink-0 w-6 h-6 relative overflow-visible" src={heart} />
            </Link>
            <Link to="" className="flex flex-row gap-2.5 items-start justify-start shrink-0 relative">
                <img className="shrink-0 w-6 h-6 relative overflow-visible"
                src={bell}
                />
            </Link>
            <button className="flex flex-row justify-center items-center rounded-[50%] shrink-0 w-10 h-10 relative border cursor-pointer">
                <img src={profileimage} alt="" className='' />
            </button>
        </div>        
    </div>

    </>
  )
}

export default AccountHeader