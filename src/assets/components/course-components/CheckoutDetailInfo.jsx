import React from 'react'

function CheckoutDetailInfo() {
  return (
    <>
    <div className="bg-white rounded-2xl border-solid border-grey-border border relative overflow-hidden py-6">
        <div className="flex flex-col gap-[17px] items-center justify-start">
            {/* Name section */}
            <div className="w-[95%] flex flex-col lg:flex-row gap-[17px] items-start justify-start shrink-0 relative">
                <div className="w-full lg:w-[50%] flex flex-col gap-2 items-start justify-start shrink-0 relative">
                    <div type='text' placeholder='Enter first name' className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] lg:text-[18px] leading-[50%] lg:leading-[100%] font-heading-5-subheading-font-weight relative">
                    First Name
                    </div>
                    <input type='text' placeholder='Enter first name' className="text-gray-500 bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full lg:w-[95%] relative" required autoComplete='name'/>
                </div>
                <div className="w-full lg:w-[50%] flex flex-col gap-2 items-start justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] lg:text-[18px] leading-[50%] lg:leading-[100%] font-heading-5-subheading-font-weight relative">
                     Last Name
                    </div>
                    <input type='text' placeholder='Enter last name' className="text-gray-500 bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full lg:w-[95%] relative" required autoComplete='name'/>
                </div>
            </div>

            {/* Email & Phone section */}
            <div className="w-[95%] flex flex-col lg:flex-row gap-[17px] items-start justify-start shrink-0 relative">
                <div className="w-full lg:w-[50%] flex flex-col gap-2 items-start justify-start shrink-0 relative">
                    <div type='text' placeholder='Enter Country' className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] lg:text-[18px] leading-[50%] lg:leading-[100%] font-heading-5-subheading-font-weight relative">
                    Email
                    </div>
                    <input type='email' placeholder='abc@example.com' className="text-gray-500 bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full lg:w-[95%] relative" required autoComplete='email'/>
                </div>
                <div className="w-full lg:w-[50%] flex flex-col gap-2 items-start justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] lg:text-[18px] leading-[50%] lg:leading-[100%] font-heading-5-subheading-font-weight relative">
                     Phone Number
                    </div>
                    <input type='text' placeholder='Enter phone number' className="text-gray-500 bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full lg:w-[95%] relative" />
                </div>
            </div>

            {/* Country and State section */}
            <div className="w-[95%] flex flex-col lg:flex-row gap-[17px] items-start justify-start shrink-0 relative">
                <div className="w-full lg:w-[50%] flex flex-col gap-2 items-start justify-start shrink-0 relative">
                    <div type='text' placeholder='Enter Country' className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] lg:text-[18px] leading-[50%] lg:leading-[100%] font-heading-5-subheading-font-weight relative">
                    Country
                    </div>
                    <select className="text-gray-500 bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full lg:w-[95%] relative">
                        <option value="">Select Country</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Ghana">Ghana</option>
                    </select>
                </div>
                <div className="w-full lg:w-[50%] flex flex-col gap-2 items-start justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] lg:text-[18px] leading-[50%] lg:leading-[100%] font-heading-5-subheading-font-weight relative">
                     State
                    </div>
                    <select className="text-gray-500 bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full lg:w-[95%] relative">
                        <option value="">Select State</option>
                        <option value="">Lagos</option>
                        <option value="">Abuja</option>
                    </select>
                </div>
            </div>
        </div>

        {/* Payment method */}
        <div className="w-[95%] flex flex-col gap-2 items-start justify-start shrink-0 relative mx-auto mt-6">
            <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] lg:text-[18px] leading-[50%] lg:leading-[100%]  font-heading-5-subheading-font-weight relative">
                Payment Method
            </div>
            <div className="w-full lg:w-[50%] flex flex-col gap-4 items-start justify-start shrink-0 relative">
                <select className="text-gray-500 bg-white rounded-lg border-solid border-grey-border border p-4 flex flex-row gap-2 items-center justify-start shrink-0 w-full lg:w-[95%] relative">
                    <option value="">Choose Payment Method</option>
                    <option value="">Bank Transfer</option>
                    <option value="">Online Payment</option>
                </select>
            </div>
        </div>
    </div>

    </>
  )
}

export default CheckoutDetailInfo