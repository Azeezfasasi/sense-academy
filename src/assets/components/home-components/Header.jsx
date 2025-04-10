import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import senselogo from '../../image/senselogo.png'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
      };
    
  return (
    <>
      <div className="w-full flex flex-row justify-between items-center bg-white  px-[15px] py-[20px] border-b-2 sticky top-0 z-[9000] overflow-x-hidden">
        {/* Logo and Branding */}
        <Link to="/" className="flex items-center justify-between">
          <img
            className="shrink-0 w-[100px] h-10 md:w-[150px] md:h-10"
            style={{ objectFit: 'contain' }}
            src={senselogo}
            alt="Logo"
          />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-2.5 lg:w-[522px] w-[50%] rounded-lg border border-gray-700 px-2 ml-[-30px] md:ml-0">
          <span className="fa fa-search"></span>
          <input
            type="search"
            className="w-full py-2 outline-none"
            placeholder="Search courses"
          />
        </div>       

        {/* Cart and Login */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="" className="text-gray-700 text-center text-sm font-medium border border-gray-700 px-1 py-2 rounded mr-[50px]">
            Teach on Sense Academy
          </Link>
          <Link to="/app/cart" className="flex items-center gap-2 mr-0">
            <span className="fa fa-shopping-cart text-[22px] text-blue-800 border p-2 rounded-full"></span>
          </Link>
          <Link to="/login" className="px-3 py-2 rounded text-sm font-medium">
          <i className="fa-regular fa-circle-user text-[24px] text-blue-800 border p-2 rounded-full"></i>
          </Link>
        </div>

        {/* Cart, acount and Hamburger Menu for Mobile */}
        <div className='lg:hidden flex flex-row gap-6 mr-[-140px]'>
          <Link to="/app/cart" className="flex items-center">
              <span className="fa fa-shopping-cart text-[22px] text-gray-800"></span>
          </Link>
          <Link to="/login" className="flex items-center gap-0 mr-0">
            <i className="fa-regular fa-circle-user text-[24px] text-gray-800"></i>
          </Link>
        </div>

        <button
            className="lg:hidden text-gray-700 text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            <span className="fa fa-bars"></span>
          </button>

        {/* Mobile Menu */}
        <div className={`flex flex-col fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${ menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <button className="absolute top-4 right-4 text-gray-700 text-2xl focus:outline-none" onClick={toggleMenu}>
                <span className="fa fa-times"></span>
            </button>
            {/* Logo and Branding */}
            <div className="flex flex-col gap-6 px-6 pt-[30px]">
                <Link to="/" className="flex items-center justify-between">
                  <img
                    className="shrink-0 w-[100px] h-10 md:w-[150px] md:h-10"
                    style={{ objectFit: 'contain' }}
                    src={senselogo}
                    alt="Logo"
                  />
                </Link>
                {/* Search Bar */}
                <div className="md:hidden flex items-center gap-2.5 w-[100%] rounded-lg border border-gray-700 px-2">
                  <span className="fa fa-search"></span>
                  <input
                    type="search"
                    className="w-full py-2 outline-none"
                    placeholder="Search courses"
                  />
                </div>  
                <Link to="/" className='text-gray-800'>Home</Link>
                <Link to="/app/coursecategory" className='text-gray-800'>All Courses</Link>
                <Link to="" className='text-gray-800'>About Us</Link>
                <Link to="" className='text-gray-800'>Contact Us</Link>
                <Link to="/app/cart" className='text-gray-800'>
                  <span className="fa fa-shopping-cart"></span> Cart
                </Link>
                <div className="flex flex-row justify-start items-center gap-4">
                    <Link to="/login" className="px-0 py-2 rounded text-sm font-medium flex flex-row items-center gap-1 text-gray-800">
                      <i className="fa-regular fa-circle-user text-[24px]"></i> My Account
                    </Link>
                </div>
                <Link to="" className="text-gray-700 text-center text-sm font-medium border border-gray-700 px-3 py-2 rounded">
                    Teach on Sense Academy
                </Link>
            </div>
        </div>
      </div>
    </>
  );
}

export default Header;
