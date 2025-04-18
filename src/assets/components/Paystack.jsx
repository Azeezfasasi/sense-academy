import React, { useState, useContext, useEffect } from 'react';
import Header from '../assets/components/home-components/Header';
import Footer from '../assets/components/home-components/Footer';
import CheckoutDetailInfo from '../assets/components/course-components/CheckoutDetailInfo';
import CheckoutOrderDetails from '../assets/components/course-components/CheckoutOrderDetails';
import { Breadcrumb } from 'rsuite';
import { Link, useNavigate } from 'react-router-dom';
import { ProfileContext } from '@/assets/contextAPI/ProfileContext';
import { useCart } from '@/assets/contextAPI/CartContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PaystackButton } from 'react-paystack'; // Import PaystackButton

const MyBreadcrumb = ({ separator }) => (
  <Breadcrumb separator={separator}>
    <Breadcrumb.Item>
      <Link to="/" className="text-[16px] mr-2">
        <i className="fa-solid fa-house text-blue-700"></i>
      </Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Link to="/app/coursecategory" className="text-[16px] mr-2 ml-2">
        Courses
      </Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <Link to="/app/cart" className="text-[16px] mr-2 ml-2">
        Cart
      </Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item active className="text-[16px] ml-2">
      Checkout
    </Breadcrumb.Item>
  </Breadcrumb>
);

function Checkout() {
  const { user } = useContext(ProfileContext); // Get user details
  const { cartItems } = useCart(); // Get cart items
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || '',
    country: user?.country || '',
    state: '',
  });

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.regularPrice || 0), 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentSuccess = (reference) => {
    console.log('Payment successful:', reference);

    // Redirect to the success page with checkout details
    navigate('/app/success', {
      state: {
        totalItems: cartItems.length,
        totalPrice: totalPrice,
        paymentStatus: 'Paid',
      },
    });
  };

  const handlePaymentClose = () => {
    toast.info('Payment popup closed. Please complete your payment to proceed.', {
      position: 'top-center',
      autoClose: 4000,
    });
  };

  const paystackConfig = {
    email: formData.email,
    amount: totalPrice * 100, // Convert to kobo (Paystack uses the smallest currency unit)
    publicKey: 'your-paystack-public-key', // Replace with your Paystack public key
    onSuccess: handlePaymentSuccess,
    onClose: handlePaymentClose,
  };

  useEffect(() => {
    if (!user) {
      // Show toast message
      toast.error('You need to log in before continuing to checkout.', {
        position: 'top-center',
        autoClose: 4000,
      });

      // Redirect to login page after a short delay
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    }
  }, [user, navigate]);

  // If user is not logged in, don't render the checkout page
  if (!user) {
    return null;
  }

  return (
    <>
      <ToastContainer />
      <Header />
      <div className="flex flex-col w-full pt-4 h-[50px] justify-center items-center">
        <div className="flex flex-row items-center w-[90%] mx-auto mt-0 mb-0">
          <MyBreadcrumb separator={<i className="fa-solid fa-chevron-right text-[10px] text-blue-700"></i>} />
        </div>
      </div>
      <form className="flex flex-col lg:flex-row justify-around w-full p-2 m-0 mx-auto pt-[10px] lg:pt-[30px]">
        <div className="flex flex-col w-full lg:w-[70%] px-1 lg:px-4">
          <CheckoutDetailInfo formData={formData} handleChange={handleChange} />
        </div>
        <div className="flex flex-col w-full lg:w-[30%]">
          <CheckoutOrderDetails />
          <div className="mt-4">
            <PaystackButton
              {...paystackConfig}
              className="bg-green-600 text-white py-3 px-6 rounded-lg shadow hover:bg-green-700 transition w-full text-center"
            >
              Proceed to Payment
            </PaystackButton>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Checkout;