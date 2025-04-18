import React, { useState } from 'react';
import { useCoupon } from '@/assets/contextAPI/CouponContext';
import API_BASE_URL from '../../../config';

const CreateCouponMain = () => {
  const { fetchCoupons } = useCoupon(); // Fetch coupons after creating a new one
  const [form, setForm] = useState({
    code: '',
    discount: '',
    type: 'Percentage',
    expiryDate: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/api/coupons`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
        },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        if (response.status === 403) {
          throw new Error('You do not have permission to create a coupon.');
        }
        throw new Error('Failed to create coupon');
      }
      alert('Coupon created successfully!');
      setForm({ code: '', discount: '', type: 'Percentage', expiryDate: '' }); // Reset form
      fetchCoupons(); // Refresh the coupon list
    } catch (err) {
      setError(err.message || 'Failed to create coupon');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Create New Coupon</h2>
      {error && <div className="text-red-600 mb-4">{error}</div>}
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
            <option value="Percentage">Percentage</option>
            <option value="Fixed">Fixed</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">Expiry Date</label>
          <input
            type="date"
            name="expiryDate"
            value={form.expiryDate}
            onChange={handleChange}
            required
            className="w-full border rounded-xl px-4 py-2 bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-xl font-semibold transition duration-300"
        >
          {loading ? 'Creating...' : 'Create Coupon'}
        </button>
      </form>
    </div>
  );
};

export default CreateCouponMain;
