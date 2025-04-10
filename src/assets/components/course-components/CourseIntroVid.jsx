import React from 'react';
import { Link } from 'react-router-dom';
import figma from '../../image/figma.svg';

function CourseIntroVid() {
  return (
    <>
    <div className="hidden bg-white rounded-2xl shadow-md w-[90%] relative overflow-hidden lg:flex flex-col justify-start items-center mx-auto mt-[20px] pb-7">
        <img className="rounded-lg w-[100%] h-[260px] text-center"
          src={figma}
        />
        <div className="w-[90%] flex flex-col gap-6 items-start justify-start mt-4">
          <div className="flex flex-row gap-[13px] items-center justify-center shrink-0 relative">
            <div className="text-grey-900 text-left font-heading-3-font-family text-heading-3-font-size leading-heading-3-line-height font-heading-3-font-weight relative">
            ₦49.5
            </div>
            <div className="shrink-0 w-[59px] h-[29px] static">
              <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight line-through">
              ₦99.5
              </div>
            </div>
          </div>
          <div className="w-[100%] border flex flex-col gap-4 items-start justify-start shrink-0 relative">
            <Link to="/app/cart" className="bg-grey-text-dark rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center shrink-0 w-full h-12 relative cursor-pointer" style={{textDecoration: 'none'}}>
              <div className="text-white text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                Add To Cart
              </div>
            </Link>
            <Link to="/app/cart" className="rounded-lg border-solid border-grey-text-dark border pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center shrink-0 w-full h-12 relative cursor-pointer" style={{textDecoration: 'none'}}>
              <div className="text-grey-900 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                Buy Now
              </div>
            </Link>
          </div>
        </div>
        <div className="w-[90%] flex flex-col gap-2 items-start justify-start">
          <div className="text-grey-900 text-left font-paragraph-medium-font-family text-paragraph-medium-font-size leading-paragraph-medium-line-height font-semibold relative flex items-center justify-start mt-6">
            Share
          </div>
          <div className='flex flex-row gap-6 items-center justify-start'>
            <Link to="">
              <i className="fa-brands fa-whatsapp text-[35px] text-green-600"></i>
            </Link>
            <Link to="">
              <i className="fa-brands fa-facebook text-[35px] text-blue-700"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-instagram text-[35px] text-pink-700"></i>
            </Link>
            <Link>
            <i className="fa-solid fa-envelope text-[35px] text-gray-900"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseIntroVid