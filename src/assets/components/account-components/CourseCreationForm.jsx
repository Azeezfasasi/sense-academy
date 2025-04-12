import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const CourseCreationForm = () => {
  // const [formData, setFormData] = useState({
  //   title: '',
  //   subTitle: '',
  //   description: '',
  //   category: '',
  //   totalDuration: '',
  //   duration: '',
  //   video: '',
  //   regularPrice: '',
  //   discountedPrice: '',
  //   level: '',
  //   language: '',
  //   introVideo: '',
  //   introImage: '',
  //   material: '',
  //   createdBy: '',
  // });

  // const [chapters, setChapters] = useState([]);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: name === 'price' ? parseFloat(value) || '' : value,
  //   }));
  // };

  // const handleDescriptionChange = (value) => {
  //   setFormData((prev) => ({ ...prev, description: value }));
  // };

  // const handleSubTitleChange = (value) => {
  //   setFormData((prev) => ({ ...prev, subTitle: value }));
  // };

  // const addChapter = () => {
  //   setChapters([...chapters, { title: '', lessons: [] }]);
  // };

  // const handleChapterTitleChange = (index, event) => {
  //   const newChapters = [...chapters];
  //   newChapters[index].title = event.target.value;
  //   setChapters(newChapters);
  // };

  // const addLesson = (chapterIndex) => {
  //   const newChapters = [...chapters];
  //   newChapters[chapterIndex].lessons = [...newChapters[chapterIndex].lessons, { title: '', duration: '', video: '' }];
  //   setChapters(newChapters);
  // };

  // const handleLessonTitleChange = (chapterIndex, lessonIndex, event) => {
  //   const newChapters = [...chapters];
  //   newChapters[chapterIndex].lessons[lessonIndex].title = event.target.value;
  //   setChapters(newChapters);
  // };

  // const handleLessonDurationChange = (chapterIndex, lessonIndex, event) => {
  //   const newChapters = [...chapters];
  //   newChapters[chapterIndex].lessons[lessonIndex].duration = event.target.value;
  //   setChapters(newChapters);
  // };

  // const handleLessonVideoChange = (chapterIndex, lessonIndex, event) => {
  //   const newChapters = [...chapters];
  //   newChapters[chapterIndex].lessons[lessonIndex].video = event.target.value;
  //   setChapters(newChapters);
  // };

  // const handleRemoveChapter = (chapterIndex) => {
  //   const newChapters = chapters.filter((_, index) => index !== chapterIndex);
  //   setChapters(newChapters);
  // };

  // const handleRemoveLesson = (chapterIndex, lessonIndex) => {
  //   const newChapters = [...chapters];
  //   newChapters[chapterIndex].lessons = newChapters[chapterIndex].lessons.filter((_, index) => index !== lessonIndex);
  //   setChapters(newChapters);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const courseData = {
  //     ...formData,
  //     chapters: chapters.map(chapter => ({
  //       title: chapter.title,
  //       lessons: chapter.lessons,
  //     })),
  //   };
  //   console.log('Course submitted:', courseData);
  //   // API call or further logic goes here
  // };

  // const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone();

  // const files = acceptedFiles.map(file => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const sanitizedCourseData = {
      ...formData,
      description: formData.description.replace(/<[^>]*>/g, ''), // Sanitize description by removing HTML tags
      subTitle: formData.subTitle.replace(/<[^>]*>/g, ''), // Sanitize subtitle by removing HTML tags
      chapters: chapters.map((chapter) => ({
        title: chapter.title,
        lessons: chapter.lessons,
      })),
    };

    console.log('Sanitized Course submitted:', sanitizedCourseData);
    // API call or further logic goes here
  };

  const { acceptedFiles, getRootProps, getInputProps, isDragActive } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Create a New Course
      </h2>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Course Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Course Sub Title</label>
        <ReactQuill
          theme="snow"
          value={formData.subTitle}
          onChange={handleSubTitleChange}
          placeholder="Write your course sub title here..."
          className="bg-white"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Description</label>
        <ReactQuill
          theme="snow"
          value={formData.description}
          onChange={handleDescriptionChange}
          placeholder="Write your course description here..."
          className="bg-white mb-[100px] lg:mb-[70px]"
          style={{ height: '200px' }}
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Category</label>
        <select name="category" value={formData.category} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Choose Category</option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Backend Development">Backend Development</option>
          <option value="Data Analysis">Data Analysis</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Duration (Specify in hours)</label>
        <input
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          required
          placeholder="Specify in hours E.g. 22 Total Hours"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Regular Price (₦)</label>
        <input
          type="number"
          name="regularPrice"
          value={formData.regularPrice}
          onChange={handleChange}
          min="0"
          required
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Discounted Price (₦)</label>
        <input
          type="number"
          name="discountedPrice"
          value={formData.discountedPrice}
          onChange={handleChange}
          min="0"
          placeholder='Optional'
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Difficulty Level</label>
        <select
          name="level"
          value={formData.level}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Choose Level</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Language</label>
        <select
          name="language"
          value={formData.language}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="English">English</option>
          <option value="French">French</option>
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Upload Intro Video</label>
        <div {...getRootProps()} className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
          <input {...getInputProps()} name='introVideo' value={formData.introVideo} onChange={handleChange} />
          <p>Drag 'n' drop a video here, or click to select files</p>
        </div>
        <aside className='flex flex-row items-start justify-start gap-2'>
          <p className='text-[12px] md:text-[14px] font-bold'>File Path:</p>
          <ul className='text-[11px] md:text-[14px]'>{files}</ul>
        </aside>
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Upload Intro Image</label>
        <div {...getRootProps()} className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-200 ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}>
          <input {...getInputProps()} value={formData.introImage} onChange={handleChange}/>
          <p>Drag 'n' drop an image here, or click to select files</p>
        </div>
        <aside className='flex flex-row items-start justify-start gap-2'>
          <p className='text-[12px] md:text-[14px] font-bold'>File Path:</p>
          <ul className='text-[11px] md:text-[14px]'>{files}</ul>
        </aside>
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Course Materia</label>
        <input
          type="file"
          name="material"
          value={formData.material}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 font-semibold text-gray-700">Created By</label>
        <input
          type="text"
          name="createdBy"
          value={formData.createdBy}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Chapters and Lessons Section */}
      <h2>Course Content</h2>
      {chapters.map((chapter, chapterIndex) => (
        <div key={chapterIndex} style={{ border: '1px solid #ccc', padding: '15px', margin: '10px 0' }}>
          <h3>Chapter {chapterIndex + 1}</h3>
          <div>
            <label htmlFor={`chapterTitle_${chapterIndex}`} className="block mb-1 font-semibold text-gray-700">Chapter Title:</label>
            <input
              type="text"
              id={`chapterTitle_${chapterIndex}`}
              value={chapter.title}
              onChange={(event) => handleChapterTitleChange(chapterIndex, event)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <h4>Lessons</h4>
          {chapter.lessons.map((lesson, lessonIndex) => (
            <div key={lessonIndex} style={{ border: '1px solid #eee', padding: '10px', margin: '5px 0' }}>
              <div>
                <label htmlFor={`lessonTitle_${chapterIndex}_${lessonIndex}`} className="block mb-1 font-semibold text-gray-700">Lesson Title:</label>
                <input
                  type="text"
                  id={`lessonTitle_${chapterIndex}_${lessonIndex}`}
                  value={lesson.title}
                  onChange={(event) => handleLessonTitleChange(chapterIndex, lessonIndex, event)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`lessonDuration_${chapterIndex}_${lessonIndex}`} className="block mb-1 font-semibold text-gray-700">Duration :</label>
                <input
                  type="text"
                  id={`lessonDuration_${chapterIndex}_${lessonIndex}`}
                  value={lesson.duration}
                  onChange={(event) => handleLessonDurationChange(chapterIndex, lessonIndex, event)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor={`lessonVideo_${chapterIndex}_${lessonIndex}`} className="block mb-1 font-semibold text-gray-700">Video:</label>
                <input
                  type="url"
                  id={`lessonVideo_${chapterIndex}_${lessonIndex}`}
                  value={lesson.video}
                  onChange={(event) => handleLessonVideoChange(chapterIndex, lessonIndex, event)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button type="button" onClick={() => handleRemoveLesson(chapterIndex, lessonIndex)} className="bg-red-500 text-white py-1 px-2 rounded-md hover:bg-red-700 transition duration-200 mt-2">
                Remove Lesson
              </button>
            </div>
          ))}
          <button type="button" onClick={() => addLesson(chapterIndex)} className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200 mt-2">Add New Lesson</button>
          <button type="button" onClick={() => handleRemoveChapter(chapterIndex)} className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition duration-200 mt-2 ml-2">
            Remove Chapter
          </button>
        </div>
      ))}
      <button type="button" onClick={addChapter} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">Add New Chapter</button>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        Create Course
      </button>
    </form>
  );
};

export default CourseCreationForm;