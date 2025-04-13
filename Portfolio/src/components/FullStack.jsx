import { Link } from 'react-router-dom';
import { useState } from 'react';

import videoLogo from "../assets/miniproject-img/CircledPlay1.png"; 
import CodeLink from "../assets/miniproject-img/Link.png";
import event from "../assets/FullStack/event.jpg";
import foodorderingsite from "../assets/FullStack/Foodorderingsite.jpeg";
import meetup from "../assets/FullStack/Meetup.jpeg";

import EventManagement from "../assets/videoFullStack/event-management.mp4";
import FOS from "../assets/videoFullStack/food-ordering-site.mp4";
import MeetUp from "../assets/videoFullStack/meetup.mp4";

import VideoModal from './VideoModal';

const FullStack = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState(""); 

  const handleOpenVideo = (src) => {
    setVideoSrc(src);
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
    setVideoSrc("");
  };

  const projects = [
    {
      image: event,
      title: "Event Management App",
      description:
        "A dedicated platform built for managing college club activities like hosting events, sharing newsletters, and coordinating team updates.",
      video: EventManagement,
      code: "https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project",
    },
    {
      image: foodorderingsite,
      title: "Food Ordering Site",
      description:
        "A full-stack application for ordering food online. Includes user auth, menu, cart management, and payments using React, Node.js, and MongoDB.",
      video: FOS,
      code: "https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project",
    },
    {
      image: meetup,
      title: "Meetup App",
      description:
        "A full-stack platform that helps users discover and attend public events. Fosters connections through meetups hosted by anyone.",
      video: MeetUp,
      code: "https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project",
    },
  ];

  return (
    <div className="h-full bg-gradient-to-t from-third to-secondary">
      <div id="full-stack-projects" className="min-h-screen flex flex-col items-center justify-start text-center py-6 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text1 mb-6 sm:mb-10 mt-6 sm:mt-12">
          Full Stack Projects
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text1 text-center mb-16 sm:mb-24 md:mb-32 max-w-3xl sm:max-w-4xl">
          Explore the full-stack projects I have developed to enhance my skills with both frontend and backend technologies.
          Each project integrates robust server-side logic with clean and scalable UI/UX design.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-6xl mb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative p-4 bg-gray-100 shadow-lg rounded-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] hover:text-white cursor-pointer transition duration-300 ease-in-out"
            >
              <img src={project.image} alt={project.title} className="w-full h-56 object-contain rounded-lg mt-4 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">{project.title}</h2>
              <p className="text-gray-600 mx-4 pb-6">{project.description}</p>
              <div className="mt-6">
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-4 right-20 text-white"
                >
                  <img src={CodeLink} alt="Code Link" className="w-10 h-10 invert hover:invert-0 ease-in-out" />
                </a>
                <button onClick={() => handleOpenVideo(project.video)} className="absolute bottom-4 right-4">
                  <img src={videoLogo} alt="Play" className="w-10 h-10 invert" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/"
          className="mt-8 mb-12 px-6 py-3 bg-text1 text-secondary font-semibold rounded-lg hover:bg-text2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
        >
          Back to Projects
        </Link>
      </div>

      {showVideo && (
        <VideoModal isOpen={showVideo} onClose={handleCloseVideo} videoSrc={videoSrc} />
      )}
    </div>
  );
};

export default FullStack;
