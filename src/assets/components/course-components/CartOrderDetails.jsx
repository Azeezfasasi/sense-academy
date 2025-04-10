import React from 'react'
import { Link } from 'react-router-dom'

function CartOrderDetails() {
  return (
    <>
    <div className="flex flex-col gap-2 items-start justify-start relative p-0 mt-0">
        <div className="w-[95%] text-grey-900 text-left font-heading-4-subheading-font-family text-[18px] lg:text-[20px] leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative mx-auto">
            Order Details
        </div>
        <div className="bg-grey-background rounded-lg border-solid border-grey-border border shadow-md shrink-0 w-full lg:w-[95%] relative py-4 mx-auto">
            <div className="flex flex-col gap-4 justify-start items-center">
                <div className="w-full flex flex-col gap-4 items-center justify-start shrink-0 relative">
                    <div className="w-full flex flex-row items-start justify-between px-6 shrink-0 relative">
                        <div className="text-grey-900 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative">
                            Price
                        </div>
                        <div className="text-grey-900 text-right font-heading-5-subheading-font-family text-[17px] lg:text-[18px] leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative">
                        ₦300.00
                        </div>
                    </div>
                    <div className="w-full flex flex-row items-start justify-between px-6 shrink-0 relative">
                        <div className="text-grey-900 text-left font-paragraph-font-family text-paragraph-font-size leading-paragraph-line-height font-paragraph-font-weight relative">
                            Discount
                        </div>
                        <div className="text-grey-900 text-right font-heading-5-subheading-font-family text-[17px] lg:text-[18px leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative">
                            -₦0.00
                        </div>
                    </div>
                </div>
                <div className="border-solid border-grey-border border-t border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[90%] h-0 relative"
                ></div>
                <div className="w-full flex flex-row items-start justify-between px-6 shrink-0 relative">
                    <div className="text-grey-900 text-left font-heading-4-subheading-font-family text[18px] lg:text-[20px] leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                        Total
                    </div>
                    <div className="text-grey-900 text-right font-heading-4-subheading-font-family text-[18px] lg:text-[20px] leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
                    ₦290.00
                    </div>
                </div>
            </div>
        </div>
        <Link to="/app/checkout" className="w-full lg:w-[95%] bg-grey-text-dark rounded-lg pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center h-12 relative cursor-pointer border mx-auto" style={{textDecoration: 'none'}}>
            <div className="text-white text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                Proceed to Checkout
            </div>
        </Link>
    </div>
    


    </>
  )
}

export default CartOrderDetails