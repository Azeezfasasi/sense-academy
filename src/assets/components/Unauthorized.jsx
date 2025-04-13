import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ProfileContext } from "../contextAPI/ProfileContext";
import Header from "./home-components/Header";

// Create a new component for unauthorized access
const Unauthorized = () => {
  return (
    <>
    <Header />
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-600">Unauthorized</h1>
        <p className="mt-4 text-xl text-gray-700">
          You do not have permission to access this page.
        </p>
        {/* You can add a link to redirect the user to a safe page */}
        <Link to="/" className="mt-4 text-blue-500 hover:underline">
          Go to Home
        </Link>
      </div>
    </div>
    </>
  );
};

const PrivateRoutes = ({ allowedRoles }) => {
  const { user } = useContext(ProfileContext); // Use useContext
  const location = useLocation(); // Get current location

  if (!user) {
    // Redirect to login, preserving the intended destination
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    // Redirect to unauthorized page
    return <Unauthorized />;
  }

  // Allow access to protected routes
  return <Outlet />;
};

export default PrivateRoutes;
