import React from 'react';
import Header from './assets/components/home-components/Header';
import signupimage from './assets/image/signupimage.svg';
import arrowright from './assets/image/arrowright.svg';
import fb from './assets/image/fb.svg';
import google from './assets/image/google.svg';
import microsoft from './assets/image/microsoft.svg';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
    <Header />
    <div className="w-full h-[953px] relative overflow-hidden flex flex-col lg:flex-row">
        {/* left side */}
        <div className='hidden lg:block lg:w-[45%]'>
          <img
            className="w-full h-[959px] overflow-hidden"
            style={{
              background: "linear-gradient(to left, #bfdbfe, #bfdbfe)",
              objectFit: "cover"
            }}
            src={signupimage}
          />
        </div>

        {/* Right side */}
        <form className='w-full lg:w-[55%] h-full flex flex-col items-center justify-start lg:justify-center mt-4 lg:mt-0 relative'>
          <div className="text-grey-900 text-center font-heading-2-font-family lg:text-heading-2-font-size text-[24px] leading-heading-2-line-height font-heading-2-font-weight lg:mt-[30px] mb-6">
            Create Your Account
          </div>
          
          <div className='w-[90%] flex flex-col mx-auto gap-5'>
            {/* Full name */}
            <div className='w-full'>
              <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight ">
                Full Name
              </div>
              <div className='flex flex-row justify-between'>
                <input type="text" className='text-grey-disable-color text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[47%] border rounded-[5px] py-2 pl-2' placeholder='First Name'/>
                <input type="text" className='text-grey-disable-color text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[47%] border rounded-[5px] py-2 pl-2' placeholder='Last Name'/>
              </div>
            </div>
            {/* User name */}
            <div className='w-full'>
              <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight ">
                Email
              </div>
              <div className='flex flex-row justify-between'>
                <input type="email" className='text-grey-disable-color text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[100%] border rounded-[5px] py-2 pl-2' placeholder='Email'/>
              </div>
            </div>
            {/* Email ID */}
            <div className='w-full'>
              <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight ">
                Phone Number
              </div>
              <div className='flex flex-row justify-between'>
                <input type="text" className='text-grey-disable-color text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[100%] border rounded-[5px] py-2 pl-2' placeholder='080xxxxxx'/>
              </div>
            </div>
            {/* Password */}
            <div className='w-full'>
              <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight ">
                Password
              </div>
              <div className='flex flex-row justify-between'>
                <input type="password" className='text-grey-disable-color text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[47%] border rounded-[5px] py-2 pl-2' placeholder='Enter Password'/>
                <input type="password" className='text-grey-disable-color text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[47%] border rounded-[5px] py-2 pl-2' placeholder='Confirm Password'/>
              </div>
            </div>        
          </div>

            {/* button */}
          <button className="bg-grey-text-dark rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center h-12 self-start ml-[5%] mt-6 ">
            <div className="text-white text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
              Create Account
            </div>
            <img
              className="shrink-0 w-6 h-6 relative overflow-visible"
              src={arrowright}
            />
          </button>

          {/* Already have account */}
          <div className='flex flex-row justify-center gap-1 mt-6'>
            <p className='text-gray-500'>Already have an account?</p> 
            <Link to="/login" className='text-blue-700 font-semibold'>Login</Link>
          </div>

          {/* Social Logins */}
          <div className="w-[90%] flex flex-row gap-3.5 items-center justify-center relative mt-8">
            <div
              className="border-solid border-grey-disable-color border-t border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[40%] h-0 relative"
            />
            <div className="text-grey-disable-color text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative flex items-center justify-start">
              Sign up with
            </div>
            <div
              className="border-solid border-grey-disable-color border-t border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[40%] h-0 relative"
            />
          </div>

          {/* social buttons */}
          <div className='w-full flex flex-row justify-center items-start flex-wrap gap-6 mt-5'>
            {/* Google */}
            <button className="w-[27%] h-[50px] flex flex-row">
              <div className="bg-[#ffffff] rounded-lg border-solid border-major-shade border w-[100%] h-[100%] flex flex-row justify-center items-center">
                <div className="flex flex-row gap-2 items-center justify-center w-[44.55%] h-[48%]">
                  <img
                    className="shrink-0 w-6 h-6 relative"
                    style={{ objectFit: "cover" }}
                    src={fb}
                  />
                  <div className="text-[#0866ff] text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    Facebook
                  </div>
                </div>
              </div>
            </button>

            {/* Google */}
            <button className="w-[27%] h-[50px] flex flex-row">
              <div className="bg-[#ffffff] rounded-lg border-solid border-major-shade border w-[100%] h-[100%] flex flex-row justify-center items-center">
                <div className="flex flex-row gap-2 items-center justify-center w-[44.55%] h-[48%]">
                  <img
                    className="shrink-0 w-6 h-6 relative"
                    style={{ objectFit: "cover" }}
                    src={google}
                  />
                  <div className="text-[#0866ff] text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    Google
                  </div>
                </div>
              </div>
            </button>

            {/* Microsoft */}
            <button className="w-[27%] h-[50px] flex flex-row">
              <div className="bg-[#ffffff] rounded-lg border-solid border-major-shade border w-[100%] h-[100%] flex flex-row justify-center items-center">
                <div className="flex flex-row gap-2 items-center justify-center w-[44.55%] h-[48%]">
                  <img
                    className="shrink-0 w-6 h-6 relative"
                    style={{ objectFit: "cover" }}
                    src={microsoft}
                  />
                  <div className="text-[#0866ff] text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    Microsoft
                  </div>
                </div>
              </div>
            </button>
          </div>
        </form>
      </div>

    </>
  )
}

export default SignUp