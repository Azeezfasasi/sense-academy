import React, {useContext, useEffect} from 'react';
import Header from '../assets/components/home-components/Header';
import CourseTitleInfo from '../assets/components/course-components/CourseTitleInfo';
import CourseDetailsButtons from '../assets/components/course-components/CourseDetailsButtons';
import CourseDetailDescription from '../assets/components/course-components/CourseDetailDescription';
import CourseIntructorDetails from '../assets/components/course-components/CourseIntructorDetails';
import CourseDetailSylabus from '../assets/components/course-components/CourseDetailSylabus';
import CourseIntroVid from '../assets/components/course-components/CourseIntroVid';
import Footer from '../assets/components/home-components/Footer';
import { Breadcrumb } from 'rsuite';
import { Link } from 'react-router-dom';
import { CourseContext } from '@/assets/contextAPI/CourseContext';
import { useParams } from 'react-router-dom';

function MyBreadcrumb({ separator }) {
  const { courseId } = useParams();
  const { courses, fetchAllCourses, loading } = useContext(CourseContext);
  
  useEffect(() => {
    fetchAllCourses();
  }, [fetchAllCourses]);

  const course = courses.find((c) => c._id === courseId); // ✅ get one course

  return (
    <Breadcrumb separator={separator}>
      <Breadcrumb.Item>
        <Link to="/" className='text-[16px] mr-2'><i className="fa-solid fa-house text-blue-700"></i></Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="/app/coursecategory" className='text-[16px] mr-2 ml-2'>Courses</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active className='text-[16px] ml-2'>{course?.title} </Breadcrumb.Item>
    </Breadcrumb>
  )
}

function CourseSingle() {
  return (
    <>
    <Header />
    <div className='flex flex-col w-full pt-4 h-[50px] justify-center items-center'>
      <div className='flex flex-row items-center w-[90%] mx-auto mt-0 mb-0'>
        <MyBreadcrumb separator={<i className="fa-solid fa-chevron-right text-[10px] text-blue-700"></i>} />
      </div>
    </div>
    <div className='flex flex-col-reverse lg:flex-row justify-start lg:justify-between w-full p-1 lg:p-2 m-0 mx-auto'>
      <div className='flex flex-col w-full lg:w-[70%] p-2 lg:px-4'>
        <CourseTitleInfo />
        <CourseDetailsButtons />
      </div>
      <div className='flex flex-col w-full lg:w-[30%]'>
        <CourseIntroVid />
      </div>
    </div>
    <Footer />
    </>
  )
}

export default CourseSingle;