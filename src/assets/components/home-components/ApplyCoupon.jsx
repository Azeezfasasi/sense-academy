import React, { useState } from 'react';
import { useCoupon } from '@/assets/contextAPI/CouponContext';
import couponicon from '../../image/couponicon.svg';
import { Accordion, Stack, Avatar } from 'rsuite';

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

const ApplyCoupon = () => {
  const { applyCoupon, appliedCoupon, error, loading } = useCoupon();
  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = async () => {
    try {
      await applyCoupon(couponCode);
      alert('Coupon applied successfully!');
    } catch (err) {
      // alert(error || 'Failed to apply coupon');
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
          <button
            onClick={handleApplyCoupon}
            disabled={loading}
            className="bg-blue-400 py-2 px-4 rounded-md cursor-pointer text-white"
          >
            {loading ? 'Applying...' : 'APPLY'}
          </button>
        </div>
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