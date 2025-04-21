import React, {useContext, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { CourseContext } from '@/assets/contextAPI/CourseContext';
import CourseDetailSylabus from './CourseDetailSylabus';

function CourseDetailDescription() {
  const { courseId } = useParams();
    const { courses, fetchAllCourses, loading } = useContext(CourseContext);
  
    useEffect(() => {
      fetchAllCourses();
    }, [fetchAllCourses]);
  
    if (loading) {
      return <div className="text-center mt-10">Loading course details...</div>;
    }
  
    const course = courses.find((c) => c._id === courseId); // ✅ get one course
  
    if (!course) {
      return <div className="text-center mt-10">Course not found</div>;
    }
    
  return (
    <>
    <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative overflow-x-hidden mt-[20px]">
        <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
            <div className="text-grey-700 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative w-full">
            {course.description}
            </div>
        </div>
    </div>
    <div className='mt-3'>
      <p className='font-bold text-blue-700 text-[18px] md:text-[20px]'>What You Will Learn:</p>
      <CourseDetailSylabus courseId={courseId} />
    </div>

    </>
  )
}

export default CourseDetailDescription