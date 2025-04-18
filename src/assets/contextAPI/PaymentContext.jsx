import React, { createContext, useContext, useState } from "react";
import axios from "axios";

const PaymentContext = createContext();

export const usePayment = () => {
  return useContext(PaymentContext);
};

const API_BASE_URL = 'http://localhost:5000/api/payments';

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
      const response = await axios.get(`${API_BASE_URL}/student`, {
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
      const response = await axios.get(`${API_BASE_URL}/admin`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setAdminPayments(response.data);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch admin payments");
    } finally {
      setLoading(false);
    }
  };

  const updatePaymentStatus = async (paymentId, paymentStatus) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.put(
        `${API_BASE_URL}/update-status`,
        { paymentId, paymentStatus },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );
      // Optionally, refresh the admin payments list
      fetchAdminPayments();
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Failed to update payment status");
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
        updatePaymentStatus,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};