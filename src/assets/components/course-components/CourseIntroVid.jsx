import React, { useEffect, useContext } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CourseContext } from '@/assets/contextAPI/CourseContext';
import { ProfileContext } from '@/assets/contextAPI/ProfileContext';
import { useCart } from '@/assets/contextAPI/CartContext';

function CourseIntroVid() {
  const { courseId } = useParams();
  const { courses, fetchAllCourses, loading } = useContext(CourseContext);
  const { user } = useContext(ProfileContext);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    fetchAllCourses();
  }, [fetchAllCourses]);

  const course = courses.find((c) => c._id === courseId);

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

  if (!course) {
    return <div className="text-center mt-10">Course not found</div>;
  }

  const videoSrc = course.videoUrl || 'https://vimeo.com/1074814552/cdaf0e228c';

  return (
    <>
      <div className="hidden bg-white rounded-2xl shadow-md w-[90%] relative overflow-hidden lg:flex flex-col justify-start items-center mx-auto mt-[20px] pb-7">
        <div className='w-full h-[200px] relative overflow-hidden border-2 border-solid border-red-700'>
          <ReactPlayer url={videoSrc} controls width="100%" height="100%" className="rounded-md" />
        </div>

        <div className="w-[90%] flex flex-col gap-6 items-start justify-start mt-4">
          <div className="flex flex-row gap-[13px] items-center justify-center">
            <div className="text-grey-900 font-bold text-xl">
              ₦{course.regularPrice}
            </div>
            <div className="text-grey-900 line-through font-semibold text-lg">
              ₦{course.discountedPrice}
            </div>
          </div>

          <div className="w-full flex flex-col gap-4">
            <button
              onClick={handleAdd}
              className="bg-grey-text-dark rounded-lg text-white h-12 w-full flex items-center justify-center font-semibold"
            >
              Add To Cart
            </button>

            <button
              className="rounded-lg border border-grey-text-dark text-grey-900 h-12 w-full flex items-center justify-center font-semibold"
              onClick={() => {
                // handle your payment logic here (e.g., navigate to checkout)
                clearCart(); // clear after successful purchase
                toast.success("Purchase successful and cart cleared!");
                navigate('/app/cart'); // redirect if needed
              }}
            >
              Buy Now
            </button>
          </div>
        </div>

        <div className="w-[90%] flex flex-col gap-2 mt-6">
          <div className="text-grey-900 font-semibold">Share</div>
          <div className="flex flex-row gap-6">
            <Link to=""><i className="fa-brands fa-whatsapp text-[35px] text-green-600"></i></Link>
            <Link to=""><i className="fa-brands fa-facebook text-[35px] text-blue-700"></i></Link>
            <Link to=""><i className="fa-brands fa-instagram text-[35px] text-pink-700"></i></Link>
            <Link to=""><i className="fa-solid fa-envelope text-[35px] text-gray-900"></i></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseIntroVid;
