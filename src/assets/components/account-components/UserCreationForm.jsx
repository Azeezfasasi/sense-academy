import React, { useState, useContext } from 'react';
import { ProfileContext } from '@/assets/contextAPI/ProfileContext';

const UserCreationForm = () => {
  const { addUser } = useContext(ProfileContext);

  const initialFormData = {
    firstName: '',
    lastName: '',
    otherName: '',
    headline: '',
    bio: '',
    email: '',
    password: '',
    phoneNumber: '',
    language: '',
    country: '',
    role: 'Student',
    profileImage: '',
    disabled: false,
    socialLinks: {
      website: '',
      facebook: '',
      linkedin: '',
      instagram: '',
      youtube: '',
    },
  };
  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addUser(formData); // ← Calls backend through context
      console.log('User created successfully');
      setFormData(initialFormData);
      // Optionally reset form or navigate
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name.startsWith('socialLinks.')) {
      const key = name.split('.')[1];
      setFormData((prev) => ({
        ...prev,
        socialLinks: {
          ...prev.socialLinks,
          [key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-6 mb-8 md:mb-6"
    >
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Create New User
      </h2>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['firstName', 'lastName', 'otherName'].map((field) => (
          <div key={field}>
            <label className="block mb-1 font-medium text-gray-700 capitalize">
              {field.replace(/([A-Z])/g, ' $1')}
            </label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        ))}
      </div>

      {/* Headline */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Headline</label>
        <input
          type="text"
          name="headline"
          value={formData.headline}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Bio */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Bio</label>
        <textarea
          name="bio"
          value={formData.bio}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Phone number */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Phone Number</label>
        <input
          type="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      {/* Country */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Country</label>
        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="">Choose Country</option>
          <option value="Student">Nigeria</option>
          <option value="Instructor">Ghana</option>
          <option value="Admin">Others</option>
        </select>
      </div>
      
      {/* Language */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Language</label>
        <select
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="">Choose Language</option>
          <option value="Student">English</option>
          <option value="Instructor">French</option>
          <option value="Admin">Others</option>
        </select>
      </div>

      {/* Email */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      {/* Password */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          required
        />
      </div>

      {/* Role */}
      <div>
        <label className="block mb-1 font-medium text-gray-700">Role</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
          required
        >
          <option value="">Select Role</option>
          <option value="Student">Student</option>
          <option value="Instructor">Instructor</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      {/* Social Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(formData.socialLinks).map(([key, value]) => (
          <div key={key}>
            <label className="block mb-1 font-medium text-gray-700 capitalize">{key}</label>
            <input
              type="text"
              name={`socialLinks.${key}`}
              value={value}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        ))}
      </div>

      {/* Disabled Checkbox */}
      <div className="flex items-center">
        <input
          type="checkbox"
          name="disabled"
          checked={formData.disabled}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="font-medium text-gray-700">Disable Account</label>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Create User
      </button>
    </form>
  );
};

export default UserCreationForm;
