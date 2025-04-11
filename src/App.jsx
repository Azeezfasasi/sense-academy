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


function App() {
  return (
    <>
    <Router>
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
      </Routes>
    </Router>
    </>
  )
}

export default App
