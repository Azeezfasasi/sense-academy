import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input, InputGroup } from 'rsuite';
import EyeCloseIcon from '@rsuite/icons/EyeClose';
import VisibleIcon from '@rsuite/icons/Visible';
import LockIcon from '@rsuite/icons/Lock';
import { ProfileContext } from './assets/contextAPI/ProfileContext';
import Header from './assets/components/home-components/Header';
import signupimage from './assets/image/signupimage.svg';
import arrowright from './assets/image/arrowright.svg';

function SignUp() {
  const [visible, setVisible] = useState(false);
  const { register, loading } = useContext(ProfileContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');

    if (!firstName) {
      setError("Please enter your first name.");
      return;
    }
    if (!lastName) {
        setError("Please enter your last name");
        return;
    }
    if (!email) {
      setError("Please enter your email.");
      return;
    }
     if (!phoneNumber) {
        setError("Please enter your phone number");
        return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const data = await register({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phoneNumber: phoneNumber,
      });
      alert('Registered successfully!'); 
      navigate('/app/dashboard')
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = () => {
    setVisible(!visible);
  };

    const handlePasswordChange = (value) => {
        setPassword(value);
    };

    const handleConfirmPasswordChange = (value) => {
        setConfirmPassword(value);
    };

  return (
    <>
      <Header />
      <div className="w-full h-screen lg:h-[753px] relative overflow-hidden flex flex-col lg:flex-row mt-10 lg:mt-0">
        {/* left side */}
        <div className='hidden lg:block lg:w-[45%]'>
          <img
            className="w-full h-[959px] overflow-hidden"
            style={{
              background: "linear-gradient(to left, #bfdbfe, #bfdbfe)",
              objectFit: "cover"
            }}
            src={signupimage}
            alt="Signup"
          />
        </div>

        {/* Right side */}
        <form onSubmit={handleRegister} className='w-full lg:w-[55%] h-full flex flex-col items-center justify-start lg:justify-center mt-4 lg:mt-0 relative'>
          <div className="text-grey-900 text-center font-heading-2-font-family lg:text-heading-2-font-size text-[18px] md:text-[24px] leading-heading-2-line-height font-heading-2-font-weight lg:mt-[30px] mb-6">
            Create Your Account
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}

          <div className='w-[90%] flex flex-col mx-auto gap-5'>
            {/* Full name */}
            <div className='w-full'>
              <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] md:text-[18px] leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight ">
                Full Name
              </div>
              <div className='flex flex-row justify-between'>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className='text-grey-disable-color text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[47%] border rounded-[5px] py-2 pl-2'
                  placeholder='First Name'
                />
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className='text-grey-disable-color text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[47%] border rounded-[5px] py-2 pl-2'
                  placeholder='Last Name'
                />
              </div>
            </div>
            {/* User name (Email) */}
            <div className='w-full'>
              <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] md:text-[18px] leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight ">
                Email
              </div>
              <div className='flex flex-row justify-between'>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='text-grey-disable-color text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[100%] border rounded-[5px] py-2 pl-2'
                  placeholder='Email'
                />
              </div>
            </div>
            {/* Phone Number */}
            <div className='w-full'>
              <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] md:text-[18px] leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight ">
                Phone Number
              </div>
              <div className='flex flex-row justify-between'>
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className='text-grey-disable-color text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[100%] border rounded-[5px] py-2 pl-2'
                  placeholder='080xxxxxx'
                />
              </div>
            </div>
            {/* Password */}
            <div className='w-full'>
              <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] md:text-[18px] leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight ">
                Password
              </div>
              <div className='flex flex-col md:flex-row gap-4 justify-between'>
                <InputGroup inside className='text-grey-disable-color text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[47%] border rounded-[5px] py-2 pl-2'>
                  <InputGroup.Addon>
                    <LockIcon />
                  </InputGroup.Addon>
                  <Input
                    type={visible ? 'text' : 'password'}
                    placeholder='Enter Password'
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                  <InputGroup.Button onClick={handleChange}>
                    {visible ? <VisibleIcon /> : <EyeCloseIcon />}
                  </InputGroup.Button>
                </InputGroup>

                <InputGroup inside className='text-grey-disable-color text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-[47%] border rounded-[5px] py-2 pl-2'>
                  <InputGroup.Addon>
                    <LockIcon />
                  </InputGroup.Addon>
                  <Input
                    type={visible ? 'text' : 'password'}
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    required
                  />
                  <InputGroup.Button onClick={handleChange}>
                    {visible ? <VisibleIcon /> : <EyeCloseIcon />}
                  </InputGroup.Button>
                </InputGroup>
              </div>
            </div>
          </div>
          
          {/* button */}
          <button
            type="submit"
            className="bg-grey-text-dark rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center h-12 self-start ml-[5%] mt-6 disabled:opacity-50"
            disabled={loading} // Disable during loading
          >
            <div className="text-white text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
              {loading ? 'Creating Account...' : 'Create Account'}
            </div>
            {!loading && (
              <img
                className="shrink-0 w-6 h-6 relative overflow-visible"
                src={arrowright}
                alt="Arrow Right"
              />
            )}
          </button>

          {/* Already have account */}
          <div className='flex flex-row justify-center gap-1 mt-6'>
            <p className='text-gray-500'>Already have an account?</p>
            <Link to="/login" className='text-blue-700 font-semibold' style={{ textDecoration: "none" }}>Login</Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default SignUp;
