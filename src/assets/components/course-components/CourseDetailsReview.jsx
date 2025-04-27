import React, { useContext, useEffect, useState } from 'react';
import { Rate } from 'rsuite';
import star from '../../image/star.svg';
import { useParams } from 'react-router-dom';
import { useReview } from '../../contextAPI/ReviewContext';
import { ProfileContext } from '@/assets/contextAPI/ProfileContext';
ProfileContext

function CourseDetailsReview() {
  const { courseId } = useParams();
  const { reviews, loading: reviewsLoading, error, fetchReviews, addReview } = useReview();
  const { user, loading: userLoading } = useContext(ProfileContext); // Get user info if available
  const [newRating, setNewRating] = useState(5);
  const [newReviewText, setNewReviewText] = useState('');

  useEffect(() => {
    if (courseId) {
      fetchReviews(courseId);
    }
  }, [courseId, fetchReviews]);

  const handleAddReview = async (e) => {
    e.preventDefault();
    console.log('Course ID:', courseId);

    if (!user?._id) {
      console.error('User must be logged in to add a review.');
      alert('You must be logged in to add a review.');
      return;
    }
  
    const reviewData = {
      rating: newRating,
      review: newReviewText,
    };
  
    try {
      const response = await addReview(courseId, reviewData);
      console.log('Review added:', response);
      setNewRating(5);
      setNewReviewText('');
      fetchReviews(courseId);
    } catch (err) {
      console.error('Error adding review:', err.message);
      if (err.message === 'Not authorized') {
        alert('You are not authorized to add a review. Please log in.');
      } else {
        alert('Failed to add review. Please try again.');
      }
    }
  };

  // if (error) {
  //   return <div>Error loading reviews: {error}</div>;
  // }

  // Calculate average rating and rating percentages (you might need to adjust based on your backend response)
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;

  const ratingCounts = reviews.reduce((acc, review) => {
    acc[review.rating] = (acc[review.rating] || 0) + 1;
    return acc;
  }, {});

  const getRatingPercentage = (rating) => {
    const count = ratingCounts[rating] || 0;
    return reviews.length > 0 ? (count / reviews.length) * 100 : 0;
  };

  return (
    <>
      <div className="w-full flex flex-col lg:flex-row gap-8 lg:gap-[30px] items-start justify-start shrink-0 relative overflow-x-hidden">
        {/* Rating percentages */}
        <div className="flex flex-col gap-4 items-start justify-start shrink-0 relative">
          <div className="flex flex-row gap-2 justify-start shrink-0 relative">
            <div className="flex flex-row gap-[3px] items-center justify-start shrink-0 relative">
              <div className='w-[100%]'>
                <Rate defaultValue={Math.round(averageRating)} size='xs' color="yellow" readOnly />
              </div>
              <div className="text-grey-900 text-left font-['Inter-SemiBold',_sans-serif] text-xl leading-[140%] font-semibold relative">
                {averageRating.toFixed(1)}
              </div>
            </div>
            <div className="text-grey-700 text-left font-['Inter-Medium',_sans-serif] text-sm leading-5 font-medium relative w-[123px] flex items-center justify-start">
              {reviews.length} reviews
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div className="flex flex-row gap-2 items-center justify-start shrink-0 relative" key={rating}>
                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative">
                  <div className='w-[100%]'>
                    <Rate defaultValue={rating} size='xs' color="yellow" readOnly />
                  </div>
                </div>
                <div className="text-grey-700 text-left font-['Poppins-Regular',_sans-serif] text-sm leading-[120%] font-normal relative flex items-center justify-start">
                  {getRatingPercentage(rating).toFixed(0)}%
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rating Review */}
        <div className="w-[85%] flex flex-col gap-4 items-start justify-start shrink-0 relative">
          {reviews.map((review) => (
            <div className="flex flex-col items-start bg-white rounded-2xl border-solid border-grey-border border relative overflow-hidden p-2 w-full lg:w-[78%]" key={review._id}>
              {/* User Profile Image and Name */}
              <div className="flex flex-row gap-3 items-center justify-start">
                <div className="w-full flex flex-row gap-4 items-center justify-start shrink-0 relative">
                  <img
                    className="rounded-[50%] shrink-0 w-[60px] h-[60px] relative"
                    style={{ objectFit: "cover" }}
                    src={review.user?.profileImage}
                    alt={`Profile of ${review.user?.firstName} ${review.user?.lastName}`}
                  />
                  {/* Star rating and Name */}
                  <div className='flex flex-col gap-0 items-start justify-start relative'>
                    <div className="flex flex-row gap-1 items-center justify-start shrink-0 relative">
                      <div className="flex flex-row gap-0 items-center justify-start shrink-0 relative">
                        <img
                          className="shrink-0 w-[19.2px] h-[19.2px] relative overflow-visible"
                          src={star}
                          alt="Star icon"
                        />
                      </div>
                      <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative flex items-center justify-start">
                        {review.rating.toFixed(1)}
                      </div>
                    </div>
                    <div className="text-grey-900 text-left font-heading-5-subheading-font-family text-[16px] leading-heading-5-subheading-line-height font-heading-5-subheading-font-weight relative w-full flex items-center justify-start">
                        {review.user?.firstName} {review.user?.lastName}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start shrink-0 relative w-full">
                <div className='w-full mt-[10px]'>{review.comment}</div>
                <div className="w-[75%] text-grey-700 text-[12px] font-[400] relative flex items-start justify-end italic">
                  Reviewed on {new Date(review.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          ))}
          {reviews.length > 5 && (
            <button className="rounded-lg border-solid border-grey-900 border pt-1 lg:pt-2 pr-6 pb-1 lg:pb-2 pl-6 flex flex-row gap-1.5 items-center justify-center shrink-0 relative">
              <div className="text-grey-900 text-left font-button-text-font-family text-[13px] lg:text-[14px] leading-button-text-line-height font-button-text-font-weight relative">
                View more Reviews
              </div>
            </button>
          )}
        </div>
      </div>

      {/*Add a Review */}
      <div className='border border-grey-border rounded-2xl bg-white w-full lg:w-[40%] flex flex-col gap-4 items-start justify-start relative mx-auto px-5 py-6 mt-8'>
        <p className='text-[22px] font-bold'>Add a Review</p>
        <form className='w-full flex flex-col gap-4 items-start justify-start relative' onSubmit={handleAddReview}>
          <Rate size='sm' color="yellow" value={newRating} onChange={setNewRating} />
          {user?.firstName && user?.lastName ? (
            <input
              type="text"
              placeholder='Your Name'
              className='border p-3 w-full rounded-md'
              value={`${user.firstName} ${user.lastName}`}
              readOnly
            />
          ) : (
            <input
              type="text"
              placeholder='Enter your name'
              className='border p-3 w-full rounded-md'
              // You might want to manage this state if users can input their name
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <textarea
            className='border border-grey-border rounded-lg w-full h-[100px] p-2 mt-0'
            placeholder='Write your review here...'
            value={newReviewText}
            onChange={(e) => setNewReviewText(e.target.value)}
            required
          ></textarea>
          <button type="submit" className='bg-blue-700 text-white px-4 py-2 rounded-md'>Submit Review</button>
        </form>
      </div>
    </>
  );
}

export default CourseDetailsReview;