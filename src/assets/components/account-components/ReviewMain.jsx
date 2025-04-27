import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Rate } from 'rsuite';
import API_BASE_URL from '@/config';

const UserReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editingReview, setEditingReview] = useState(null);
  const [updatedComment, setUpdatedComment] = useState('');
  const [updatedRating, setUpdatedRating] = useState(5);

  // Fetch user reviews
  const fetchUserReviews = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const res = await axios.get(`${API_BASE_URL}/api/reviews/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('Reviews:', res.data); // Debugging log
      setReviews(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch reviews');
    } finally {
      setLoading(false);
    }
  };

  // Update a review
  const handleUpdateReview = async (reviewId, courseId) => {
    if (!courseId) {
      alert('Course ID is missing for this review');
      return;
    }
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
      // Update the review in the local state
      setReviews((prevReviews) =>
        prevReviews.map((review) =>
          review._id === reviewId ? { ...review, ...res.data.review } : review
        )
      );
      setEditingReview(null); // Exit editing mode
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to update review');
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingReview(null);
    setUpdatedComment('');
    setUpdatedRating(5);
  };

  useEffect(() => {
    fetchUserReviews();
  }, []);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-red-500">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Reviews</h1>
      {reviews.length === 0 ? (
        <div className="text-center py-4">You have not submitted any reviews yet.</div>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
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
                      {review.course?._id ? (
                        <button
                          className="bg-blue-500 text-white px-4 py-2 rounded-md"
                          onClick={() => handleUpdateReview(review._id, review.course._id)}
                        >
                          Save
                        </button>
                      ) : (
                        <div className="text-red-500">Course ID is missing for this review</div>
                      )}
                      <button
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-gray-800">{review.comment}</p>
                    <button
                      className="text-blue-500 text-sm mt-2"
                      onClick={() => {
                        setEditingReview(review._id);
                        setUpdatedComment(review.comment);
                        setUpdatedRating(review.rating);
                      }}
                    >
                      Edit Review
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserReviews;