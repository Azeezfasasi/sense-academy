import { Tabs } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import CourseDetailDescription from './CourseDetailDescription';
import CourseIntructorDetails from './CourseIntructorDetails';
import CourseDetailSylabus from './CourseDetailSylabus';
import CourseDetailsReview from './CourseDetailsReview';
import CourseDetailMaterials from './CourseDetailMaterials';

const CourseDetailsButtons = () => (
  <div className="w-full mx-auto mt-6 lg:mt-12 border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
    <Tabs defaultActiveKey="1" className="custom-tabs">
      <Tabs.Tab eventKey="1" title="Description" className="custom-tab">
        <div className="p-0">
          <CourseDetailDescription />
        </div>
      </Tabs.Tab>
      <Tabs.Tab eventKey="2" title="Syllabus">
        <div className="p-0 lg:p-2">
          <CourseDetailSylabus />
        </div>
      </Tabs.Tab>
      <Tabs.Tab eventKey="3" title="Instructor">
        <div className="p-4">
          <CourseIntructorDetails />
        </div>
      </Tabs.Tab>
      <Tabs.Tab eventKey="5" title="Reviews">
        <div className="p-0 lg:p-4">
          <CourseDetailsReview />
        </div>
      </Tabs.Tab>
    </Tabs>
  </div>
);

export default CourseDetailsButtons;