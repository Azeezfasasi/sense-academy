import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import API_BASE_URL from '@/config';

// Create the Certificate Context
const CertificateContext = createContext();

// Certificate Provider Component
export const CertificateProvider = ({ children }) => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch certificates for the logged-in user
  const fetchCertificates = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const res = await axios.get(`${API_BASE_URL}/api/certificates/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCertificates(res.data);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch certificates');
    } finally {
      setLoading(false);
    }
  };

  // Generate a certificate for a specific course
  const generateCertificate = async (userId, courseId) => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post(
        `${API_BASE_URL}/api/certificates/generate`,
        { userId, courseId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCertificates((prevCertificates) => [...prevCertificates, res.data.certificate]);
      return res.data.certificate;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to generate certificate');
    }
  };

  // Verify a certificate using its verification link
  const verifyCertificate = async (verifyLink) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/api/certificates/verify/${verifyLink}`);
      return res.data.certificate;
    } catch (err) {
      throw new Error(err.response?.data?.message || 'Failed to verify certificate');
    }
  };

  // Fetch certificates when the component mounts
  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <CertificateContext.Provider
      value={{
        certificates,
        loading,
        error,
        fetchCertificates,
        generateCertificate,
        verifyCertificate,
      }}
    >
      {children}
    </CertificateContext.Provider>
  );
};

// Custom Hook to Use Certificate Context
export const useCertificate = () => {
  return useContext(CertificateContext);
};