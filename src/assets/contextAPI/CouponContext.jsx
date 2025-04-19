import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';
import API_BASE_URL from '../../config';

const CouponContext = createContext();

export const useCoupon = () => useContext(CouponContext);

export const CouponProvider = ({ children }) => {
  const [coupons, setCoupons] = useState([]);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch all coupons
const fetchCoupons = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/api/coupons`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
    //   console.log('Fetched Coupons:', response.data); 
      setCoupons(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching coupons:', err.response || err.message); // Debugging: Log the error
      setError(err.response?.data?.message || 'Failed to fetch coupons');
    } finally {
      setLoading(false);
    }
  };

  // Apply a coupon
  const applyCoupon = async (code) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/coupons/apply`, { code }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
        },
      });
      setAppliedCoupon(response.data);
      setError(null);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to apply coupon');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Validate a coupon
  const validateCoupon = async (code) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/api/coupons/validate`, { code }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
        },
      });
      setError(null);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to validate coupon');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Update a coupon
  const updateCoupon = async (id, updatedData) => {
    setLoading(true);
    try {
      const response = await axios.put(`${API_BASE_URL}/api/coupons/${id}`, updatedData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update coupon');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Delete a coupon (Admin only)
const deleteCoupon = async (id) => {
    setLoading(true);
    try {
      const response = await axios.delete(`${API_BASE_URL}/api/coupons/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
        },
      });
      setCoupons((prevCoupons) => prevCoupons.filter((coupon) => coupon._id !== id));
      setError(null);
    } catch (err) {
      console.error('Error deleting coupon:', err.response || err.message); // Debugging: Log the error
      setError(err.response?.data?.message || 'Failed to delete coupon');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const disableCoupon = async (id) => {
    setLoading(true);
    try {
      const response = await axios.patch(`${API_BASE_URL}/api/coupons/${id}/disable`, {}, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token for authentication
        },
      });
      setCoupons((prevCoupons) =>
        prevCoupons.map((coupon) =>
          coupon._id === id ? { ...coupon, isActive: false } : coupon
        )
      );
      setError(null);
    } catch (err) {
      console.error('Error disabling coupon:', err.response || err.message); // Debugging: Log the error
      setError(err.response?.data?.message || 'Failed to disable coupon');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <CouponContext.Provider
      value={{
        coupons,
        appliedCoupon,
        loading,
        error,
        fetchCoupons,
        updateCoupon,
        applyCoupon,
        validateCoupon,
        deleteCoupon,
        disableCoupon,
      }}
    >
      {children}
    </CouponContext.Provider>
  );
};