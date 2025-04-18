// import html from '../assets/SourceCode.png';
import tcss from '../assets/TailwindCSS.png';
import js from '../assets/JavaScriptt.png';
import react from '../assets/React.png';
import redux from '../assets/Redux.png';
import api from '../assets/RestAPI.png';
import firebase from '../assets/Firebase.png';
import node from '../assets/JavaScript.png';
import postman from '../assets/PostmanApi.png';
import github from '../assets/GitHub.png';
import java from '../assets/Java.png';
// import c from '../assets/C.png';
import python from '../assets/Python.png';

function Skills() {
  return (
    <div id="Skills" className="h-full bg-gradient-to-t from-secondary to-third pb-12 overflow-x-hidden">
      <div className="text-text2 flex justify-center text-3xl sm:text-6xl font-bold pt-20">
        Skills
      </div>

      {/* Front-End Section */}
      <div className="text-text1 pt-16 text-xl sm:text-4xl font-semibold px-6 md:px-28">
        Front-End
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-6 md:px-28">
        {[{ img: react, name: "React.js" }, { img: tcss, name: "TAILWIND CSS" }, { img: js, name: "JAVASCRIPT" }, {img : node, name: "Next.js"}].map((skill, index) => (
          <div key={index} className="bg-text1 bg-opacity-20 w-full h-52 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105">
            <img src={skill.img} alt={`${skill.name}-logo`} className='h-20 w-20 mb-3' />
            <div className='pt-1 pb-1 text-text2 text-base md:text-2xl font-semibold text-opacity-80'>{skill.name}</div>
          </div>
        ))}
      </div>

      {/* Back-End/Tools Section */}
      <div className="text-text1 pt-16 text-xl sm:text-4xl font-semibold px-6 md:px-28 pb-1">
        Back-End/Tools
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-6 md:px-28">
        {[{ img: redux, name: "REDUX" }, { img: firebase, name: "FIREBASE" }, { img: node, name: "NODE JS" }].map((skill, index) => (
          <div key={index} className="bg-text1 bg-opacity-20 w-full h-52 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105">
            <img src={skill.img} alt={`${skill.name}-logo`} className='h-20 w-20 mb-3' />
            <div className='pt-1 pb-1 text-text2 text-base md:text-2xl font-semibold text-opacity-80'>{skill.name}</div>
          </div>
        ))}
      </div>

      {/* Other Tools Section */}
      <div className="text-text1 pt-16 text-xl sm:text-4xl font-semibold px-6 md:px-28 pb-1">
        Other Tech
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-6 md:px-28">
        {[{ img: postman, name: "POSTMAN" }, { img: github, name: "GITHUB" }, { img: api, name: "REST-API" }].map((skill, index) => (
          <div key={index} className="bg-text1 bg-opacity-20 w-full h-52 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105">
            <img src={skill.img} alt={`${skill.name}-logo`} className='h-20 w-20 mb-3' />
            <div className='pt-1 pb-1 text-text2 text-base md:text-2xl font-semibold text-opacity-80'>{skill.name}</div>
          </div>
        ))}
      </div>

      {/* Programming Languages Section */}
      <div className="text-text1 pt-16 text-xl sm:text-4xl font-semibold px-6 md:px-28 pb-1">
        Programming Languages
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-6 md:px-28">
        {[{ img: java, name: "JAVA" }, { img: python, name: "PYTHON" }].map((skill, index) => (
          <div key={index} className="bg-text1 bg-opacity-15 w-full h-52 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105">
            <img src={skill.img} alt={`${skill.name}-logo`} className='h-20 w-20 mb-3' />
            <div className='pt-1 pb-1 text-text2 text-base md:text-2xl font-semibold text-opacity-80'>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}



export default Skills;
