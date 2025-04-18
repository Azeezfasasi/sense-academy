import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./app/Home";
import SignUp from "./SignUp";
import Login from "./Login";
import CourseCategory from "./app/CourseCategory";
import CouseList from "./app/CouseList";
import Cart from "./app/Cart";
import Checkout from "./app/Checkout";
import CourseSingle from "./app/CourseDetails";
import MyAccount from "./app/MyCourses";
import MyCourses from "./app/MyCoursesOLD";
import Message from "./app/Message";
import Certificates from "./app/Certificates";
import MyReviews from "./app/MyReviews";
import Assessment from "./app/Assessment";
import Profile from "./app/Profile";
import CoursePreview from "./app/CoursePreview";
import ManageCourses from "./app/ManageCourses";
import CreateCourse from "./app/CreateCourse";
import ManageUsers from "./app/ManageUsers";
import CreateUser from "./app/CreateUser";
import ManageCoupons from "./app/ManageCoupons";
import CreateCoupon from "./app/CreateCoupon";
import ScrollToTop from './assets/components/ScrollToTop'
import Settings from "./app/Settings";
import Dashboard from "./app/Dashboard";
import CourseSettings from "./app/CourseSettings";
import ResetPassword from "./ResetPassword";
import { ProfileProvider } from "./assets/contextAPI/ProfileContext";
import PrivateRoutes from "./assets/components/PrivateRoutes";
import { CourseProvider } from "./assets/contextAPI/CourseContext";
import { CartProvider } from "./assets/contextAPI/CartContext";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Success from "./app/Success";
import { CouponProvider } from "./assets/contextAPI/CouponContext";
import StudentPaymentHistory from "./app/StudentPaymentHistory";
import AdminPaymentHistory from "./app/AdminPaymentHistory";
import { PaymentProvider } from "./assets/contextAPI/PaymentContext";

function App() {
  return (
    <>
    <Router>
      <ProfileProvider>
        <CourseProvider>
          <CartProvider>
            <CouponProvider>
              <PaymentProvider>
                <ScrollToTop />
                <ToastContainer />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/login" element={<Login/>} />
                  <Route path="/resetpassword" element={<ResetPassword />} />
                  <Route path="/app/coursecategory" element={<CourseCategory />} />
                  <Route path="/app/couselist" element={<CouseList />} />
                  <Route path="/app/cart/" element={<Cart />} />
                  <Route path="/app/checkout" element={<Checkout />} />
                  <Route path="/app/coursedetails/:courseId" element={<CourseSingle />} />

                  <Route element={<PrivateRoutes allowedRoles={["Admin", "Student", "Instructor"]} />}>
                    <Route path="/app/success" element={<Success />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin", "Student", "Instructor"]} />}>
                    <Route path="/app/mycourses" element={<MyAccount />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin", "Student", "Instructor"]} />}>
                    <Route path="/app/coursepreview/:courseId" element={<CoursePreview />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin", "Student", "Instructor"]} />}>
                    <Route path="/app/message" element={<Message/>} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin", "Student", "Instructor"]} />}>
                    <Route path="/app/certificates" element={<Certificates />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin", "Student", "Instructor"]} />}>
                    <Route path="/app/myreviews" element={<MyReviews />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin", "Student", "Instructor"]} />}>
                    <Route path="/app/assessment" element={<Assessment />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin", "Student", "Instructor"]} />}>
                    <Route path="/app/profile" element={<Profile />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin"]} />}>
                    <Route path="/app/managecourses" element={<ManageCourses />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin", "Instructor"]} />}>
                    <Route path="/app/createcourses" element={<CreateCourse />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin"]} />}>
                    <Route path="/app/manageusers" element={<ManageUsers />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin"]} />}>
                    <Route path="/app/createuser" element={<CreateUser />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin"]} />}>
                    <Route path="/app/managecoupons" element={<ManageCoupons />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin"]} />}>
                    <Route path="/app/createcoupon" element={<CreateCoupon />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin", "Student", "Instructor"]} />}>
                    <Route path="/app/settings" element={<Settings />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin", "Student", "Instructor"]} />}>
                    <Route path="/app/dashboard" element={<Dashboard />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Student"]} />}>
                    <Route path="/app/studentpaymenthistory" element={<StudentPaymentHistory />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin"]} />}>
                    <Route path="/app/adminpaymenthistory" element={<AdminPaymentHistory />} />
                  </Route>

                  <Route element={<PrivateRoutes allowedRoles={["Admin"]} />}>
                    <Route path="/app/coursesettings" element={<CourseSettings />} />
                  </Route>
                </Routes>
              </PaymentProvider>
            </CouponProvider>
          </CartProvider>
        </CourseProvider>
      </ProfileProvider>
    </Router>
    </>
  )
}

export default App
