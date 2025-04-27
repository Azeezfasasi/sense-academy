import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Rate } from 'rsuite';
import API_BASE_URL from '@/config';

const AdminReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingReview, setEditingReview] = useState(null);
  const [updatedComment, setUpdatedComment] = useState('');
  const [updatedRating, setUpdatedRating] = useState(5);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  // Fetch all reviews
  const fetchAllReviews = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const res = await axios.get(`${API_BASE_URL}/api/reviews/courses/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReviews(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch reviews');
    } finally {
      setLoading(false);
    }
  };

  // Update a review
  const handleUpdateReview = async (reviewId, courseId) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.put(
        `${API_BASE_URL}/api/reviews/courses/${courseId}/reviews/${reviewId}`,
        { rating: updatedRating, comment: updatedComment },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review._id === reviewId
            ? { ...review, rating: res.data.review.rating, comment: res.data.review.comment }
            : review
        )
      );
      setEditingReview(null); // Exit editing mode
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update review');
    }
  };

  // Delete a review
  const handleDeleteReview = async (reviewId, courseId) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this review?');
    if (!confirmDelete) {
      return; // Exit if the admin cancels the action
    }
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${API_BASE_URL}/api/reviews/courses/${courseId}/reviews/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setReviews((prevReviews) => prevReviews.filter((review) => review._id !== reviewId));
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete review');
    }
  };

  useEffect(() => {
    fetchAllReviews();
  }, []);

  // Pagination logic
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Reviews</h1>
      <p className="text-gray-600 mb-4">Total Reviews: {reviews.length}</p>
      {currentReviews.length === 0 ? (
        <div className="text-center py-4">No reviews available.</div>
      ) : (
        <div className="space-y-4">
          {currentReviews.map((review) => (
            <div
              key={review._id}
              className="bg-white shadow-md rounded-lg p-4 border border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">{review.course?.title || 'Course Title'}</h2>
                  <div className="flex items-center gap-2">
                    <Rate
                      defaultValue={review.rating}
                      size="xs"
                      color="yellow"
                      readOnly
                    />
                    <span className="text-gray-600 text-sm">
                      {review.rating.toFixed(1)}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-500">
                  {new Date(review.createdAt).toLocaleDateString()}
                </div>
              </div>
              <div className="mt-2">
                {editingReview === review._id ? (
                  <div className="space-y-2">
                    <textarea
                      className="w-full border border-gray-300 rounded-md p-2"
                      value={updatedComment}
                      onChange={(e) => setUpdatedComment(e.target.value)}
                      placeholder="Update your review"
                    ></textarea>
                    <Rate
                      size="sm"
                      color="yellow"
                      value={updatedRating}
                      onChange={setUpdatedRating}
                    />
                    <div className="flex items-center gap-2">
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded-md"
                        onClick={() => handleUpdateReview(review._id, review.course._id)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                        onClick={() => setEditingReview(null)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-800">{review.comment}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="text-blue-500 text-sm"
                        onClick={() => {
                          setEditingReview(review._id);
                          setUpdatedComment(review.comment);
                          setUpdatedRating(review.rating);
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-500 text-sm"
                        onClick={() => handleDeleteReview(review._id, review.course._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          className={`px-4 py-2 bg-gray-300 text-gray-700 rounded-md ${
            currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Back
        </button>
        <p className="text-gray-600">
          Page {currentPage} of {totalPages}
        </p>
        <button
          className={`px-4 py-2 bg-gray-300 text-gray-700 rounded-md ${
            currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AdminReviews;