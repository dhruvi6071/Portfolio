// import React from 'react'
import img1 from "../assets/Git.png";
import img2 from "../assets/LinkedIn.png";
import img3 from "../assets/Email.png";

function Footer() {
  return (
    <div id="Contact" className="h-full bg-sixth overflow-x-hidden">
      <div className="flex justify-center text-text2 text-4xl sm:text-3xl md:text-6xl font-bold pt-8 md:pt-14 mb-8">
        Connect With Me
      </div>
      <div className="flex justify-center items-center pb-10">
        <a href="mailto:dhruvi6071@gmail.com">
        <img
    src={img3}
    alt="e-mail"
    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 ml-4 mt-2 opacity-80 hover:cursor-pointer hover:opacity-100 transition-transform hover:scale-110"
  />
        </a>
        <a
          href="https://www.linkedin.com/in/dhruvi-raj-34841924b"
          target="_blank"
        >
           <img
    src={img2}
    alt="Linkedin"
    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 ml-4 mt-2 opacity-80 hover:cursor-pointer hover:opacity-100 transition-transform hover:scale-110"
  />
        </a>
        <a href="https://github.com/dhruvi6071" target="_blank">
        <img
    src={img1}
    alt="github"
    className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 ml-4 mt-2 opacity-80 hover:cursor-pointer hover:opacity-100 transition-transform hover:scale-110"
  />
        </a>
        {/* <img
          src={img3}
          alt="e-mail"
          className="h-12 w-12 ml-5 mt-2 opacity-80 hover:cursor-pointer hover:opacity-100"
        /> */}
        {/* <img src={img2} alt="Linkedin" className="h-12 w-12 ml-5 mt-2 opacity-80 hover:cursor-pointer hover:opacity-100" /> */}
        {/* <img src={img1} alt="github" className="h-12 w-12 ml-5 mt-2 opacity-80 hover:cursor-pointer hover:opacity-100" /> */}
      </div>
      <div>
        <p className="flex justify-center text-text2 pb-2">
          &copy; 2025 Dhruvi Raj. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
