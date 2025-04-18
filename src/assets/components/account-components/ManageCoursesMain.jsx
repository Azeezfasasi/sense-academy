import React, { useContext, useState, useEffect } from 'react';
import { Table, Pagination, Button, Dropdown, ButtonGroup } from 'rsuite';
import { CourseContext } from '@/assets/contextAPI/CourseContext';
import AddOutlineIcon from '@rsuite/icons/AddOutline';
import CloseOutlineIcon from '@rsuite/icons/CloseOutline';
import PlusRoundIcon from '@rsuite/icons/PlusRound';
import { useDropzone } from 'react-dropzone';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';

const { Column, HeaderCell, Cell } = Table;

const ManageCoursesMain = () => {
  const { 
    courses, 
    editCourse, 
    deleteCourse, 
    changeCourseStatus, 
    viewEnrolledUsers, 
    approveCourse 
  } = useContext(CourseContext);

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [formData, setFormData] = useState({ introVideo: null, introImage: null });


  const handleChangeLimit = (dataKey) => {
    setPage(1);
    setLimit(dataKey);
  };

  const paginatedData = courses.slice((page - 1) * limit, page * limit);

  const handleEdit = (course) => {
    console.log('Edit:', course);
    setSelectedCourse(course);
    setIsEditModalOpen(true);
  };
  
  const handleDelete = async (courseId) => {
    if (window.confirm("Are you sure you want to delete this course?")) {
      await deleteCourse(courseId);
    }
  }; 

  const handleChangeStatus = async (courseId, selectedStatus) => {
    await changeCourseStatus(courseId, selectedStatus);
  };
  

  const handleApprove = async (courseId) => {
    await approveCourse(courseId);
  };

  const addLesson = (chapterIndex) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].lessons = [
      ...newChapters[chapterIndex].lessons,
      { title: '', duration: '', video: '' },
    ];
    setChapters(newChapters);
  };

  const addChapter = () => {
    setChapters([...chapters, { title: '', lessons: [] }]);
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
    newChapters[chapterIndex].lessons[lessonIndex].videoLink = event.target.value;
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
    <div>
      <div className="p-4 font-bold text-lg">Manage Courses</div>
      <div style={{ overflow: 'visible', position: 'relative', zIndex: 1 }}>
      <Table height={420} data={paginatedData} autoHeight bordered>
        <Column width={60} align="center">
          <HeaderCell>ID</HeaderCell>
          <Cell dataKey="_id">{(_, rowIndex) => page * limit - limit + rowIndex + 1}</Cell>
        </Column>

        <Column width={200}>
          <HeaderCell>Course Name</HeaderCell>
          <Cell dataKey="title" />
        </Column>

        <Column width={180}>
          <HeaderCell>Category</HeaderCell>
          <Cell dataKey="category" />
        </Column>

        <Column width={100}>
          <HeaderCell>Price</HeaderCell>
          <Cell>{(rowData) => `₦${rowData.regularPrice || 0}`}</Cell>
        </Column>

        <Column width={120}>
          <HeaderCell>Status</HeaderCell>
          <Cell dataKey="status" />
        </Column>

        <Column width={120}>
          <HeaderCell>Enrolled Users</HeaderCell>
          <Cell>{(rowData) => rowData.enrolledUsers?.length || 0}</Cell>
        </Column>

        <Column width={370}>
          <HeaderCell>Actions</HeaderCell>
          <Cell>
            {(rowData) => (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                <ButtonGroup size="xs" style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
                  <Button onClick={() => handleEdit(rowData)} appearance="primary">
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(rowData._id)}
                    appearance="subtle"
                    color="red"
                    style={{ border: '1px solid red' }}
                  >
                    Delete
                  </Button>
                  <Dropdown title={rowData.status || "Choose Status"} placement="bottomEnd" size="xs" container={() => document.body} style={{border: "1px solid blue"}}>
                    <Dropdown.Menu onSelect={(status) => handleChangeStatus(rowData._id, status)}>
                      <Dropdown.Item eventKey="Approved">Approved</Dropdown.Item>
                      <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                      <Dropdown.Item eventKey="Published">Published</Dropdown.Item>
                      <Dropdown.Item eventKey="Rejected">Rejected</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Button onClick={() => handleApprove(rowData._id)} appearance="ghost" color="green">
                    Approve
                  </Button>
                </ButtonGroup>
              </div>
            )}
          </Cell>
        </Column>
      </Table>
      </div>

      {isEditModalOpen && selectedCourse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-md w-full max-w-lg max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Edit Course</h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const updatedCourse = {
                  title: e.target.title.value,
                  subTitle: e.target.subTitle.value,
                  description: e.target.description.value,
                  category: e.target.category.value,
                  regularPrice: Number(e.target.regularPrice.value),
                  discountedPrice: Number(e.target.discountedPrice.value),
                  level: e.target.level.value,
                };
                editCourse(selectedCourse._id, updatedCourse);
                setIsEditModalOpen(false);
                setIsEditModalOpen(false);
              }}
            >
              {/* Title */}
              <div className="mb-4">
                <label className="block font-medium">Course Title</label>
                <input
                  type="text"
                  defaultValue={selectedCourse.title}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              {/* Sub Title Title */}
              <div className="mb-4">
                <label className="block font-medium">Sub Title</label>
                <input
                  type="text"
                  defaultValue={selectedCourse.subTitle}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              {/* Description */}
              <div className="mb-4">
                <label className="block font-medium">Description</label>
                <textarea
                  defaultValue={selectedCourse.description}
                  className="border border-gray-300 p-2 rounded w-full"
                  rows="4"
                />
              </div>

              {/* Category */}
              <div className="mb-4">
                <label className="block font-medium">Category</label>
                <select defaultValue={selectedCourse.category} className="border border-gray-300 p-2 rounded w-full">
                  <option value="">Choose Category</option>
                  <option value="Frontend Development">Frontend Development</option>
                  <option value="Backend Development">Backend Development</option>
                  <option value="Data Analysis">Data Analysis</option>
                </select>
              </div>

              {/* Regular Price */}
              <div className="mb-4">
                <label className="block font-medium">Price (₦)</label>
                <input
                  type="number"
                  defaultValue={selectedCourse.regularPrice}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              {/* Regular Price */}
              <div className="mb-4">
                <label className="block font-medium"> Discounted Price (₦)</label>
                <input
                  type="number"
                  defaultValue={selectedCourse.discountedPrice}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              {/* Level */}
              <div className="mb-4">
                <label className="block font-medium">Level</label>
                <select
                  defaultValue={selectedCourse.level}
                  className="border border-gray-300 p-2 rounded w-full"
                >
                  <option value="">Choose Level</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </div>

              {/* Duration */}
              <div className="mb-4">
                <label className="block font-medium">Duration (e.g. 6 weeks)</label>
                <input
                  type="text"
                  defaultValue={selectedCourse.duration}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              {/* Instructor */}
              <div className="mb-4">
                <label className="block font-medium">Instructor</label>
                <input
                  type="text"
                  defaultValue={selectedCourse.instructor}
                  className="border border-gray-300 p-2 rounded w-full"
                />
              </div>

              {/* Thumbnail */}
              <div className="mb-4">
                <label className="block font-medium">Thumbnail URL</label>
                <input
                  type="text"
                  defaultValue={selectedCourse.thumbnail}
                  className="border border-gray-300 p-2 rounded w-full"
                />
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

              {/* Actions */}
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsEditModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="p-4">
        <Pagination
          prev
          next
          first
          last
          ellipsis
          boundaryLinks
          maxButtons={5}
          size="sm"
          layout={['total', '-', 'limit', '|', 'pager']}
          total={courses.length}
          limit={limit}
          activePage={page}
          onChangePage={setPage}
          onChangeLimit={handleChangeLimit}
          limitOptions={[5, 10, 20, 50]}
        />
      </div>
    </div>
  );
};

export default ManageCoursesMain;

