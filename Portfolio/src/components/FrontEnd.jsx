import { Link } from 'react-router-dom';
import todo from "../assets/Frontend/ToDoList.jpg";
import placepicker from "../assets/Frontend/PlacePicker.png";
import taskmanager from "../assets/Frontend/TaskManager.png";
import videoLogo from "../assets/miniproject-img/CircledPlay1.png"; 
import CodeLink from "../assets/miniproject-img/Link.png";

import { useState } from 'react';
import VideoModal from './VideoModal';
import ToDo from "../assets/videoFrontend/To-do.mp4";
import TaskManager from "../assets/videoFrontend/task-manager.mp4";
import PlacePicker from "../assets/videoFrontend/place-picker.mp4";

const Frontend = () => {
  const[showVideo, setShowVideo] = useState(false);
  const[videoSrc, setVideoSrc] = useState(""); 

  const handleOpenVideo = (src) => {
    setVideoSrc(src);
    setShowVideo(true);
  }

  const handleCloseVideo = () => {
    setShowVideo(false);
    setVideoSrc("");
  }

  return (
    <div className='h-full bg-gradient-to-t from-third to-secondary'>
      <div id='mini-projects' className="min-h-screen flex flex-col items-center justify-start text-center py-6 px-4">
        <h1 className="text-3xl font-bold text-text1 sm:text-5xl md:text-6xl lg:text-7xl mb-12 mt-12 ">Frontend Projects</h1>
        <p className="text-sm sm:text-md md:text-lg lg:text-xl text-text1 text-center mb-32 mx-20 max-w-4xl">
          Explore the frontend projects I have developed to sharpen my skills with React, JavaScript, and modern UI/UX practices. Each project solves real-world problems with clean and scalable design.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:mx-8 sm:mx-12 lg:grid-cols-3 gap-10 w-full max-w-6xl mb-8">
          
          {/* ToDo List App */}
          <div className="relative p-4 bg-gray-100 shadow-lg rounded-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] hover:text-white cursor-pointer transition duration-300 ease-in-out">
            <img src={todo} alt='ToDo List' className="w-full h-56 object-contain rounded-lg mt-4 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">ToDo List App</h2>
            <p className="text-gray-600 mx-4 pb-6">A sleek task management tool to add, delete, and mark tasks complete, built with React for a responsive and dynamic experience.</p>
            <div className='mt-6'>
            <a href="https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-20 text-white">
              <img src={CodeLink} alt="Video Logo" className="w-10 h-10 invert hover:invert-0 ease-in-out" />
            </a>
            <button onClick={() => handleOpenVideo(ToDo)}  className="absolute bottom-4 right-4">
              <img src={videoLogo} alt="play" className="w-10 h-10 invert"></img>
            </button>
            </div>
            <VideoModal isOpen={showVideo} onclose = {handleCloseVideo} videoSrc={videoSrc} />
          
          </div>

          {/* Place Picker */}
          <div className="relative p-4 bg-gray-100 shadow-lg rounded-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] hover:text-white cursor-pointer transition duration-300 ease-in-out">
            <img src={placepicker} alt='Place Picker' className="w-full h-56 object-contain rounded-lg mt-4 mb-6" />
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Place Picker</h2>
            <p className="text-gray-600 mx-4 pb-6">An interactive app to pick and mark places on the map using location APIs. Perfect for travel planning or geo-tagging activities.</p>
            <div className='mt-6'>
            <a href="https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-20 text-white">
              <img src={CodeLink} alt="Video Logo" className="w-10 h-10 invert hover:invert-0 ease-in-out" />
            </a>
            <button onClick={() => handleOpenVideo(PlacePicker)}  className="absolute bottom-4 right-4">
              <img src={videoLogo} alt="play" className="w-10 h-10 invert"></img>
            </button>
            </div>
            <VideoModal isOpen={showVideo} onclose = {handleCloseVideo} videoSrc={videoSrc} />
          
          </div>

          {/* Task Manager */}
          <div className="relative p-4 bg-gray-100 shadow-lg rounded-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] hover:text-white cursor-pointer transition duration-300 ease-in-out">
            <img src={taskmanager} alt='Task Manager' className="w-full h-56 object-contain rounded-lg mt-4 mb-6" />
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Task Manager</h2>
            <p className="text-gray-600 mx-4 pb-6">Manage tasks and deadlines with this organized dashboard. Features task tracking, editing, and priority setting using React and state management.</p>
            <div className='mt-6'>
            <a href="https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-20 text-white">
              <img src={CodeLink} alt="Video Logo" className="w-10 h-10 invert hover:invert-0 ease-in-out" />
            </a>
            <button onClick={() => handleOpenVideo(TaskManager)}  className="absolute bottom-4 right-4">
              <img src={videoLogo} alt="play" className="w-10 h-10 invert"></img>
            </button>
            </div>
            <VideoModal isOpen={showVideo} onclose = {handleCloseVideo} videoSrc={videoSrc} />
          
          </div>

          <div className="p-4 bg-transparent"></div>
        </div>

        <Link to="/" className="mt-8 mb-12 px-6 py-3 bg-text1 text-secondary font-semibold rounded-lg hover:bg-text2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105">
          Back to Projects
        </Link>
      </div>
    </div>
  );
}

export default Frontend;
