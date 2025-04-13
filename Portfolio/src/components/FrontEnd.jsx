import { Link } from 'react-router-dom';
import { useState } from 'react';

import todo from "../assets/Frontend/ToDoList.jpg";
import placepicker from "../assets/Frontend/PlacePicker.png";
import taskmanager from "../assets/Frontend/TaskManager.png";

import videoLogo from "../assets/miniproject-img/CircledPlay1.png"; 
import CodeLink from "../assets/miniproject-img/Link.png";

import ToDo from "../assets/videoFrontend/To-do.mp4";
import TaskManager from "../assets/videoFrontend/task-manager.mp4";
import PlacePicker from "../assets/videoFrontend/place-picker.mp4";

import VideoModal from './VideoModal';

const Frontend = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState(""); 

  const handleOpenVideo = (src) => {
    setVideoSrc(src);
    setShowVideo(true);
  }

  const handleCloseVideo = () => {
    setShowVideo(false);
    setVideoSrc("");
  }

  const projects = [
    {
      title: "ToDo List App",
      img: todo,
      description: "A sleek task management tool to add, delete, and mark tasks complete, built with React for a responsive and dynamic experience.",
      codeLink: "https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project",
      video: ToDo
    },
    {
      title: "Place Picker",
      img: placepicker,
      description: "An interactive app to pick and mark places on the map using location APIs. Perfect for travel planning or geo-tagging activities.",
      codeLink: "https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project",
      video: PlacePicker
    },
    {
      title: "Task Manager",
      img: taskmanager,
      description: "Manage tasks and deadlines with this organized dashboard. Features task tracking, editing, and priority setting using React and state management.",
      codeLink: "https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project",
      video: TaskManager
    }
  ];

  return (
    <div className='h-full bg-gradient-to-t from-third to-secondary'>
      <div id='front-end-projects' className="min-h-screen flex flex-col items-center justify-start text-center py-6 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text1 mb-6 sm:mb-10 mt-6 sm:mt-12">
          Frontend Projects
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text1 text-center mb-16 sm:mb-24 md:mb-32 max-w-3xl sm:max-w-4xl">
          Explore the frontend projects I have developed to sharpen my skills with React, JavaScript, and modern UI/UX practices. Each project solves real-world problems with clean and scalable design.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:mx-8 sm:mx-12 lg:grid-cols-3 gap-10 w-full max-w-6xl mb-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="relative p-4 bg-gray-100 shadow-lg rounded-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] hover:text-white cursor-pointer transition duration-300 ease-in-out"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-56 object-contain rounded-lg mt-4 mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">{proj.title}</h2>
              <p className="text-gray-600 mx-4 pb-6">{proj.description}</p>
              <div className='mt-6'>
                <a
                  href={proj.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-20 text-white"
                >
                  <img
                    src={CodeLink}
                    alt="Code"
                    className="w-10 h-10 invert hover:invert-0 ease-in-out"
                  />
                </a>
                <button onClick={() => handleOpenVideo(proj.video)} className="absolute bottom-4 right-4">
                  <img src={videoLogo} alt="Play" className="w-10 h-10 invert" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <VideoModal isOpen={showVideo} onclose={handleCloseVideo} videoSrc={videoSrc} />

        <Link
          to="/"
          className="mt-8 mb-12 px-6 py-3 bg-text1 text-secondary font-semibold rounded-lg hover:bg-text2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
};

export default Frontend;
