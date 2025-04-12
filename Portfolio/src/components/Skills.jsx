import html from '../assets/SourceCode.png';
import tcss from '../assets/TailwindCSS.png';
import js from '../assets/JavaScriptt.png';
import react from '../assets/React.png';
import redux from '../assets/Redux.png';
import api from '../assets/RestApi.png';
import firebase from '../assets/Firebase.png';
import node from '../assets/JavaScript.png';
import postman from '../assets/PostmanApi.png';
import github from '../assets/GitHub.png';
import java from '../assets/Java.png';
import c from '../assets/C.png';
import python from '../assets/Python.png';

function Skills() {
  return (
    <div id="Skills" className="h-full bg-gradient-to-t from-secondary to-third pb-12 overflow-x-hidden">
      <div className="text-text2 flex justify-center text-6xl font-bold pt-24">
        Skills
      </div>
      <div className="text-text1 pt-24 text-4xl font-semibold px-6 md:px-28">
        Front-End
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6 mt-10 px-6 md:px-28">
        {[{ img: html, name: "HTML/CSS" }, { img: tcss, name: "TAILWIND CSS" }, { img: js, name: "JAVASCRIPT" }, { img: react, name: "REACT JS" }].map((skill, index) => (
          <div key={index} className="bg-text1 bg-opacity-20 w-72 h-64 rounded-lg flex flex-col items-center justify-center">
            <img src={skill.img} alt={`${skill.name}-logo`} className='h-24 w-24 mb-4' />
            <div className='pt-2 pb-2 text-text2 text-2xl font-semibold text-opacity-80'>{skill.name}</div>
          </div>
        ))}
      </div>
      <div className="text-text1 pt-24 text-4xl font-semibold px-6 md:px-28 pb-3">
        Back-End/Tools
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6 mt-10 px-6 md:px-28">
        {[{ img: redux, name: "REDUX" }, { img: api, name: "REST-API" }, { img: firebase, name: "FIREBASE" }, { img: node, name: "NODE JS" }].map((skill, index) => (
          <div key={index} className="bg-text1 bg-opacity-20 w-72 h-64 rounded-lg flex flex-col items-center justify-center">
            <img src={skill.img} alt={`${skill.name}-logo`} className='h-24 w-24 mb-4' />
            <div className='pt-2 pb-2 text-text2 text-2xl font-semibold text-opacity-80'>{skill.name}</div>
          </div>
        ))}
      </div>
      <div className="text-text1 pt-24 text-4xl font-semibold px-6 md:px-28 pb-3">
        Other Tools
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6 mt-10 px-6 md:px-28">
        {[{ img: postman, name: "POSTMAN" }, { img: github, name: "GITHUB" }].map((skill, index) => (
          <div key={index} className="bg-text1 bg-opacity-20 w-72 h-64 rounded-lg flex flex-col items-center justify-center">
            <img src={skill.img} alt={`${skill.name}-logo`} className='h-24 w-24 mb-4' />
            <div className='pt-2 pb-2 text-text2 text-2xl font-semibold text-opacity-80'>{skill.name}</div>
          </div>
        ))}
      </div>
      <div className="text-text1 pt-24 text-4xl font-semibold px-6 md:px-28 pb-3">
        Programming Languages
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6 mt-10 px-6 md:px-28">
        {[{ img: java, name: "JAVA" }, { img: c, name: "C" }, { img: python, name: "PYTHON" }].map((skill, index) => (
          <div key={index} className="bg-text1 bg-opacity-15 w-72 h-64 rounded-lg flex flex-col items-center justify-center">
            <img src={skill.img} alt={`${skill.name}-logo`} className='h-24 w-24 mb-4' />
            <div className='pt-2 pb-2 text-text2 text-2xl font-semibold text-opacity-80'>{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
