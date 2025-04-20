import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '@/config';

// Create context
const ReviewContext = createContext();

// Hook to use the context easily
export const useReview = () => useContext(ReviewContext);

// Provider component
export const ReviewProvider = ({ children }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 🟩 Get approved reviews for a specific course
  const fetchReviews = async (courseId) => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE_URL}/api/reviews/courses/${courseId}/reviews`);
      setReviews(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch reviews');
    } finally {
      setLoading(false);
    }
  };

  // 🟨 Add a new review
  const addReview = async (courseId, reviewData) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/api/reviews/courses/${courseId}/reviews`, reviewData, {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to add review');
    }
  };

  // 🟧 Edit a review
  const editReview = async (courseId, reviewId, updatedData) => {
    try {
      const res = await axios.put(`${API_BASE_URL}/api/reviews/courses/${courseId}/reviews/${reviewId}`, updatedData, {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to edit review');
    }
  };

  // 🟥 Delete a review
  const deleteReview = async (courseId, reviewId) => {
    try {
      const res = await axios.delete(`${API_BASE_URL}/api/reviews/courses/${courseId}/reviews/${reviewId}`, {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to delete review');
    }
  };

  // 🟦 Approve/disapprove review (Admin only)
  const approveReview = async (courseId, reviewId, approved) => {
    try {
      const res = await axios.put(
        `${API_BASE_URL}/api/reviews/courses/${courseId}/reviews/${reviewId}/approve`,
        { approved },
        { withCredentials: true }
      );
      return res.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to approve review');
    }
  };

  return (
    <ReviewContext.Provider
      value={{
        reviews,
        loading,
        error,
        fetchReviews,
        addReview,
        editReview,
        deleteReview,
        approveReview,
      }}
    >
      {children}
    </ReviewContext.Provider>
  );
};
