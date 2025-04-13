import { Link } from 'react-router-dom';
import Cart from "../assets/miniproject-img/cartfunctionality.png";
import animation from "../assets/miniproject-img/AnimationGame.jpg";
import counter from "../assets/miniproject-img/Counter.png";
import game from "../assets/miniproject-img/game-logo.png";
import investment from "../assets/miniproject-img/investment-calculator-logo.png";
import videoLogo from "../assets/miniproject-img/CircledPlay1.png";
import CodeLink from "../assets/miniproject-img/Link.png"

import VidInvest from "../assets/videoMiniProject/InvestmentCalc.mp4";
import { useState } from 'react';
import VideoModal from './VideoModal';
import AnimationGame from "../assets/videoMiniProject/animation-game.mp4";
import CartBasic from "../assets/videoMiniProject/cart-basic.mp4";
import Counter from "../assets/videoMiniProject/counter.mp4";
import tictactoe from "../assets/videoMiniProject/tic-tac-toe.mp4";

const MiniProject = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const handleOpenVideo = (src) => {
    setVideoSrc(src);
    setShowVideo(true);
  };

  const handleCloseVideo = () => {
    setVideoSrc("");
    setShowVideo(false);
  }

  const projects = [
    {
      image: Cart,
      title: "Cart Functionality",
      description: "Add, remove, and update products in real-time, improving user shopping experience.",
      video: CartBasic,
      codeLink: "https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project"
    },
    {
      image: animation,
      title: "Animation Game",
      description: "An interactive animation-based game using modern JavaScript and CSS transitions.",
      video: AnimationGame,
      codeLink: "https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project"
    },
    {
      image: counter,
      title: "Counter App",
      description: "A simple yet powerful counter to increment and decrement values dynamically.",
      video: Counter,
      codeLink: "https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project"
    },
    {
      image: game,
      title: "Tic-Tac-Toe",
      description: "A cool mini-game built with logic and a bit of UI play to engage users.",
      video: tictactoe,
      codeLink: "https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project"
    },
    {
      image: investment,
      title: "Investment Calculator",
      description: "Calculate your investments returns based on input values and interest rates.",
      video: VidInvest,
      codeLink: "https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project"
    }
  ];

  return (
    <div className='h-full bg-gradient-to-t from-third to-secondary'>
      <div id="mini-projects" className="min-h-screen flex flex-col items-center justify-start text-center px-4 py-10 sm:py-12 sm:px-6 md:px-10 lg:px-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-text1 mb-6 sm:mb-10 mt-6 sm:mt-12">
          Mini Projects
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text1 text-center mb-16 sm:mb-24 md:mb-32 max-w-3xl sm:max-w-4xl">
          Here you can explore all the mini projects I have worked on. Each project showcases a different aspect of my development skills, from game creation to functionality implementation.
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:mx-8 sm:mx-12 lg:grid-cols-3 gap-10 w-full max-w-6xl mb-8">
          {projects.map((project, index) => (
            <div key={index} className="relative p-4 bg-gray-100 shadow-lg rounded-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] hover:text-white cursor-pointer transition duration-300 ease-in-out">
              <img src={project.image} alt={project.title} className="w-full h-56 object-contain rounded-lg mt-4 mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">{project.title}</h2>
              <p className="text-gray-600 mx-4 pb-6">{project.description}</p>
              {/* Link and Video Logo */}
              <div className='mt-6'>
                <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-20 text-white">
                  <img src={CodeLink} alt="Code Link" className="w-10 h-10 invert hover:invert-0 ease-in-out" />
                </a>
                <button onClick={() => handleOpenVideo(project.video)} className="absolute bottom-4 right-4">
                  <img src={videoLogo} alt="play" className="w-10 h-10 invert"></img>
                </button>
              </div>
              <VideoModal isOpen={showVideo} onclose={handleCloseVideo} videoSrc={videoSrc} />
            </div>
          ))}
        </div>

        {/* Back to Projects button */}
        <Link to="/" className="mt-8 mb-12 px-6 py-3 bg-text1 text-secondary font-semibold rounded-lg hover:bg-text2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105">
          Back to Projects
        </Link>
      </div>
    </div>
  );
}

export default MiniProject;
