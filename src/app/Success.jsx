import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import success from '../assets/image/success.png';
import Header from '@/assets/components/home-components/Header';

function Success() {
  const location = useLocation();
  const { totalItems, totalPrice, paymentStatus } = location.state || {
    totalItems: 0,
    totalPrice: 0,
    paymentStatus: 'Pending',
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        {/* Success Image */}
        <div className="w-32 h-32 mb-6">
          <img src={success} alt="Success" className="w-full h-full object-contain" />
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-green-600 mb-4">Checkout Successful!</h1>
        <p className="text-gray-700 text-center mb-6">
          Thank you for your purchase! Your order has been successfully processed.
        </p>

        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Total Items:</span>
            <span className="text-gray-800 font-medium">{totalItems}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">Total Price:</span>
            <span className="text-gray-800 font-medium">₦{totalPrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Payment Status:</span>
            <span className={`font-medium ${paymentStatus === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
              {paymentStatus}
            </span>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col lg:flex-row gap-4 mt-6">
          <Link
            to="/"
            className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition no-underline hover:no-underline hover:text-white"
          >
            Go to Homepage
          </Link>
          <Link
            to="/app/mycourses"
            className="bg-green-600 text-white py-2 px-6 rounded-lg shadow hover:bg-green-700 transition no-underline hover:no-underline hover:text-white"
          >
            View My Courses
          </Link>
        </div>
      </div>
    </>
  );
}

export default Success;