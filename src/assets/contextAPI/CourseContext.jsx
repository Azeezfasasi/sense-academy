import React, { createContext, useState, useEffect, useCallback, useContext } from 'react';
import axios from 'axios';
import { ProfileContext } from '../contextAPI/ProfileContext';
import API_BASE_URL from '../../config';

const CourseContext = createContext({});

const CourseProvider = ({ children }) => {
    const [courses, setCourses] = useState([]);
    const [instructorCourses, setInstructorCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const { token, user } = useContext(ProfileContext); // Get token and user from ProfileContext

    // Function to fetch all courses
    const fetchAllCourses = useCallback(async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/courses`);
            setCourses(response.data);
            return response.data;
        } catch (error) {
            console.error("Failed to fetch all courses", error);
            throw error;
        } finally {
            setLoading(false);
        }
    }, []);

    const fetchPurchasedCourses = useCallback(async () => {
        try {
          const response = await axios.get(`${API_BASE_URL}/api/courses/purchased`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setCourses(response.data); // Update the courses state with purchased courses
          return response.data;
        } catch (error) {
          console.error('Failed to fetch purchased courses', error);
          throw error;
        }
      }, [token]);

    // Function to fetch courses by a specific instructor
    const fetchCoursesByInstructor = useCallback(async (instructorId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/courses/instructor/${instructorId}`);
            setInstructorCourses(response.data);
            return response.data;
        } catch (error) {
            console.error(`Failed to fetch courses for instructor ${instructorId}`, error);
            throw error;
        } finally {
            setLoading(false);
        }
    }, []);

    // Function to add a new course
    const addNewCourse = useCallback(async (courseData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/courses/add`, courseData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error("Failed to add new course", error);
            throw error;
        }
    }, [token]);

    // Function to edit an existing course (Admin)
    const editCourse = useCallback(async (courseId, courseData) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/api/courses/${courseId}`, 
                courseData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error(`Failed to edit course with ID ${courseId}`, error);
            throw error;
        }
    }, [token]);

    // Function to edit an existing course (Instructor)
    const editCourseByInstructor = useCallback(async (courseId, courseData) => {
        try {
            const response = await axios.put(`${API_BASE_URL}/api/courses/instructor/${courseId}`, courseData, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error(`Failed to edit course with ID ${courseId} by instructor`, error);
            throw error;
        }
    }, [token]);

    // Function to delete a course (Admin)
    const deleteCourse = useCallback(async (courseId) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/api/courses/${courseId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error(`Failed to delete course with ID ${courseId}`, error);
            throw error;
        }
    }, [token]);

    // Function to delete a course (Instructor)
    const deleteCourseByInstructor = useCallback(async (courseId) => {
        try {
            const response = await axios.delete(`${API_BASE_URL}/api/courses/instructor/${courseId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error(`Failed to delete course with ID ${courseId} by instructor`, error);
            throw error;
        }
    }, [token]);

    // Function to assign a course to users (Admin)
    const assignCourseToUsers = useCallback(async (courseId, userIds) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/courses/assign`, { courseId, userIds }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error(`Failed to assign course ${courseId} to users`, error);
            throw error;
        }
    }, [token]);

    // Function to change the status of a course (Admin, Instructor)
    const changeCourseStatus = useCallback(async (courseId, status) => {
        try {
            const response = await axios.patch(`${API_BASE_URL}/api/courses/status/${courseId}`, { status }, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error(`Failed to change status of course ${courseId} to ${status}`, error);
            throw error;
        }
    }, [token]);

    // Function to view enrolled users in a course (Admin, Instructor)
    const viewEnrolledUsers = useCallback(async (courseId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/api/courses/enrolled/${courseId}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error(`Failed to view enrolled users for course ${courseId}`, error);
            throw error;
        }
    }, [token]);

    // Function to approve a course (Admin)
    const approveCourse = useCallback(async (courseId) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/courses/approve/${courseId}`, {}, {
                headers: { Authorization: `Bearer ${token}` },
            });
            return response.data;
        } catch (error) {
            console.error(`Failed to approve course ${courseId}`, error);
            throw error;
        }
    }, [token]);

    const contextValue = {
        courses,
        instructorCourses,
        loading,
        fetchAllCourses,
        fetchPurchasedCourses,
        fetchCoursesByInstructor,
        addNewCourse,
        editCourse,
        editCourseByInstructor,
        deleteCourse,
        deleteCourseByInstructor,
        assignCourseToUsers,
        changeCourseStatus,
        viewEnrolledUsers,
        approveCourse,
    };

    useEffect(() => {
        fetchAllCourses();
        if (user && user._id) {
            fetchCoursesByInstructor(user._id);
        }
    }, [fetchAllCourses, fetchCoursesByInstructor, user]);

    return (
        <CourseContext.Provider value={contextValue}>
            {!loading && children}
        </CourseContext.Provider>
    );
};

export { CourseContext, CourseProvider };