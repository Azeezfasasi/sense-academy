import React, { useState } from 'react';
import figma from '../../image/figma.svg';
import ApplyCoupon from '../home-components/ApplyCoupon';
// import { useCart } from '@/assets/contextAPI/CartContext';

function CheckoutOrderDetails({ cartItems, appliedCoupon, setAppliedCoupon, totalPrice, discountAmount, discountedPrice }) {
//   const { cartItems } = useCart();
//   const [appliedCoupon, setAppliedCoupon] = useState(null);

//   // Calculate total price
//   const totalPrice = cartItems.reduce((sum, item) => sum + (item.regularPrice || 0), 0);

//   // Calculate discount amount
//   const discountAmount = appliedCoupon
//     ? appliedCoupon.type === 'Percentage'
//       ? (totalPrice * appliedCoupon.discount) / 100
//       : appliedCoupon.discount
//     : 0;

//   // Calculate discounted price
//   const discountedPrice = totalPrice - discountAmount;

//   console.log('Applied Coupon:', appliedCoupon); // Debugging appliedCoupon
//   console.log('Discount Amount:', discountAmount); // Debugging discountAmount

  return (
    <div className="w-full flex flex-col gap-4 items-start justify-start relative py-6 rounded-md border border-solid border-grey-border px-2 shadow-md">
      <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
        Order Details
      </div>
      {cartItems.map((item) => (
        <div key={item._id} className="bg-grey-background rounded-lg border-solid border shrink-0 w-[100%] h-[163px] relative overflow-hidden flex flex-row items-center justify-start gap-3 mx-auto">
          <img
            className="rounded h-[100px] md:h-[100px] ml-2"
            src={item.introImage || figma}
            alt={item.title}
          />
          <div className="flex flex-col gap-1 items-start justify-start">
            <div className="text-primary-600">{item.category || 'Design'}</div>
            <div className="text-grey-900">{item.title}</div>
            <div className="text-grey-900">₦{item.regularPrice || '0.00'}</div>
          </div>
        </div>
      ))}
      <ApplyCoupon appliedCoupon={appliedCoupon} setAppliedCoupon={setAppliedCoupon} />
      <div className="bg-grey-background rounded-lg border-solid border-grey-border border shrink-0 w-[100%] py-6 px-4 relative overflow-hidden p-2">
        <div className="flex flex-col gap-4 items-start justify-start self-stretch shrink-0 relative">
            <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                <div className="text-grey-900 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative">
                Subtotal
                </div>
                <div className="text-grey-900 text-right font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative">
                ₦{totalPrice.toLocaleString()}
                </div>
            </div>
            {appliedCoupon && (
            <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative mt-2">
                <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-[15px] md:text-[14px] leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                Discount ({appliedCoupon.code})
                </div>
                <div className="text-green-600 text-right font-heading-4-subheading-font-family text-[17px] md:text-[18px] leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                -₦{discountAmount.toLocaleString()}
                </div>
            </div>
            )}
            <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                <div className="text-grey-900 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative">
                Total
                </div>
                <div className="text-grey-900 text-right font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative">
                ₦{discountedPrice.toLocaleString()}
                </div>
            </div>
        </div>
      </div>
      <button type="submit" className="bg-grey-text-dark rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center shrink-0 w-[100%] h-12 relative">
        <div className="text-white">Proceed to Checkout</div>
      </button>
    </div>
  );
}

export default CheckoutOrderDetails;