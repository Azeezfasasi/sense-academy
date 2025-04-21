import React, { useContext } from 'react';
import figma from '../../image/figma.svg';
import fiveratings from '../../image/fiveratings.svg';
import { useCart } from '@/assets/contextAPI/CartContext';
import { CourseContext } from '@/assets/contextAPI/CourseContext';
import { Link } from 'react-router-dom';

function CartItemDetails() {
  const { cartItems = [], removeFromCart, clearCart } = useCart();

  // If cart is empty, display message
  if (cartItems.length === 0) {
    return <div className="w-full h-[20vh] lg:h-[40vh] flex flex-col justify-center items-center text-center gap-2 text-[18px] md:text-[30px]"><i className="fa-solid fa-cart-arrow-down text-[35px]"></i> Your cart is empty. <br /><Link to="/app/coursecategory" className='text-blue-600 no-underline hover:no-underline'>Buy Courses</Link></div>;
  }

  // Calculate total price
  const total = cartItems.reduce((sum, course) => sum + parseFloat(course.discountedPrice || 0), 0);

  return (
    <div className="flex flex-col lg:flex-row w-full gap-6 px-4">
      {/* Cart Items */}
      <div className='flex flex-col w-full lg:w-[70%] gap-4'>
        {cartItems.map(item => (
          <div key={item._id} className="bg-white rounded-lg border border-grey-border w-full py-2 overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center justify-between px-4">
              <div className="flex flex-col lg:flex-row gap-2 items-center">
                <img className="rounded w-48 h-[108px]" src={item.introImage || figma} alt="Course Thumbnail" />
                <div className="flex flex-col gap-2 p-2">
                  <div>
                    <h3 className="text-black text-lg lg:text-xl font-semibold">{item.title}</h3>
                    <p className="text-grey-700 text-sm"></p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500 font-medium text-base">{item.rating}</span>
                    <img src={fiveratings} alt="Rating" className="h-4" />
                    <span className="text-slate-500 text-sm">{item.rating} reviews</span>
                    <span className="mx-2">|</span>
                    <span className="text-slate-800 text-sm">{item.duration}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="text-red-600 text-sm mt-1 hover:underline text-left"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-black text-lg font-semibold">
                ₦{item.discountedPrice}
              </div>
            </div>
          </div>
        ))}
        {/* Clear Cart Button */}
        <div className='w-[30%] lg:w-[20%] mx-auto'>
          <button
          onClick={clearCart}
          className="w-full bg-red-600 text-white text-center py-1 lg:py-2 rounded-lg font-medium hover:bg-red-500 transition mt-4"
          >
          Clear Cart
          </button>
        </div>
      </div>

      {/* Order Summary */}
      <div className='flex flex-col w-full lg:w-[30%]'>
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-slate-900">Order Details</h2>
          <div className="bg-slate-100 rounded-lg border border-grey-border shadow-md p-4 w-full">
            <div className="flex flex-col gap-4">
              {/* {cartItems.map(item => ( */}
                <div className="flex justify-between px-2">
                  <span className="text-slate-800 font-bold">Price</span>
                  <span className="text-slate-800 font-semibold">₦{total.toFixed(2)}</span>
                </div>
              {/* ))} */}
              <hr className="border-grey-border" />
              <div className="flex justify-between font-bold text-lg px-2">
                <span>Total</span>
                <span>₦{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <Link to="/app/checkout" className="w-full bg-slate-800 text-white text-center py-3 rounded-lg font-medium hover:bg-slate-700 transition">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CartItemDetails;
