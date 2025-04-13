import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, InputGroup } from 'rsuite';
import { FaRegUserCircle } from "react-icons/fa";
import EyeCloseIcon from '@rsuite/icons/EyeClose';
import VisibleIcon from '@rsuite/icons/Visible';
import LockIcon from '@rsuite/icons/Lock';
import { ProfileContext } from './assets/contextAPI/ProfileContext';
import Header from './assets/components/home-components/Header';
import arrowright from './assets/image/arrowright.svg';
import loginimage from './assets/image/loginimage.svg';

function Login() {
  const [visible, setVisible] = useState(false);
  const { login, loading, user } = useContext(ProfileContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }
    try {
      await login(email, password);
      navigate('/app/myaccount')
    } catch (error) {
      setError(error.message);
    }
  };

  // Redirect if user is already logged in (using useEffect)
  useEffect(() => {
    if (user) {
        navigate('/app/myaccount');
    }
}, [user, navigate]); // Add user and navigate as dependencies

  const handleChange = () => {
    setVisible(!visible);
  };

  // rsuite onChange fix
  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  return (
    <>
      <Header />
      <div className="w-full h-[80%] lg:h-[753px] relative overflow-hidden flex flex-col lg:flex-row-reverse mt-10 lg:mt-0">
        {/* left side */}
        <div className='hidden lg:block lg:w-[55%]'>
          <img
            className="w-full h-[959px] overflow-hidden"
            style={{
              background: "linear-gradient(to left, #bfdbfe, #bfdbfe)",
              objectFit: "cover"
            }}
            src={loginimage}
            alt="Login"
          />
        </div>

        {/* Right side */}
        <form onSubmit={handleLogin} className='w-full lg:w-[45%] h-full flex flex-col items-center justify-start lg:justify-center mt-6 lg:mt-0 relative'>
          <div className="text-grey-900 text-center font-heading-2-font-family lg:text-heading-2-font-size text-[18px] md:text-[24px] leading-heading-2-line-height font-heading-2-font-weight lg:mt-[30px] mb-6">
            Sign in to your Account
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <div className='w-[90%] flex flex-col mx-auto gap-5'>
            {/* Email ID */}
            <div className='w-full'>
              <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] md:text-[18px] leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight ">
                Email ID
              </div>
              <div className='flex flex-row justify-between'>
                <InputGroup className='text-grey-disable-color text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[100%] border rounded-[5px] py-2 pl-2'>
                  <InputGroup.Addon>
                    <FaRegUserCircle />
                  </InputGroup.Addon>
                  <Input
                    type='email'
                    placeholder='Email ID'
                    value={email}
                    onChange={handleEmailChange} // Use the rsuite fix
                    required

                  />
                </InputGroup>
              </div>
            </div>
            {/* Password */}
            <div className='w-full'>
              <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] md:text-[18px] leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight ">
                Password
              </div>
              <div className='flex flex-row justify-between'>
                <InputGroup inside className='text-grey-disable-color text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[100%] border rounded-[5px] py-2 pl-2'>
                  <InputGroup.Addon>
                    <LockIcon />
                  </InputGroup.Addon>
                  <Input
                    type={visible ? 'text' : 'password'}
                    value={password}
                    onChange={handlePasswordChange} // Use the rsuite fix
                    required
                  />
                  <InputGroup.Button onClick={handleChange}>
                    {visible ? <VisibleIcon /> : <EyeCloseIcon />}
                  </InputGroup.Button>
                </InputGroup>
              </div>
            </div>

            {/* Forgot password*/}
            <div className='flex flex-row justify-start gap-1 mt-0'>
              <p className='text-gray-500 text-[13px] md:text-[14px]'>Forgot Password?</p>
              <Link to="/resetpassword" className='text-blue-700 font-semibold text-[13px] md:text-[14px]' style={{ textDecoration: "none" }}>Reset</Link>
            </div>
          </div>
          
          {/* button */}
          <button
            type='submit'
            className="bg-grey-text-dark rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center h-12 self-start ml-[5%] mt-6 disabled:opacity-50"
            disabled={loading}
          >
            <div className="text-white text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
              {loading ? 'Signing In...' : 'Sign In'}
            </div>
            {!loading && (
              <img
                className="shrink-0 w-6 h-6 relative overflow-visible"
                src={arrowright}
                alt="Arrow Right"
              />
            )}
          </button>

          {/* Dont have account */}
          <div className='flex flex-row justify-center gap-1 mt-6'>
            <p className='text-gray-500'>Don't have an account?</p>
            <Link to="/signup" className='text-blue-700 font-semibold' style={{ textDecoration: "none" }}>Register</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;

