import React, { useState, useContext } from 'react';
import { useCoupon } from '@/assets/contextAPI/CouponContext';
import { ProfileContext } from '@/assets/contextAPI/ProfileContext'; // Import ProfileContext
import couponicon from '../../image/couponicon.svg';
import { Accordion, Stack, Avatar } from 'rsuite';
import axios from 'axios';
import API_BASE_URL from '../../config';

const Header = (props) => {
  const { title } = props;
  return (
    <Stack spacing={10} direction="row" alignItems="center" className="w-full">
      <div className="flex flex-row items-center justify-start gap-2">
        <Avatar src={couponicon} alt={title} style={{ width: '24px', height: '24px', backgroundColor: 'transparent' }} />
        <Stack spacing={2} direction="column" alignItems="center">
          <div>{title}</div>
        </Stack>
      </div>
    </Stack>
  );
};

const ApplyCoupon = ({ appliedCoupon, setAppliedCoupon }) => {
  const { applyCoupon, error } = useCoupon();
  const { token } = useContext(ProfileContext); 
  const [couponCode, setCouponCode] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleApplyCoupon = async () => {
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    try {
      const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // Get cart items from local storage
      console.log('Applying coupon with code:', couponCode, 'and cart items:', cartItems);

      const response = await axios.post(`${API_BASE_URL}/api/coupons/apply`, {
        code: couponCode,
        cartItems,
      }, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log('Coupon applied successfully, response:', response.data); // Debugging response
      setSuccessMessage(`Coupon "${couponCode}" applied successfully!`);
      setAppliedCoupon({
        code: couponCode,
        type: response.data.type || 'Fixed', // Ensure type is passed
        discount: response.data.discount,
      }); // Update appliedCoupon in parent
      setCouponCode('');
    } catch (err) {
      console.error('Failed to apply coupon:', err.message);
      setErrorMessage(err.response?.data?.message || 'Failed to apply coupon');
    } finally {
      setLoading(false);
    }
  };
 

  return (
    <Accordion bordered defaultActiveKey={1} className="w-full">
      <Accordion.Panel
        header={<Header title="APPLY COUPON CODE" />}
        eventKey={1}
        className="w-full"
      >
        <div className="w-full flex flex-row justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Enter Coupon here"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            className="border border-solid border-gray-300 py-2 px-2 rounded-md w-full"
          />
          <div
            onClick={handleApplyCoupon}
            disabled={loading}
            className="bg-blue-400 py-2 px-4 rounded-md cursor-pointer text-white"
          >
            {loading ? 'Applying...' : 'APPLY'}
          </div>
        </div>
        {successMessage && (
          <div className="text-green-600 mt-2">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="text-red-600 mt-2">
            {errorMessage}
          </div>
        )}
        {appliedCoupon && (
          <div className="text-green-600 mt-2">
            Coupon Applied: {appliedCoupon.code} - Discount: {appliedCoupon.type === 'Percentage' ? `${appliedCoupon.discount}%` : `₦${appliedCoupon.discount}`}
          </div>
        )}
        {error && <div className="text-red-600 mt-2">{error}</div>}
      </Accordion.Panel>
    </Accordion>
  );
};

export default ApplyCoupon;