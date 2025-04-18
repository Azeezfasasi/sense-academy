import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const PaymentContext = createContext();

export const usePayment = () => {
  return useContext(PaymentContext);
};

export const PaymentProvider = ({ children }) => {
  const [studentPayments, setStudentPayments] = useState([]);
  const [adminPayments, setAdminPayments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch payment history for students
  const fetchStudentPayments = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("/api/payments/student", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setStudentPayments(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch student payments");
    } finally {
      setLoading(false);
    }
  };

  // Fetch all payment histories for admin
  const fetchAdminPayments = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("/api/payments/admin", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setAdminPayments(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch admin payments");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PaymentContext.Provider
      value={{
        studentPayments,
        adminPayments,
        loading,
        error,
        fetchStudentPayments,
        fetchAdminPayments,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};