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
import axios from 'axios';

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
  const { user, token } = useContext(ProfileContext); // Get user details
  const { cartItems } = useCart(); // Get cart items
  const navigate = useNavigate();

  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // Calculate total price
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.regularPrice || 0), 0);

  // Calculate discount amount
  const discountAmount = appliedCoupon
    ? appliedCoupon.type === 'Percentage'
      ? (totalPrice * appliedCoupon.discount) / 100
      : appliedCoupon.discount
    : 0;

  // Calculate discounted price
  const discountedPrice = totalPrice - discountAmount;

  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    phoneNumber: user?.phoneNumber || '',
    country: user?.country || '',
    state: user?.state || '',
    // state: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validate form data
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phoneNumber || !formData.country) {
      toast.error('Please fill in all required fields.', {
        position: 'top-center',
        autoClose: 4000,
      });
      return;
    }
    // Combine user details and cart items
    const checkoutData = {
      userDetails: formData,
      cartItems: cartItems.map((item) => ({
        id: item._id,
        title: item.title,
        price: item.regularPrice,
        quantity: 1, // Assuming quantity is 1 for simplicity
      })),
      // totalPrice: cartItems.reduce((sum, item) => sum + (item.regularPrice || 0), 0),
      totalPrice: discountedPrice,
    };
  
    try {
      await axios.post(
        'http://localhost:5000/api/courses/purchase',
        { cartItems: checkoutData.cartItems },
        {
            headers: { Authorization: `Bearer ${token}` }, // Use token from ProfileContext
        }
      );
  
      toast.success('Checkout successful!', {
        position: 'top-center',
        autoClose: 4000,
      });
  
      // Redirect to a success page with checkout details
      navigate('/app/success', {
        state: {
          totalItems: cartItems.length,
          totalPrice: checkoutData.totalPrice,
          paymentStatus: 'Paid', // Replace with actual payment status
        },
      });
    } catch (error) {
      console.error('Failed to complete checkout:', error);
      toast.error('Checkout failed. Please try again.', {
        position: 'top-center',
        autoClose: 4000,
      });
    }
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
      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row justify-around w-full p-2 m-0 mx-auto pt-[10px] lg:pt-[30px]">
        <div className="flex flex-col w-full lg:w-[70%] px-1 lg:px-4">
          <CheckoutDetailInfo formData={formData} handleChange={handleChange} />
        </div>
        <div className="flex flex-col w-full lg:w-[30%]">
          <CheckoutOrderDetails 
           cartItems={cartItems}
           appliedCoupon={appliedCoupon}
           setAppliedCoupon={setAppliedCoupon}
           totalPrice={totalPrice}
           discountAmount={discountAmount}
           discountedPrice={discountedPrice}
           />
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Checkout;