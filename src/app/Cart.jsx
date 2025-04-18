import React, {useContext} from 'react'
import Header from '../assets/components/home-components/Header'
import Footer from '../assets/components/home-components/Footer'
import CartItemDetails from '../assets/components/course-components/CartItemDetails'
import CartOrderDetails from '../assets/components/course-components/CartOrderDetails';
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
    <Breadcrumb.Item active className='text-[16px] ml-2'>Cart</Breadcrumb.Item>
  </Breadcrumb>
);

function Cart() {
  return (
    <>
    <Header />
    <div className='flex flex-col w-full pt-4 h-[50px] justify-center items-center'>
      <div className='flex flex-row items-center w-[90%] mx-auto mt-0 mb-0'>
        <MyBreadcrumb separator={<i className="fa-solid fa-chevron-right text-[10px] text-blue-700"></i>} />
      </div>
    </div>
    <div className='flex flex-col lg:flex-row justify-start lg:justify-between w-full p-2 m-0 mx-auto pt-[30px]'>
      <CartItemDetails />
    </div>
    <Footer />
    </>
  )
}

export default Cart