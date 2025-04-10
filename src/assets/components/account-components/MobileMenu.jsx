import React, { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  Menu, X, ChevronDown, ChevronUp, Home, BookOpen, Settings, User, LogOut, LibraryBig, BookOpenCheck, Mail, Award, Star, UserPen,
} from 'lucide-react';
import profileimage from '../../image/profileimage.svg';
import share from '../../image/share.svg';
import senselogo from '../../image/senselogo.png'

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [submenuOpen, setSubmenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsOpen(!isOpen)
  const toggleSubmenu = () => setSubmenuOpen(!submenuOpen)

  const linkClasses = (isActive) =>
    `flex items-center space-x-2 p-2 rounded-md border text-gray-800 ${
      isActive ? 'bg-blue-100 text-blue-600 font-medium' : 'hover:text-blue-600'
    }`

  return (
    <>
      <button onClick={toggleMenu} className="lg:hidden p-2 text-gray-800 z-50">
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      <div className={`fixed top-0 left-0 pt-[70px] h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="rounded-2xl pt-6 pb-0 flex flex-col gap-6 items-center justify-start relative overflow-x-hidden border w-[90%] mx-auto">
            <div className="flex flex-col gap-4 items-center justify-start shrink-0 relative">
                <img className="rounded-[50%] shrink-0 w-[100px] h-[100px] relative"
                        src={profileimage}
                        />
                <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-[18px] leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative flex items-center justify-start">
                John Doe
                </div>
                <button className="bg-white rounded-lg border-solid border-grey-border border pt-1 pr-6 pb-1 pl-6 flex flex-row gap-1.5 items-center justify-center mt-[-15px] relative">
                    <div className="text-grey-900 text-left font-button-text-font-family text-[12px] font-button-text-font-weight relative">
                        Share Profile
                    </div>
                    <img className="shrink-0 w-6 h-6 relative overflow-visible"
                        src={share}
                    />
                </button>
            </div>
            <div className="border-solid border-grey-border border-t border-r-[0] border-b-[0] border-l-[0] w-[274px] h-0 relative mt-[-10px]"
            ></div>
        </div>

        {/* Menu Links */}
        <div className="flex flex-col space-y-2 p-5 text-gray-700">
          <NavLink to="/app/myaccount" className={({ isActive }) => linkClasses(isActive)}>
            <LibraryBig size={20} />
            <span>My Courses</span>
          </NavLink>

          <NavLink to="/app/assessment" className={({ isActive }) => linkClasses(isActive)}>
            <BookOpenCheck size={20} />
            <span>Assessment</span>
          </NavLink>

          <NavLink to="/app/message" className={({ isActive }) => linkClasses(isActive)}>
            <Mail size={20} />
            <span>Message</span>
          </NavLink>

          <NavLink to="/app/certificates" className={({ isActive }) => linkClasses(isActive)}>
            <Award size={20} />
            <span>Certificates</span>
          </NavLink>

          <NavLink to="/app/myreviews" className={({ isActive }) => linkClasses(isActive)}>
            <Star size={20} />
            <span>My Reviews</span>
          </NavLink>

          {/* Menu with submenu */}
          <div>
            <button
              onClick={toggleSubmenu}
              className={`w-full flex justify-between items-center p-2 rounded-md ${
                location.pathname.startsWith('/courses') ? 'bg-blue-100 text-blue-600 font-medium' : ''
              }`}
            >
              <div className="flex items-center space-x-2">
                <Settings size={20} />
                <span>Settings</span>
              </div>
              {submenuOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {submenuOpen && (
              <div className="ml-6 mt-2 flex flex-col space-y-1 text-sm text-gray-600">
                <NavLink
                  to="/app/profile"
                  className={({ isActive }) =>
                    `flex flex-row gap-2 rounded-md px-2 py-1 text-gray-700 ${
                      isActive ? 'bg-blue-50 text-blue-600 font-medium' : 'hover:text-blue-600'
                    }`
                  }
                >
                  <UserPen size={20} />
                  Profile
                </NavLink>
              </div>
            )}
          </div>
          <NavLink to="/" className={({ isActive }) => linkClasses(isActive)} style={{color: "red"}}>
            <LogOut size={20} />
            <span>Logout</span>
          </NavLink>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default MobileMenu
