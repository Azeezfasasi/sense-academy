import React from 'react';
import Header from '../assets/components/home-components/Header';
import Filter from '../assets/components/course-components/Filter';
import TopCourses from '../assets/components/home-components/TopCourses';
import AllCourses from './AllCourses';
import Footer from '../assets/components/home-components/Footer';
import { Breadcrumb } from 'rsuite';
import { Link } from 'react-router-dom';

const MyBreadcrumb = ({ separator }) => (
  <Breadcrumb separator={separator}>
    <Breadcrumb.Item>
      <Link to="/" className='text-[16px] mr-2'><i className="fa-solid fa-house text-blue-700"></i></Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item active className='text-[16px] ml-2'>
      Courses
    </Breadcrumb.Item>
  </Breadcrumb>
);

function CourseCategory() {
  return (
    <>
    <Header />
    <div className='flex flex-col w-full pt-4 h-[50px] justify-center items-center'>
      <div className='flex flex-row items-center w-[90%] mx-auto mt-0 mb-0'>
        <MyBreadcrumb separator={<i className="fa-solid fa-chevron-right text-[10px] text-blue-700"></i>} />
      </div>
    </div>
    <Filter />
    <AllCourses />
    <Footer />
    </>
  )
}

export default CourseCategory