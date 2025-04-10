import React from 'react';
import figma from '../../image/figma.svg';
import couponicon from '../../image/couponicon.svg';
import { Link } from 'react-router-dom';
import ApplyCoupon from '../home-components/ApplyCoupon';

function CheckoutOrderDetails() {
  return (
    <>
    <div className="w-full flex flex-col gap-4 items-start justify-start relative py-6 rounded-md border border-solid border-grey-border px-2 shadow-md">
        <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
            Order Details
        </div>
        <div className="bg-grey-background rounded-lg border-solid border shrink-0 w-[100%] h-[163px] relative overflow-hidden flex flex-row items-center justify-start gap-3 mx-auto">
            <img className="rounded h-[100px] md:h-[100px] ml-2"
            src={figma}
            />
            <div className="flex flex-col gap-1 items-start justify-start">
                <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
                    <div className="text-primary-600 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative flex items-center justify-start">
                    Design
                    </div>
                    <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative flex items-center justify-start">
                    Introduction to User Experience Design
                    </div>
                </div>
                <div className="text-grey-900 text-right font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative">
                    ₦45.00
                </div>
            </div>
        </div>
        <ApplyCoupon />
        <div className="bg-grey-background rounded-lg border-solid border-grey-border border shrink-0 w-[100%] py-6 px-4 relative overflow-hidden p-2">
            <div className="flex flex-col gap-4 items-start justify-start w-[100%]">
                <div className="flex flex-col gap-4 items-start justify-start self-stretch shrink-0 relative">
                    <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                        <div className="text-grey-900 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative">
                            Price
                        </div>
                        <div className="text-grey-900 text-right font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative">
                            ₦300.00
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                        <div className="text-grey-900 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative">
                            Discount
                        </div>
                        <div className="text-grey-900 text-right font-heading-5-subheading-font-family text-heading-5-subheading-font-size leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative">
                            ₦0.00
                        </div>
                    </div>
                </div>
                <div className="border-solid border-grey-border border-t border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[100%] h-0 relative"
                ></div>
                <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                    <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                    Total
                    </div>
                    <div className="text-grey-900 text-right font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                    ₦290.00
                    </div>
                </div>
            </div>
        </div>
        <button className="bg-grey-text-dark rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center shrink-0 w-[100%] h-12 relative">
            <div className="text-white text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
            Proceed to Checkout
            </div>
        </button>
    </div>

    </>
  )
}

export default CheckoutOrderDetails