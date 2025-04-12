import { Link } from 'react-router-dom';
import videoLogo from "../assets/miniproject-img/CircledPlay1.png"; 
import CodeLink from "../assets/miniproject-img/Link.png";
import event from "../assets/FullStack/event.jpg";
import foodorderingsite from "../assets/FullStack/Foodorderingsite.jpeg";
import meetup from "../assets/FullStack/Meetup.jpeg";

import { useState } from 'react';
import VideoModal from './VideoModal';
import EventManagement from "../assets/videoFullStack/event-management.mp4";
import FOS from "../assets/videoFullStack/food-ordering-site.mp4";
import MeetUp from "../assets/videoFullStack/meetup.mp4";

const FullStack = () => {
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
            <h1 className="text-3xl font-bold text-text1 sm:text-5xl md:text-6xl lg:text-7xl mb-12 mt-12 ">Full Stack Projects</h1>
            <p className="text-sm sm:text-md md:text-lg lg:text-xl text-text1 text-center mb-32 mx-20 max-w-4xl">
              Explore the full-stack projects I have developed to enhance my skills with both frontend and backend technologies. Each project integrates robust server-side logic with clean and scalable UI/UX design.
            </p>
    
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:mx-8 sm:mx-12 lg:grid-cols-3 gap-10 w-full max-w-6xl mb-8">
              
              {/* Event Management App */}
              <div className="relative p-4 bg-gray-100 shadow-lg rounded-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] hover:text-white cursor-pointer transition duration-300 ease-in-out">
                <img src={event} alt='Event Management' className="w-full h-56 object-contain rounded-lg mt-4 mb-4" />
                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Event Management App</h2>
                <p className="text-gray-600 mx-4 pb-6">A dedicated platform built for managing college club activities like hosting events, sharing newsletters, and coordinating team updates. This full-stack solution supports event announcements, member management, and information sharing for active campus engagement.</p>
                <div className='mt-6'>
            <a href="https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-20 text-white">
              <img src={CodeLink} alt="Video Logo" className="w-10 h-10 invert hover:invert-0 ease-in-out" />
            </a>
            <button onClick={() => handleOpenVideo(EventManagement)}  className="absolute bottom-4 right-4">
              <img src={videoLogo} alt="play" className="w-10 h-10 invert"></img>
            </button>
            </div>
            <VideoModal isOpen={showVideo} onclose = {handleCloseVideo} videoSrc={videoSrc} />
          
              </div>
    
              {/* Food Ordering Site */}
              <div className="relative p-4 bg-gray-100 shadow-lg rounded-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] hover:text-white cursor-pointer transition duration-300 ease-in-out">
                <img src={foodorderingsite} alt='Food Ordering' className="w-full h-56 object-contain rounded-lg mt-4 mb-6" />
                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Food Ordering Site</h2>
                <p className="text-gray-600 mx-4 pb-6">A full-stack application for ordering food online. It includes user authentication, menu browsing, cart management, and payment processing, using React, Node.js, and MongoDB.</p>
                <div className='mt-6'>
            <a href="https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-20 text-white">
              <img src={CodeLink} alt="Video Logo" className="w-10 h-10 invert hover:invert-0 ease-in-out" />
            </a>
            <button onClick={() => handleOpenVideo(FOS)}  className="absolute bottom-4 right-4">
              <img src={videoLogo} alt="play" className="w-10 h-10 invert"></img>
            </button>
            </div>
            <VideoModal isOpen={showVideo} onclose = {handleCloseVideo} videoSrc={videoSrc} />
          
              </div>
    
              {/* Meetup App */}
              <div className="relative p-4 bg-gray-100 shadow-lg rounded-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] hover:text-white cursor-pointer transition duration-300 ease-in-out">
                <img src={meetup} alt='Meetup App' className="w-full h-56 object-contain rounded-lg mt-4 mb-6" />
                <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Meetup App</h2>
                <p className="text-gray-600 mx-4 pb-6"> A full-stack community platform that helps people discover and attend public events. This app brings individuals together for shared interests, fostering connections and community through meetups hosted by anyone. Built with React, Node.js, and MongoDB.</p>
                <div className='mt-6'>
            <a href="https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-20 text-white">
              <img src={CodeLink} alt="Video Logo" className="w-10 h-10 invert hover:invert-0 ease-in-out" />
            </a>
            <button onClick={() => handleOpenVideo(MeetUp)}  className="absolute bottom-4 right-4">
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

export default FullStack;
