import React, {useContext} from 'react';
import { Sidenav, Nav } from 'rsuite';
import { Link, useLocation } from 'react-router-dom';
import GearIcon from '@rsuite/icons/Gear';
import StorageIcon from '@rsuite/icons/Storage';
import UserBadgeIcon from '@rsuite/icons/UserBadge';
import PeoplesMapIcon from '@rsuite/icons/PeoplesMap';
import EmailIcon from '@rsuite/icons/Email';
import ModelIcon from '@rsuite/icons/Model';
import ExitIcon from '@rsuite/icons/Exit';
import TaskIcon from '@rsuite/icons/Task';
import DonutChartIcon from '@rsuite/icons/DonutChart';
import CheckOutlineIcon from '@rsuite/icons/CheckOutline';
import DashboardIcon from '@rsuite/icons/Dashboard';
import 'rsuite/dist/rsuite.min.css';
import share from '../../image/share.svg';
import { ProfileContext } from '@/assets/contextAPI/ProfileContext';
import LogoutComponent from './LogoutComponent';
import profileplaceholder from '../../image/profileplaceholder.png';

const AccountMenu = () => {
  const { user, loading } = useContext(ProfileContext);
  
      if (loading) {
          return <div>Loading...</div>; // Or a more sophisticated loading spinner
      }

  const location = useLocation();

  const pathToKeyMap = {
    '/app/dashboard': '1',
    '/app/mycourses': '2',
    '/app/assessment': '3',
    '/app/message': '4',
    '/app/certificates': '5',
    '/app/myreviews': '6',
    '/app/managecourses': '7-1',
    '/app/createcourses': '7-2',
    '/app/coursesettings': '7-3',
    '/app/manageusers': '8-1',
    '/app/createuser': '8-2',
    '/app/managecoupons': '9-1',
    '/app/createcoupon': '9-2',
    '/app/studentpaymenthistory': '10',
    '/app/adminpaymenthistory': '11',
    '/app/settings': '12',
    '/app/profile': '12-1',
  };

  const activeKey = pathToKeyMap[location.pathname] || '1'; // fallback to '1'

  return (
    <div className='hidden lg:block' style={{ width: 240 }}>
      <Sidenav>
        <Sidenav.Body>
          <div className="bg-grey-background rounded-2xl pt-6 pb-6 flex flex-col gap-6 items-center justify-start relative">
            <div className="flex flex-col gap-4 items-center justify-start shrink-0 relative">
              <img className="rounded-[50%] shrink-0 w-40 h-40 relative"
                      src={user.profileImage || profileplaceholder}
                      />
              <div className="text-grey-900 text-left font-heading-4-subheading-font-family text-heading-4-subheading-font-size leading-heading-4-subheading-line-height font-heading-4-subheading-font-weight relative flex items-center justify-start">
              {user.firstName} {user.lastName}
              </div>
              <Link to="/app/profile" className="bg-white rounded-lg border-solid border-grey-border border pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-1.5 items-center justify-center shrink-0 h-12 relative no-underline hover:no-underline">
                  <div className="text-grey-900 text-left font-button-text-font-family text-button-text-font-size leading-button-text-line-height font-button-text-font-weight relative">
                      Update Profile
                  </div>
                  <img className="shrink-0 w-6 h-6 relative overflow-visible"
                      src={share}
                  />
              </Link>
            </div>
            <div
                className="border-solid border-grey-border border-t border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[274px] h-0 relative"
            ></div>
          </div>
          <Nav activeKey={activeKey}>
            <Nav.Item as={Link} to="/app/dashboard" eventKey="1" icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item as={Link} to="/app/mycourses" eventKey="2" icon={<StorageIcon />}>
              My Courses
            </Nav.Item>
            <Nav.Item as={Link} to="/app/assessment" eventKey="3" icon={<TaskIcon />}>
              Assessment
            </Nav.Item>
            <Nav.Item as={Link} to="/app/message" eventKey="4" icon={<EmailIcon />}>
              Notification
            </Nav.Item>
            {user?.role === "Admin" && (
            <Nav.Item as={Link} to="/app/message" eventKey="4" icon={<EmailIcon />}>
              Send Notification
            </Nav.Item>
            )}
            <Nav.Item as={Link} to="/app/certificates" eventKey="5" icon={<UserBadgeIcon />}>
              Certificates
            </Nav.Item>
            <Nav.Item as={Link} to="/app/myreviews" eventKey="6" icon={<ModelIcon />}>
              My Reviews
            </Nav.Item>

            {/* For Courses */}
            {user?.role === "Admin" && (
              <Nav.Menu placement="rightStart" eventKey="7" title="Manage Courses" icon={<StorageIcon />} >
                <Nav.Item as={Link} to="/app/managecourses" eventKey="7-1">
                  Manage Courses
                </Nav.Item>
                <Nav.Item as={Link} to="/app/createcourses" eventKey="7-2">
                  Create a Course
                </Nav.Item>
                <Nav.Item as={Link} to="/app/coursesettings" eventKey="7-3">
                  Course Settings
                </Nav.Item>
              </Nav.Menu>
            )}

            {/* For User Management */}
            {user?.role === "Admin" && (
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
            )}

            {/* For Coupon Management */}
            {user?.role === "Admin" && (
              <Nav.Menu placement="rightStart" eventKey="9" title="Manage Coupons" icon={<DonutChartIcon />} >
                <Nav.Item as={Link} to="/app/managecoupons" eventKey="9-1">
                  All Coupons
                </Nav.Item>
                <Nav.Item as={Link} to="/app/createcoupon" eventKey="9-2">
                  Create a Coupon
                </Nav.Item>
              </Nav.Menu>
            )}

            {["Student"].includes(user?.role) && (
            <Nav.Item as={Link} to="/app/studentpaymenthistory" eventKey="10" icon={<CheckOutlineIcon />}>
              Payment History
            </Nav.Item>
            )}

            {user?.role === "Admin" && (
            <Nav.Item as={Link} to="/app/adminpaymenthistory" eventKey="11" icon={<CheckOutlineIcon />}>
              Payment History
            </Nav.Item>
            )}

            {/* For settings */}
            <Nav.Menu placement="rightStart" eventKey="12" title="Settings" icon={<GearIcon />} >
              <Nav.Item as={Link} to="/app/settings" eventKey="12-1">
                Settings
              </Nav.Item>
              <Nav.Item as={Link} to="/app/profile" eventKey="12-2">
                Profile
              </Nav.Item>
              <Nav.Item as={Link} to="" eventKey="10-3">
                Applications
              </Nav.Item>
              <Nav.Item as={Link} to="" eventKey="10-4">
                Channels
              </Nav.Item>
              <Nav.Item as={Link} to="" eventKey="10-5">
                Versions
              </Nav.Item>
            </Nav.Menu>

            <Nav.Item icon={<ExitIcon />} style={{ display: "flex", paddingLeft: "47px"}}>
              <LogoutComponent />
            </Nav.Item>


          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default AccountMenu;
