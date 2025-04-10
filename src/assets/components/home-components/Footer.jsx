import React from 'react';
import { Link } from 'react-router-dom';
import senselogo from '../../image/senselogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <>
    <div className="bg-grey-800 flex flex-col lg:flex-row items-start shrink-0 w-full h-fit py-[40px] relative overflow-hidden mt-[40px]">
        <div className="flex flex-col lg:flex-row items-start lg:justify-around w-full ml-[20px] lg:ml-0">
            {/* collumn one */}
            <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
                <Link to="/">
                    <img
                        className="shrink-0 w-full h-[70px] relative"
                        style={{ objectFit: "cover" }}
                        src={senselogo}
                    />
                </Link>
                <div className="text-grey-300 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative w-[90%] lg:w-[416px] mb-[30px] lg:mb-0">
                    Empowering learners through accessible and engaging online education.
                    <br />
                    Sense Academy is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.
                </div>
            </div>

            {/* collumn two */}
            <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative mb-[30px] lg:mb-0">
                <div className="text-grey-100 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative">
                    Get Help
                </div>
                <Link to="" className="text-grey-300 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                    Contact Us
                </Link>
                <Link to="" className="text-grey-300 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                    Latest Articles
                </Link>
                <Link to="" className="text-grey-300 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                    FAQ
                </Link>
            </div>

            {/* Collumn three */}
            <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative mb-[30px] lg:mb-0">
                <div className="text-grey-100 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative">
                    Programs
                </div>
                <Link to="" className="text-grey-300 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                    Art &amp; Design
                </Link>
                <Link to="" className="text-grey-300 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                    Business
                </Link>
                <Link to="" className="text-grey-300 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                    IT &amp; Software
                </Link>
                <Link to="" className="text-grey-300 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                    Languages
                </Link>
                <Link to="" className="text-grey-300 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                    Programming
                </Link>
            </div>

            {/* Collumn Four */}
            <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative">
            <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
                <div className="text-grey-100 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative">
                Contact Us
                </div>
                <div className="text-grey-300 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                <span className='fa fa-map-marker mr-1'></span> Ikorodu, Lagos Nigeria.
                </div>
                <div className="text-grey-300 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                <span className='fa fa-phone mr-1'></span> +(234) 08117256648
                </div>
                <div className="text-grey-300 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                <span className='fa fa-envelope mr-1'></span> info@senseacademy.com.ng
                </div>
            </div>

            {/* social icons */}
            <div className='flex flex-row gap-6 justify-between'>
                <Link to="" className='rounded-[50%] flex flex-row items-center justify-center bg-white border-black w-[40px] h-[40px] p-[0px]'>
                    <i className="fa-brands fa-facebook text-[blue] text-[25px]"></i>
                </Link>
                <Link to="" className='rounded-[50%] flex flex-row items-center justify-center bg-white border-black w-[40px] h-[40px] p-[0px]'>
                    <i className="fa-brands fa-instagram text-[black] text-[25px]"></i>
                </Link>
                <Link to="" className='rounded-[50%] flex flex-row items-center justify-center bg-white border-black w-[40px] h-[40px] p-[0px]'>
                    <i className="fa-brands fa-tiktok text-[black] text-[25px]"></i>
                </Link>
                <Link to="" className='rounded-[50%] flex flex-row items-center justify-center bg-white border-black w-[40px] h-[40px] p-[0px]'>
                    <i className="fa-brands fa-youtube text-[red] text-[25px]"></i>
                </Link>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Footer