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
import MyAccount from "./app/MyAccount";
import MyCourses from "./app/MyCourses";
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


function App() {
  return (
    <>
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/app/coursecategory" element={<CourseCategory />} />
        <Route path="/app/couselist" element={<CouseList />} />
        <Route path="/app/cart" element={<Cart />} />
        <Route path="/app/checkout" element={<Checkout />} />
        <Route path="/app/coursedetails" element={<CourseSingle />} />
        <Route path="/app/myaccount" element={<MyAccount />} />
        <Route path="/app/mycourse" element={<MyCourses />} />
        <Route path="/app/coursepreview" element={<CoursePreview />} />
        <Route path="/app/message" element={<Message/>} />
        <Route path="/app/certificates" element={<Certificates />} />
        <Route path="/app/myreviews" element={<MyReviews />} />
        <Route path="/app/assessment" element={<Assessment />} />
        <Route path="/app/profile" element={<Profile />} />
        <Route path="/app/managecourses" element={<ManageCourses />} />
        <Route path="/app/createcourses" element={<CreateCourse />} />
        <Route path="/app/manageusers" element={<ManageUsers />} />
        <Route path="/app/createuser" element={<CreateUser />} />
        <Route path="/app/managecoupons" element={<ManageCoupons />} />
        <Route path="/app/createcoupon" element={<CreateCoupon />} />
        <Route path="/app/settings" element={<Settings />} />
        <Route path="/app/dashboard" element={<Dashboard />} />
        <Route path="/app/coursesettings" element={<CourseSettings />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
