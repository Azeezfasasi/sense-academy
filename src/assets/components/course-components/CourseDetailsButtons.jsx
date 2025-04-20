import React, {useState, useEffect} from 'react'
import { Tabs } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import CourseDetailDescription from './CourseDetailDescription';
import CourseIntructorDetails from './CourseIntructorDetails';
import CourseDetailsReview from './CourseDetailsReview';
import { useParams } from 'react-router-dom';
import API_BASE_URL from '@/config';
import axios from 'axios';

function CourseDetailsButtons() {
  const { courseId } = useParams();
  const [courseDetails, setCourseDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/courses/${courseId}`);
        setCourseDetails(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDetails();
  }, [courseId]);

  if (loading) {
    return <div>Loading course details...</div>;
  }

  if (error) {
    return <div>Error loading course details: {error}</div>;
  }

  if (!courseDetails) {
    return <div>Course details not found.</div>;
  }
  return (
    <>
    <div className="w-full mx-auto mt-6 lg:mt-12 border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
      <Tabs defaultActiveKey="1" className="custom-tabs">
        <Tabs.Tab eventKey="1" title="Description" className="custom-tab">
          <div className="p-0">
            <CourseDetailDescription />
          </div>
        </Tabs.Tab>
        <Tabs.Tab eventKey="3" title="Instructor">
          <div className="p-4">
            <CourseIntructorDetails creator={courseDetails.creator} enrolledUsersCount={courseDetails.enrolledUsers?.length} />
          </div>
        </Tabs.Tab>
        <Tabs.Tab eventKey="5" title="Reviews">
          <div className="p-0 lg:p-4">
            <CourseDetailsReview courseId={courseId} />
          </div>
        </Tabs.Tab>
      </Tabs>
    </div>
    </>
  )
}

export default CourseDetailsButtons