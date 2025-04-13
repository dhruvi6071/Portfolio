import img from '../assets/inventory1.png';
import img1 from '../assets/idea1.png';
import img2 from '../assets/project1.png';
// import { Link } from 'react-router-dom';

const openMiniProject = () => {
  const newTab = window.open('/mini-projects', '_blank');
  if (newTab) {
    newTab.focus(); // Ensures the new tab is focused
  }
};

const openFrontEndProject = () => {
  const newTab = window.open('/front-end-projects', '_blank');
  if (newTab) {
    newTab.focus(); // Ensures the new tab is focused
  }
};

const openFullStackProject = () => {
  const newTab = window.open('/full-stack-projects', '_blank');
  if (newTab) {
    newTab.focus(); // Ensures the new tab is focused
  }
};

export default function Projects() {
  return (
    <div id="Projects" className="h-full bg-gradient-to-t from-third to-secondary pb-10 overflow-x-hidden">
  <div className="flex justify-center text-text2 text-4xl sm:text-3xl md:text-6xl font-bold pt-20 md:pt-40">
    Projects
  </div>
  

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12 lg:gap-14 px-6 md:px-16 lg:px-28 mt-12 lg:mt-24">
        
        {/* Mini-Projects */}
        <div onClick={openMiniProject} className="flex flex-col items-center w-full sm:w-[90%] md:w-[80%] lg:w-[80%] bg-fifth rounded-xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
          <img src={img} alt="Mini-Projects" className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 mb-4" />
          <div className="text-center text-secondary font-semibold text-xl sm:text-2xl md:text-2xl mb-4">
            Mini-Projects
          </div>
          <div className="text-primary font-roboto text-sm sm:text-base md:text-lg text-center pb-6">
            I have worked on various mini-projects using React, applying simple DSA logic to solve practical problems. These projects demonstrate my ability to break down tasks into logical steps, write efficient code, and build functional user interfaces with creativity and technical precision.
          </div>
        </div>

        {/* Front-End Projects */}
        <div onClick={openFrontEndProject} className="flex flex-col items-center w-full sm:w-[90%] md:w-[80%] lg:w-[80%] bg-fifth rounded-xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
          <img src={img1} alt="Front-End Projects" className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 mb-4" />
          <div className="text-center text-secondary font-semibold text-xl sm:text-2xl md:text-2xl mb-4">
            Front-End Projects
          </div>
          <div className="text-primary font-roboto text-sm sm:text-base md:text-lg text-center pb-6">
            I have developed frontend projects using React JS and Tailwind CSS, focusing on creating visually appealing and highly responsive UI. These projects highlight my expertise in UI-UX design and my ability to deliver seamless user experiences through modern web development practices.
          </div>
        </div>

        {/* Full-Stack Projects */}
        <div onClick={openFullStackProject} className="flex flex-col items-center w-full sm:w-[90%] md:w-[80%] lg:w-[80%] bg-fifth rounded-xl shadow-lg p-4 sm:p-6 md:p-8 lg:p-10 transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer">
          <img src={img2} alt="Full-Stack Projects" className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 mb-4" />
          <div className="text-center text-secondary font-semibold text-xl sm:text-2xl md:text-2xl mb-4">
            Full-Stack Projects
          </div>
          <div className="text-primary font-roboto text-sm sm:text-base md:text-lg text-center pb-6">
            I have built full-stack applications featuring robust authentication and seamless backend integration. Leveraging technologies like React and Firebase, these projects showcase my proficiency in both frontend and backend development, ensuring secure and scalable solutions for real-world needs.
          </div>
        </div>

      </div>
    </div>
  );
}
