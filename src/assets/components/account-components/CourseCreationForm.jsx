import React, { useState, useEffect, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CourseContext } from '@/assets/contextAPI/CourseContext';
import AddOutlineIcon from '@rsuite/icons/AddOutline';
import CloseOutlineIcon from '@rsuite/icons/CloseOutline';
import PlusRoundIcon from '@rsuite/icons/PlusRound';

const CourseCreationForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    subTitle: '',
    description: '',
    category: '',
    totalDuration: '',
    duration: '',
    video: '',
    regularPrice: '',
    discountedPrice: '',
    level: '',
    language: '',
    introVideo: '',
    introImage: '',
    material: '',
    createdBy: '',
  });

  const [chapters, setChapters] = useState([]);
  const { addNewCourse } = useContext(CourseContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'price' ? parseFloat(value) || '' : value,
    }));
  };

  const handleDescriptionChange = (value) => {
    setFormData((prev) => ({ ...prev, description: value }));
  };

  const handleSubTitleChange = (value) => {
    setFormData((prev) => ({ ...prev, subTitle: value }));
  };

  const addChapter = () => {
    setChapters([...chapters, { title: '', lessons: [] }]);
  };

  const handleChapterTitleChange = (index, event) => {
    const newChapters = [...chapters];
    newChapters[index].title = event.target.value;
    setChapters(newChapters);
  };

  const addLesson = (chapterIndex) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].lessons = [
      ...newChapters[chapterIndex].lessons,
      { title: '', duration: '', video: '' },
    ];
    setChapters(newChapters);
  };

  const handleLessonTitleChange = (chapterIndex, lessonIndex, event) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].lessons[lessonIndex].title = event.target.value;
    setChapters(newChapters);
  };

  const handleLessonDurationChange = (chapterIndex, lessonIndex, event) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].lessons[lessonIndex].duration = event.target.value;
    setChapters(newChapters);
  };

  const handleLessonVideoChange = (chapterIndex, lessonIndex, event) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].lessons[lessonIndex].video = event.target.value;
    setChapters(newChapters);
  };

  const handleRemoveChapter = (chapterIndex) => {
    const newChapters = chapters.filter((_, index) => index !== chapterIndex);
    setChapters(newChapters);
  };

  const handleRemoveLesson = (chapterIndex, lessonIndex) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].lessons = newChapters[chapterIndex].lessons.filter(
      (_, index) => index !== lessonIndex
    );
    setChapters(newChapters);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const sanitizedCourseData = {
      ...formData,
      description: formData.description.replace(/<[^>]*>/g, ''),
      subTitle: formData.subTitle.replace(/<[^>]*>/g, ''),
      chapters,
    };

    try {
      await addNewCourse(sanitizedCourseData);
      alert('Course created successfully!');
      setFormData({
        title: '',
        subTitle: '',
        description: '',
        category: '',
        totalDuration: '',
        duration: '',
        video: '',
        regularPrice: '',
        discountedPrice: '',
        level: '',
        language: '',
        introVideo: '',
        introImage: '',
        material: '',
        createdBy: '',
      });
      setChapters([]);
    } catch (error) {
      console.error('Course creation failed:', error);
      alert('Failed to create course');
    }
  };

  const {
    getRootProps: getVideoRootProps,
    getInputProps: getVideoInputProps,
    acceptedFiles: acceptedVideoFiles,
    isDragActive: isVideoDragActive,
  } = useDropzone({ accept: { 'video/*': [] } });

  const {
    getRootProps: getImageRootProps,
    getInputProps: getImageInputProps,
    acceptedFiles: acceptedImageFiles,
    isDragActive: isImageDragActive,
  } = useDropzone({ accept: { 'image/*': [] } });

  const videoFiles = acceptedVideoFiles.map((file) => (
    <li key={file.path}>{file.path} - {file.size} bytes</li>
  ));

  const imageFiles = acceptedImageFiles.map((file) => (
    <li key={file.path}>{file.path} - {file.size} bytes</li>
  ));

  useEffect(() => {
    if (acceptedVideoFiles.length > 0) {
      setFormData((prev) => ({ ...prev, introVideo: acceptedVideoFiles[0] }));
    }
  }, [acceptedVideoFiles]);

  useEffect(() => {
    if (acceptedImageFiles.length > 0) {
      setFormData((prev) => ({ ...prev, introImage: acceptedImageFiles[0] }));
    }
  }, [acceptedImageFiles]);

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-6 bg-white rounded-md shadow-md space-y-4">
      <h2 className="text-xl font-semibold text-center">Create New Course</h2>

      {/* Title */}
      <div>
        <label className="block font-medium">Course Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded"
        />
      </div>

      {/* Sub Title */}
      <div>
        <label className="block font-medium">Sub Title</label>
        <ReactQuill
          theme="snow"
          value={formData.subTitle}
          onChange={handleSubTitleChange}
        />
      </div>

      {/* Description */}
      <div>
        <label className="block font-medium">Description</label>
        <ReactQuill
          theme="snow"
          value={formData.description}
          onChange={handleDescriptionChange}
        />
      </div>

      {/* Category */}
      <div>
        <label className="block font-medium">Category</label>
        <select name="category" value={formData.category} onChange={handleChange} required className="w-full border px-3 py-2 rounded">
          <option value="">Choose</option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Data Analysis">Data Analysis</option>
        </select>
      </div>

      {/* Duration, Prices */}
      <div>
        <label className="block font-medium">Duration (hours)</label>
        <input type="text" name="duration" value={formData.duration} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
      </div>

      <div>
        <label className="block font-medium">Regular Price (₦)</label>
        <input type="number" name="regularPrice" value={formData.regularPrice} onChange={handleChange} required className="w-full border px-3 py-2 rounded" />
      </div>

      <div>
        <label className="block font-medium">Discounted Price (₦)</label>
        <input type="number" name="discountedPrice" value={formData.discountedPrice} onChange={handleChange} className="w-full border px-3 py-2 rounded" />
      </div>

      {/* Level and Language */}
      <div>
        <label className="block font-medium">Level</label>
        <select name="level" value={formData.level} onChange={handleChange} className="w-full border px-3 py-2 rounded">
          <option value="">Choose</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Language</label>
        <select name="language" value={formData.language} onChange={handleChange} className="w-full border px-3 py-2 rounded">
          <option value="English">English</option>
          <option value="French">French</option>
        </select>
      </div>

      {/* File Uploads */}
      <div>
        <label className="block font-medium">Intro Video</label>
        <div {...getVideoRootProps()} className={`border-2 border-dashed p-4 rounded ${isVideoDragActive ? 'bg-blue-100' : 'bg-white'}`}>
          <input {...getVideoInputProps()} />
          <p>Drag & drop or click to upload video</p>
        </div>
        <ul>{videoFiles}</ul>
      </div>

      <div>
        <label className="block font-medium">Intro Image</label>
        <div {...getImageRootProps()} className={`border-2 border-dashed p-4 rounded ${isImageDragActive ? 'bg-blue-100' : 'bg-white'}`}>
          <input {...getImageInputProps()} />
          <p>Drag & drop or click to upload image</p>
        </div>
        <ul>{imageFiles}</ul>
      </div>

      {/* Chapters & Lessons */}
      <div>
        <h3 className="font-semibold">Chapters</h3>
        {chapters.map((chapter, chapterIndex) => (
          <div key={chapterIndex} className="mb-4 border p-3 rounded-md">
            <div>
              <label htmlFor={`chapterTitle_${chapterIndex}`} className="block mb-1 font-semibold text-gray-700">Chapter Title:</label>
              <input
                type="text"
                placeholder="Chapter Title"
                value={chapter.title}
                onChange={(e) => handleChapterTitleChange(chapterIndex, e)}
                className="w-full border px-2 py-1 mb-2 rounded"
              />
            </div>

            <h4>Lessons</h4>
            {chapter.lessons.map((lesson, lessonIndex) => (
              <div key={lessonIndex} className="mb-2">
                <div>
                  <label htmlFor={`lessonTitle_${chapterIndex}_${lessonIndex}`} className="block mb-1 font-semibold text-gray-700">Lesson Title:</label>
                  <input
                    type="text"
                    placeholder="Lesson Title"
                    value={lesson.title}
                    onChange={(e) => handleLessonTitleChange(chapterIndex, lessonIndex, e)}
                    className="w-full border px-2 py-1 mb-1 rounded"
                  />
                </div>
                <div>
                  <label htmlFor={`lessonDuration_${chapterIndex}_${lessonIndex}`} className="block mb-1 font-semibold text-gray-700">Duration :</label>
                  <input
                    type="text"
                    placeholder="Lesson Duration"
                    value={lesson.duration}
                    onChange={(e) => handleLessonDurationChange(chapterIndex, lessonIndex, e)}
                    className="w-full border px-2 py-1 mb-1 rounded"
                  />
                </div>
                <div>
                  <label htmlFor={`lessonVideo_${chapterIndex}_${lessonIndex}`} className="block mb-1 font-semibold text-gray-700">Video:</label>
                  <input
                    type="text"
                    placeholder="Lesson Video URL"
                    value={lesson.video}
                    onChange={(e) => handleLessonVideoChange(chapterIndex, lessonIndex, e)}
                    className="w-full border px-2 py-1 rounded"
                  />
                </div>
                <button type="button" onClick={() => handleRemoveLesson(chapterIndex, lessonIndex)} className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-700 transition duration-200 mt-2">
                  Remove Lesson
                </button>
              </div>
            ))}
            <button type="button" onClick={() => addLesson(chapterIndex)} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200 mt-2">
              <AddOutlineIcon /> Add Lesson
            </button>
            <button type="button" onClick={() => handleRemoveChapter(chapterIndex)} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-200 mt-2 ml-2">
              <CloseOutlineIcon /> Remove Chapter
            </button>
          </div>
        ))}
        <button type="button" onClick={addChapter} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
          <PlusRoundIcon /> Add Chapter
        </button>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        Create Course
      </button>
    </form>
  );
};

export default CourseCreationForm;
