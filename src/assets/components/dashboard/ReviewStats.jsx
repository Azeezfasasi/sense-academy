import React, { useContext, useEffect, useState } from 'react';
import { ProfileContext } from '@/assets/contextAPI/ProfileContext';
import axios from 'axios';
import API_BASE_URL from '@/config';

function ReviewStats() {
  const { user } = useContext(ProfileContext);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    if (user?.role === 'Admin') {
      fetchAllReviews();
    }
  }, [user]);

  // Calculate totals
  const totalReviews = reviews.length;
  const starCounts = [1, 2, 3, 4, 5].map(
    (star) => reviews.filter((review) => review.rating === star).length
  );

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-red-500">{error}</div>;

  return (
    <>
      {user?.role === 'Admin' && (
        <div className="flex flex-col gap-2.5 items-start justify-end shrink-0 relative overflow-hidden mt-[70px] md:mt-[40px] mb-[50px] md:mb-0">
          <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative">
            Reviews
          </div>
          <div className="w-full flex flex-row gap-2 flex-wrap items-start justify-start relative overflow-hidden">
            {/* Total Reviews */}
            <div className="bg-[#ffffff] rounded-lg border-solid border-grey-border border shrink-0 w-[47%] lg:w-[172px] h-[100px] relative overflow-hidden">
              <div className="flex flex-col gap-1 items-start justify-start absolute left-6 top-[25px]">
                <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                  Total Reviews
                </div>
                <div className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative">
                  <div className="text-grey-900 text-left font-heading-3-font-family text-heading-3-font-size leading-heading-3-line-height font-heading-3-font-weight relative">
                    {totalReviews}
                  </div>
                </div>
              </div>
            </div>

            {/* Star Ratings */}
            {starCounts.map((count, index) => (
              <div
                key={index}
                className="bg-[#ffffff] rounded-lg border-solid border-grey-border border shrink-0 w-[47%] lg:w-[172px] h-[100px] relative overflow-hidden"
              >
                <div className="flex flex-col gap-1 items-start justify-start absolute left-6 top-[25px]">
                  <div className="text-grey-700 text-left font-small-text-font-family text-small-text-font-size leading-small-text-line-height font-small-text-font-weight relative">
                    {index + 1} star reviews
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start shrink-0 relative">
                    <div className="text-grey-900 text-left font-heading-3-font-family text-heading-3-font-size leading-heading-3-line-height font-heading-3-font-weight relative">
                      {count}
                    </div>
                    <div
                      className={`${
                        index === 0
                          ? 'bg-error-500'
                          : index === 1
                          ? 'bg-warning-600'
                          : 'bg-warning-400'
                      } rounded pt-1 pr-2.5 pb-1 pl-2.5 flex flex-row gap-2 items-center justify-center shrink-0 relative`}
                    >
                      <div className="text-error-50 text-left font-label-font-family text-label-font-size font-label-font-weight relative">
                        {index + 1}.0
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ReviewStats;