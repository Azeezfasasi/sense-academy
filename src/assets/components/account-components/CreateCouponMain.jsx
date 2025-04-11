import React, { useState } from 'react';

const CreateCouponMain = () => {
  const [form, setForm] = useState({
    code: '',
    discount: '',
    type: 'percentage',
    expiry: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Coupon created:', form);
    // Add your API submission logic here
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Create New Coupon</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Coupon Code</label>
          <input
            type="text"
            name="code"
            value={form.code}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-2 bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Discount Amount</label>
          <input
            type="number"
            name="discount"
            value={form.discount}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-2 bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Discount Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full border rounded-xl px-4 py-2 bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="percentage">Percentage</option>
            <option value="fixed">Fixed</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Expiry Date</label>
          <input
            type="date"
            name="expiry"
            value={form.expiry}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-2 bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl font-semibold transition duration-300"
        >
          Create Coupon
        </button>
      </form>
    </div>
  );
};

export default CreateCouponMain;
