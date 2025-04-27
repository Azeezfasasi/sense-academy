import React, { useState } from 'react';
import ReviewStats from '../dashboard/ReviewStats';
import ReviewSettings from './ReviewSettings';
import AdminReviews from '../account-components/AdminReview';

const tabs = [
  'Reviews',
  'Commission',
  'Certificate',
  'Chapters',
  'Promotion',
  'Detail',
  'Settings',
];

const CourseSettingsHeader = () => {
  const [activeTab, setActiveTab] = useState('Reviews');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Reviews':
        return <div>
            <ReviewStats />
            {/* <ReviewSettings /> */}
            <AdminReviews />
        </div>;
      case 'Commission':
        return <div>
            
        </div>;
      case 'Certificate':
        return <div>Customer content goes here</div>;
      case 'Chapters':
        return <div>Chapters content goes here</div>;
      case 'Promotion':
        return <div>Promotion content goes here</div>;
      case 'Detail':
        return <div>Detail content goes here</div>;
      case 'Settings':
        return <div>Settings content goes here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Tabs */}
      <div className="border-b border-gray-300 flex gap-2 overflow-x-auto whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pt-4 px-3 pb-4 font-semibold text-sm ${
              activeTab === tab
                ? 'border-b-2 border-primary-500 text-primary-500'
                : 'text-gray-600 hover:text-primary-500'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default CourseSettingsHeader;
