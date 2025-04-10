import React from 'react'
import Header from '../assets/components/home-components/Header'
import Footer from '../assets/components/home-components/Footer'
import CheckoutDetailInfo from '../assets/components/course-components/CheckoutDetailInfo'
import CheckoutOrderDetails from '../assets/components/course-components/CheckoutOrderDetails';
import { Breadcrumb } from 'rsuite';
import { Link } from 'react-router-dom';

const MyBreadcrumb = ({ separator }) => (
  <Breadcrumb separator={separator}>
    <Breadcrumb.Item>
      <Link to="/" className='text-[16px] mr-2'><i className="fa-solid fa-house text-blue-700"></i></Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Link to="/app/coursecategory" className='text-[16px] mr-2 ml-2'>Courses</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Link to="/app/cart" className='text-[16px] mr-2 ml-2'>Cart</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item active className='text-[16px] ml-2'>Checkout</Breadcrumb.Item>
  </Breadcrumb>
);

function Checkout() {
  return (
    <>
    <Header />
    <div className='flex flex-col w-full pt-4 h-[50px] justify-center items-center'>
      <div className='flex flex-row items-center w-[90%] mx-auto mt-0 mb-0'>
        <MyBreadcrumb separator={<i className="fa-solid fa-chevron-right text-[10px] text-blue-700"></i>} />
      </div>
    </div>
    <form className='flex flex-col lg:flex-row justify-around w-full p-2 m-0 mx-auto pt-[10px] lg:pt-[30px]'>
      <div className='flex flex-col w-full lg:w-[70%] px-1 lg:px-4'>
        <CheckoutDetailInfo />
      </div>
      <div className='flex flex-col w-full lg:w-[30%]'>
        <CheckoutOrderDetails />
      </div>
    </form>
    <Footer />
    </>
  )
}

export default Checkout