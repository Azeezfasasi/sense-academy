import React, {useContext, useEffect} from 'react';
import fiveratings from '../../image/fiveratings.svg';
import profileimage from '../../image/profileimage.svg';
import { Link } from 'react-router-dom';
import { CourseContext } from '@/assets/contextAPI/CourseContext';
import { ProfileContext } from '@/assets/contextAPI/ProfileContext';
import ReactPlayer from 'react-player';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '@/assets/contextAPI/CartContext'
import { toast } from 'react-toastify';

function CourseTitleInfo() {
  const { courseId } = useParams();
  const { courses, fetchAllCourses, loading } = useContext(CourseContext);
  const { user } = useContext(ProfileContext);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    fetchAllCourses();
  }, [fetchAllCourses]);

  const handleAdd = () => {
    const isInCart = cartItems.some((item) => item._id === course._id);
  
    if (isInCart) {
      toast.info('Course is already in your cart!', {
        position: 'top-center',
        autoClose: 5000,
      });
      return;
    }
  
    addToCart(course);
    toast.success('Item added to cart!', {
      position: 'top-center',
      autoClose: 7000,
    });
  };

  if (loading) {
    return <div className="text-center mt-10">Loading course details...</div>;
  }

  const course = courses.find((c) => c._id === courseId);

  if (!course) {
    return <div className="text-center mt-10">Course not found</div>;
  }

  const videoSrc = course.videoUrl || "https://vimeo.com/1074814552/cdaf0e228c";

  return (
  <>
    {/* For mobile video intro */}
    <div>
      <div className="lg:hidden bg-white rounded-2xl shadow-md w-[100%] relative overflow-hidden flex flex-col justify-start items-center mx-auto mb-[10px] pb-0">
          <div className='w-full h-[220px] relative overflow-hidden' >
            <img src={course.introImage} alt={course.introImage} className='w-full h-full object-fill' />
          </div>
      </div>

      {/* For desktop */}
      <div className="w-[100%] flex flex-col gap-6 items-start justify-start shrink-0 relative">
          <div className="w-full flex flex-col gap-[17px] items-start justify-start shrink-0 relative">
              <div className="text-grey-900 text-left font-['Inter-Bold',_sans-serif] text-[22px] md:text-[40px] leading-[140%] font-bold relative mb-[-15px] md:mb-[-10px]">
              {course.title}
              </div>
              <div className="text-grey-700 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative">
              {course.subTitle}
              </div>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start shrink-0 relative mt-[-10px]">
              <div className="flex flex-row gap-3 items-center justify-start shrink-0 relative">
                  <div className="flex flex-row gap-1 items-center justify-start shrink-0 h-[19px] relative">
                      <div className="text-warning-300 text-left font-['Poppins-Medium',_sans-serif] text-base leading-[120%] font-medium relative">
                      {course.rating}
                      </div>
                      <div className="flex flex-row gap-0 items-center justify-start shrink-0 h-[19px] relative">
                          <img
                              className="shrink-0 relative overflow-visible"
                              src={fiveratings}
                          />
                      </div>
                      <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                      {course.rating} ratings
                      </div>
                  </div>
                  <div className="bg-grey-700 shrink-0 w-px h-4 relative"></div>
                  <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                  {course.level || 'All Levels'}
                  </div>
                  <div className="bg-grey-700 shrink-0 w-px h-4 relative"></div>
                  <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                   {course.duration}
                  </div>
              </div>              
              <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative">
                  <img
                      className="rounded-[50%] shrink-0 w-10 h-10 relative"
                      src={profileimage}
                      alt={course.createdBy}
                  />
                  <div className="text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                      <span>
                        <span className="created-by-ronal-richards-span">Created by </span>
                        <span className="created-by-ronal-richards-span2">
                          {course.createdBy?.firstName && course.createdBy?.lastName
                            ? `${course.createdBy.firstName} ${course.createdBy.lastName}`
                            : 'Unknown Instructor'}
                        </span>
                      </span>
                  </div>
              </div>
          </div>
      </div>

      {/* For mobile */}
      <div className="lg:hidden bg-white rounded-2xl shadow-md w-[100%] relative overflow-hidden flex flex-col justify-start items-center mx-auto mt-[10px] border lg:mt-[200px] pb-7">
          <div className="w-[90%] flex flex-col gap-6 items-start justify-start mt-4">
            <div className="flex flex-row gap-[13px] items-center justify-center shrink-0 relative py-0">
              <div className="text-grey-900 text-left font-heading-3-font-family text-[20px] lg:text-[24px] leading-heading-3-line-height font-heading-3-font-weight relative">
              {/* ₦{course.regularPrice} */}
              ₦{course.discountedPrice}
              </div>
              <div className="shrink-0 w-[59px] h-[29px] static">
                <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[15px] lg:text-[18px] leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight line-through">
                {/* ₦{course.discountedPrice} */}
                ₦{course.regularPrice}
                </div>
              </div>
            </div>
            <div className="w-[100%] flex flex-col gap-4 items-start justify-start shrink-0 relative">
              <button onClick={handleAdd} className="bg-grey-text-dark rounded-lg pt-2 lg:pt-2.5 pr-6 pb-2 lg:pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center shrink-0 w-full lg:h-12 relative cursor-pointer" style={{textDecoration: 'none'}}>
                <div className="text-white text-left font-button-text-font-family text-[13px] lg:text-[14px] leading-button-text-line-height font-button-text-font-weight relative">
                  Add To Cart
                </div>
              </button>
              <button 
              onClick={() => {clearCart();
              toast.success("Purchase successful and cart cleared!");
              navigate('/app/cart');
              }} 
              className="rounded-lg border-solid border-grey-text-dark border pt-2 lg:pt-2.5 pr-6 pb-2 lg:pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center shrink-0 w-full lg:h-12 relative cursor-pointer" style={{textDecoration: 'none'}}>
                <div className="text-grey-900 text-left font-button-text-font-family text-[13px] lg:text-[14px] leading-button-text-line-height font-button-text-font-weight relative">
                  Buy Now
                </div>
              </button>
            </div>
          </div>
          <div className="w-[90%] flex flex-col gap-2 items-start justify-start">
            <div className="text-grey-900 text-left font-paragraph-medium-font-family text-paragraph-medium-font-size leading-paragraph-medium-line-height font-semibold relative flex items-center justify-start mt-6">
              Share
            </div>
            <div className='flex flex-row gap-6 items-center justify-start'>
              <Link to="">
                <i className="fa-brands fa-whatsapp text-[26px] lg:text-[35px] text-green-600"></i>
              </Link>
              <Link to="">
                <i className="fa-brands fa-facebook text-[26px] lg:text-[35px] text-blue-700"></i>
              </Link>
              <Link>
                <i className="fa-brands fa-instagram text-[26px] lg:text-[35px] text-pink-700"></i>
              </Link>
              <Link>
              <i className="fa-solid fa-envelope text-[26px] lg:text-[35px] text-gray-900"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
  </>
  )
}

export default CourseTitleInfo
