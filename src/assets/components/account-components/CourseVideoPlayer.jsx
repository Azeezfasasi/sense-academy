// import React from 'react';

// const CourseVideoPlayer = ({ videoUrl, title, description }) => {
//   return (
//     <div className="max-w-5xl mx-auto p-4">
//       <div className="aspect-w-16 aspect-h-9 mb-6 rounded-lg overflow-hidden shadow-lg">
//         <iframe
//           className="w-full h-full"
//           src={videoUrl}
//           title={title}
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       </div>

//       <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
//         <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h2>
//         <p className="text-gray-600 dark:text-gray-300">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default CourseVideoPlayer;

import React from 'react';

const CourseVideoPlayer = () => {
  const videoSrc = "https://www.w3schools.com/html/mov_bbb.mp4"; // Replace with your video source
  const chapters = [
    { title: "Introduction", time: "00:00" },
    { title: "Getting Started", time: "02:30" },
    { title: "Main Concepts", time: "05:10" },
    { title: "Advanced Tips", time: "08:45" },
  ];

  const playlist = [
    { title: "Course Overview", src: videoSrc },
    { title: "React Basics", src: videoSrc },
    { title: "Hooks in Depth", src: videoSrc },
  ];

  return (
    <div className="w-full flex flex-col lg:flex-row h-screen p-4 gap-4 bg-gray-100">
      {/* Sidebar Playlist */}
      {/* <div className="w-full lg:w-1/4 bg-white rounded-xl shadow p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Playlist</h2>
        {playlist.map((item, index) => (
          <div key={index} className="mb-2 p-2 hover:bg-gray-200 cursor-pointer rounded">
            {item.title}
          </div>
        ))}
      </div> */}

      {/* Main Player Section */}
      <div className="w-full lg:w-3/4 flex flex-col gap-4">
        {/* Video Player */}
        <div className="bg-black rounded-xl overflow-hidden shadow">
          <video
            className="w-full h-[400px]"
            controls
            src={videoSrc}
          />
        </div>

        {/* Actions and Chapters */}
        <div className="bg-white rounded-xl shadow p-4 flex flex-col lg:flex-row gap-6">
          {/* Chapter List */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Chapters</h3>
            <ul className="list-disc ml-6 space-y-1">
              {chapters.map((chapter, idx) => (
                <li key={idx}>
                  <span className="font-medium">{chapter.title}</span> - <span className="text-sm text-gray-500">{chapter.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Download Button */}
          <div className="self-start">
            <a href={videoSrc} download className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Download Video
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideoPlayer;
