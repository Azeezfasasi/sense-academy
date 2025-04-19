import React, { createContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '@/config';

const ProfileContext = createContext({});

const ProfileProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const [adminCount, setAdminCount] = useState(0);
    const [instructorCount, setInstructorCount] = useState(0);
    const [studentCount, setStudentCount] = useState(0);

    // Load user data from localStorage on initial load
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        const storedToken = localStorage.getItem('token');
        if (storedUser && storedToken) {
            try {
                setUser(JSON.parse(storedUser));
                setToken(storedToken);
            } catch (error) {
                console.error("Error parsing user data from localStorage", error);
                localStorage.removeItem('user');
                localStorage.removeItem('token');
            }
        }
        setLoading(false);
    }, []);

    // Save user data to localStorage whenever it changes
    useEffect(() => {
        if (user && token) {
            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        }
    }, [user, token]);

    const fetchAllRoleCounts = useCallback(async () => {
        try {
          const response = await axios.get(`${API_BASE_URL}/api/profile/counts`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setAdminCount(response.data.admins || 0);
          setInstructorCount(response.data.instructors || 0);
          setStudentCount(response.data.students || 0);
        } catch (error) {
          console.error("Failed to fetch all role counts", error);
          throw error;
        }
      }, [token]);
    
      useEffect(() => {
        if (token) {
          fetchAllRoleCounts();
        }
      }, [token, fetchAllRoleCounts]);

    // Register a new user
    const register = useCallback(async (userData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/profile/register`, userData);
            const { data } = response;
            return data;
        } catch (error) {
            console.error("Registration error:", error);
            throw error;
        }
    }, []);

    // Log in an existing user
    const login = useCallback(async (email, password) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/profile/login`, { email, password },
            { withCredentials: true }
            );
            const { data } = response;
            setToken(data.token);
            localStorage.setItem('token', data.token);
            setUser(data.user);
            navigate('/');
            return data;
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    }, [navigate]);

    // Log out a user
    const logout = useCallback(() => {
        setUser(null);
        setToken(null);
        navigate('/login');
    }, [navigate]);

    // Forgot Password
      const forgotPassword = useCallback(async (email) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/profile/forgot-password`, { email });
            return response.data;
        } catch (error) {
            console.error("Forgot Password Error", error);
            throw error;
        }
    }, []);

    // Reset Password
    const resetPassword = useCallback(async (token, newPassword) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/profile/reset-password`, { token, newPassword });
            return response.data;
        } catch (error) {
            console.error("Reset Password Error:", error);
            throw error;
        }
    }, []);

    // Fetch all users (Admin only)
    const fetchAllUsers = useCallback(async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/profile/users`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error("Fetch all users error", error);
            throw error;
        }
    }, [token]);

    // Fetch instructors (Admin only)
    const fetchInstructors = useCallback(async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/profile/instructors`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error("Fetch instructors error", error);
            throw error;
        }
    }, [token]);

    // Fetch students (Admin only)
    const fetchStudents = useCallback(async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/profile/students`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error("Fetch students error", error);
            throw error;
        }
    }, [token]);

    // Get Current User Profile
    const getCurrentUser = useCallback(async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/profile/me`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUser(response.data);
            return response.data;
        } catch (error) {
            console.error("Get current user error", error);
            throw error;
        }
    }, [token]);

    // Edit Current User Profile
    const editCurrentUser = useCallback(async (userData) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/api/profile/me`, userData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUser(response.data);
            return response.data
        } catch (error) {
            console.error("Edit current user error", error);
            throw error;
        }
    }, [token]);

    // Delete User by ID (Admin only)
    const deleteUser = useCallback(async (id) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/api/profile/${id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error("Delete user error", error);
            throw error;
        }
    }, [token]);

     // Update User by ID (Admin only)
    const updateUser = useCallback(async (id, userData) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/api/profile/${id}`, userData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error("Update user error", error);
            throw error;
        }
    }, [token]);

    // Change User Role (Admin only)
    const changeUserRole = useCallback(async (id, role) => {
        try {
            const response = await axios.patch(`${API_BASE_URL}/api/profile/role/${id}`, { role }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error("Change user role error", error);
            throw error;
        }
    }, [token]);

    // Disable/Enable User (Admin only)
    const disableUser = useCallback(async (id, disabled) => {
        try {
            const response = await axios.patch(`${API_BASE_URL}/api/profile/disable/${id}`, { disabled }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error("Disable user error", error);
            throw error;
        }
    }, [token]);

    // Add User (Admin only)
    const addUser = useCallback(async (userData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/profile/add`, userData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error("Add user error", error);
            throw error;
        }
    }, [token]);

    const contextValue = {
        user,
        token,
        loading,
        register,
        login,
        logout,
        forgotPassword,
        resetPassword,
        fetchAllUsers,
        fetchInstructors,
        fetchStudents,
        getCurrentUser,
        editCurrentUser,
        deleteUser,
        updateUser,
        changeUserRole,
        disableUser,
        addUser,
        adminCount,
        instructorCount,
        studentCount,
        fetchAllRoleCounts
    };

    return (
        <ProfileContext.Provider value={contextValue}>
            {!loading && children}
        </ProfileContext.Provider>
    );
};

export { ProfileContext, ProfileProvider };
