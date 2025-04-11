import React from 'react';
import { Sidenav, Nav } from 'rsuite';
import { Link } from 'react-router-dom';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import GearIcon from '@rsuite/icons/Gear';
import StorageIcon from '@rsuite/icons/Storage';
import UserBadgeIcon from '@rsuite/icons/UserBadge';
import PeoplesMapIcon from '@rsuite/icons/PeoplesMap';
import EmailIcon from '@rsuite/icons/Email';
import ModelIcon from '@rsuite/icons/Model';
import TaskIcon from '@rsuite/icons/Task';
import DonutChartIcon from '@rsuite/icons/DonutChart';
import 'rsuite/dist/rsuite.min.css';
import profileimage from '../../image/profileimage.svg';
import share from '../../image/share.svg';

const AccountMenu = () => {
  const [expanded, setExpanded] = React.useState(true);
  const [activeKey, setActiveKey] = React.useState('1');

  return (
    <div className='hidden lg:block' style={{ width: 240 }}>
      <Sidenav  defaultOpenKeys={['6']}>
        <Sidenav.Body>
          <div className="bg-grey-background rounded-2xl pt-6 pb-6 flex flex-col gap-6 items-center justify-start relative overflow-x-hidden">
            <div className="flex flex-col gap-4 items-center justify-start shrink-0 relative">
              <img className="rounded-[50%] shrink-0 w-40 h-40 relative"
                      src={profileimage}
                      />
              <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative flex items-center justify-start">
                John Doe
              </div>
              <button className="bg-white rounded-lg border-solid border-grey-border border pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center shrink-0 h-12 relative">
                  <div className="text-grey-900 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                      Share Profile
                  </div>
                  <img className="shrink-0 w-6 h-6 relative overflow-visible"
                      src={share}
                  />
              </button>
            </div>
            <div
                className="border-solid border-grey-border border-t border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[274px] h-0 relative"
            ></div>
          </div>
          <Nav activeKey={activeKey} onSelect={setActiveKey}>
            <Nav.Item eventKey="0">
            </Nav.Item>
            <Nav.Item as={Link} to="/app/myaccount" eventKey="1" icon={<StorageIcon />}>
              My Courses
            </Nav.Item>
            <Nav.Item as={Link} to="/app/assessment" eventKey="2" icon={<TaskIcon />}>
              Assessment
            </Nav.Item>
            <Nav.Item as={Link} to="/app/message" eventKey="3" icon={<EmailIcon />}>
              Message
            </Nav.Item>
            <Nav.Item as={Link} to="/app/certificates" eventKey="4" icon={<UserBadgeIcon />}>
              Certificates
            </Nav.Item>
            <Nav.Item as={Link} to="/app/myreviews" eventKey="5" icon={<ModelIcon />}>
              My Reviews
            </Nav.Item>

            {/* For Courses */}
            <Nav.Menu placement="rightStart" eventKey="7" title="Manage Courses" icon={<StorageIcon />} >
              <Nav.Item as={Link} to="/app/managecourses" eventKey="7-1">
                Manage Courses
              </Nav.Item>
              <Nav.Item as={Link} to="/app/createcourses" eventKey="7-2">
                Create a Course
              </Nav.Item>
              <Nav.Item as={Link} to="" eventKey="7-3">
                Assign Course
              </Nav.Item>
            </Nav.Menu>

            {/* For User Management */}
            <Nav.Menu placement="rightStart" eventKey="8" title="Manage Users" icon={<PeoplesMapIcon />} >
              <Nav.Item as={Link} to="/app/manageusers" eventKey="8-1">
                All Users
              </Nav.Item>
              <Nav.Item as={Link} to="/app/createuser" eventKey="8-2">
                Create a User
              </Nav.Item>
              <Nav.Item as={Link} to="" eventKey="8-3">
                User Role
              </Nav.Item>
            </Nav.Menu>

            {/* For Coupon Management */}
            <Nav.Menu placement="rightStart" eventKey="9" title="Manage Coupons" icon={<DonutChartIcon />} >
              <Nav.Item as={Link} to="/app/managecoupons" eventKey="9-1">
                All Coupons
              </Nav.Item>
              <Nav.Item as={Link} to="/app/createcoupon" eventKey="9-2">
                Create a Coupon
              </Nav.Item>
            </Nav.Menu>

            {/* For settings */}
            <Nav.Menu placement="rightStart" eventKey="6" title="Settings" icon={<GearIcon />} >
              <Nav.Item as={Link} to="/app/profile" eventKey="6-1">
                Profile
              </Nav.Item>
              <Nav.Item as={Link} to="" eventKey="6-2">
                Applications
              </Nav.Item>
              <Nav.Item as={Link} to="" eventKey="6-3">
                Channels
              </Nav.Item>
              <Nav.Item as={Link} to="" eventKey="6-4">
                Versions
              </Nav.Item>
            </Nav.Menu>

          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default AccountMenu;
