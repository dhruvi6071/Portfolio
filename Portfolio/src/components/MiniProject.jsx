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
  const[showVideo, setShowVideo] = useState(false);
  const[videoSrc, setVideoSrc] = useState("");

  const handleOpenVideo = (src) => {
    setVideoSrc(src);
    setShowVideo(true);
  };

  const handleCloseVideo=() => {
    setVideoSrc("");
    setShowVideo(false);
  }


  return (
    <div className='h-full bg-gradient-to-t from-third to-secondary'>
      <div id='mini-projects' className="min-h-screen flex flex-col items-center justify-start text-center py-6 px-4">
        <h1 className="text-3xl font-bold text-text1 sm:text-5xl md:text-6xl lg:text-7xl mb-12 mt-12 ">Mini Projects</h1>
        <p className="text-sm sm:text-md md:text-lg lg:text-xl text-text1 text-center mb-32 mx-20 max-w-4xl">
          Here you can explore all the mini projects I have worked on. Each project showcases a different aspect of my development skills, from game creation to functionality implementation.
        </p>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 md:mx-8 sm:mx-12 lg:grid-cols-3 gap-10 w-full max-w-6xl mb-8">
          
          {/* Cart Functionality Project */}
          <div className="relative p-4 bg-gray-100 shadow-lg rounded-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] hover:text-white cursor-pointer transition duration-300 ease-in-out">
            <img src={Cart} alt='Cart-Functionality-image' className="w-full h-56 object-contain rounded-lg mt-4 mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Cart Functionality</h2>
            <p className="text-gray-600 mx-4 pb-6">Add, remove, and update products in real-time, improving user shopping experience.</p>
            {/* Link and Video Logo */}
            <div className='mt-6'>
            <a href="https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-20 text-white">
              <img src={CodeLink} alt="Video Logo" className="w-10 h-10 invert hover:invert-0 ease-in-out" />
            </a>
            <button onClick={() => handleOpenVideo(CartBasic)}  className="absolute bottom-4 right-4">
              <img src={videoLogo} alt="play" className="w-10 h-10 invert"></img>
            </button>
            </div>
            <VideoModal isOpen={showVideo} onclose = {handleCloseVideo} videoSrc={videoSrc} />
          </div>

          {/* Animation Game Project */}
          <div className="relative p-4 bg-gray-100 shadow-lg rounded-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] hover:text-white cursor-pointer transition duration-300 ease-in-out">
            <img src={animation} alt='Animation-Game-logo' className="w-full h-56 object-contain rounded-lg mt-4 mb-6" />
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Animation Game</h2>
            <p className="text-gray-600 mx-4 pb-6">An interactive animation-based game using modern JavaScript and CSS transitions.</p>
            {/* Link and Video Logo */}
            <div className='mt-6'>
            <a href="https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-20 text-white">
              <img src={CodeLink} alt="Video Logo" className="w-10 h-10 invert hover:invert-0 ease-in-out" />
            </a>
            <button onClick={() => handleOpenVideo(AnimationGame)}  className="absolute bottom-4 right-4">
              <img src={videoLogo} alt="play" className="w-10 h-10 invert"></img>
            </button>
            </div>
            <VideoModal isOpen={showVideo} onclose = {handleCloseVideo} videoSrc={videoSrc} />
          </div>

          {/* Counter App Project */}
          <div className="relative p-4 bg-gray-100 shadow-lg rounded-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] hover:text-white cursor-pointer transition duration-300 ease-in-out">
            <img src={counter} alt='counter-game' className="w-full h-56 object-contain rounded-lg mt-4 mb-6" />
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Counter App</h2>
            <p className="text-gray-600 mx-4 pb-6">A simple yet powerful counter to increment and decrement values dynamically.</p>
            {/* Link and Video Logo */}
            <div className='mt-6'>
            <a href="https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-20 text-white">
              <img src={CodeLink} alt="Video Logo" className="w-10 h-10 invert hover:invert-0 ease-in-out" />
            </a>
            <button onClick={() => handleOpenVideo(Counter)}  className="absolute bottom-4 right-4">
              <img src={videoLogo} alt="play" className="w-10 h-10 invert"></img>
            </button>
            </div>
            <VideoModal isOpen={showVideo} onclose = {handleCloseVideo} videoSrc={videoSrc} />
          </div>

          {/* Fun Game Project */}
          <div className="relative p-4 bg-gray-100 shadow-lg rounded-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] hover:text-white cursor-pointer transition duration-300 ease-in-out">
            <img src={game} alt='game-logo' className="w-full h-56 object-contain rounded-lg mt-4 mb-6" />
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Tic-Tac-Toe</h2>
            <p className="text-gray-600 mx-4 pb-6">A cool mini-game built with logic and a bit of UI play to engage users.</p>
            {/* Link and Video Logo */}
            <div className='mt-6'>
            <a href="https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-20 text-white">
              <img src={CodeLink} alt="Video Logo" className="w-10 h-10 invert hover:invert-0 ease-in-out" />
            </a>
            <button onClick={() => handleOpenVideo(tictactoe)}  className="absolute bottom-4 right-4">
              <img src={videoLogo} alt="play" className="w-10 h-10 invert"></img>
            </button>
            </div>
            <VideoModal isOpen={showVideo} onclose = {handleCloseVideo} videoSrc={videoSrc} />
          </div>

          {/* Investment Calculator Project */}
          <div className="relative p-4 bg-gray-100 shadow-lg rounded-lg hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.6)] hover:text-white cursor-pointer transition duration-300 ease-in-out">
            <img src={investment} alt='investment-calculator' className="w-full h-56 object-contain rounded-lg mt-4 mb-6" />
            <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Investment Calculator</h2>
            <p className="text-gray-600 mx-4 pb-6">Calculate your investments returns based on input values and interest rates.</p>
            {/* Link and Video Logo */}
            <div className='mt-6'>
            <a href="https://github.com/dhruvi6071/Investment-calculator-/tree/main/investment-application/01-starting-project" target="_blank" rel="noopener noreferrer" className="absolute bottom-4 right-20 text-white">
              <img src={CodeLink} alt="Video Logo" className="w-10 h-10 invert hover:invert-0 ease-in-out" />
            </a>
            <button onClick={() => handleOpenVideo(VidInvest)}  className="absolute bottom-4 right-4">
              <img src={videoLogo} alt="play" className="w-10 h-10 invert"></img>
            </button>
            </div>
            <VideoModal isOpen={showVideo} onclose = {handleCloseVideo} videoSrc={videoSrc} />
          </div>

          <div className="p-4 bg-transparent"></div>
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
