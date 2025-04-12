import ill4 from "../assets/dev2.png";
// import el2 from "../assets/Ellipse4.png";
// import el3 from "../assets/Ellipse5.png";

function AboutMe() {
  return (
    <div id="About%20us" className="sm:pb-e8 flex flex-col-reverse lg:flex-row items-center justify-center bg-gradient-to-t from-third to-secondary py-12 lg:py-24 px-6 md:px-12 overflow-x-hidden z-[-1]">
      
      {/* Image Container */}
      <div className="imgcontainer w-full lg:w-1/2 flex justify-center items-center">
        <img 
          src={ill4} 
          alt="Developer illustration" 
          className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-4/5 xl:w-3/5 h-auto hidden sm:block"
        />
      </div>

      {/* Text Container */}
      <div className="txtcontainer relative w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
        <div className="text-text1 font-outfit w-full md:w-4/5 lg:w-3/4 mx-auto relative">
          <p className="title text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 z-10">
            About Me
          </p>
          <p className="text text-base sm:text-lg md:text-xl text-text1 font-roboto z-10 text-justify leading-relaxed px-4 sm:px-6">
            I’m Dhruvi Raj, a Computer Engineering student and President of Club IDE, as well as a Core Team Member at GDSC. Proficient in Java, DSA, React, and Firebase, I’ve completed over 20 projects, including Place Picker and WildGuard. Passionate about problem-solving, tech events, and creative web design, I also enjoy exploring Python and staying updated with the latest trends. Beyond coding, I love reading articles and exploring innovative tech ideas.
          </p>
        </div>

        {/* Floating Elements */}
        {/* <img src={el2} alt="el1" className="ball1 absolute top-10 left-6 sm:left-10 lg:left-16 w-12 sm:w-16 lg:w-20 z-[-1]" /> */}
        {/* <img src={el3} alt="el2" className="ball2 absolute top-40 right-10 sm:right-16 lg:right-32 w-12 sm:w-16 lg:w-20 z-[-1]" /> */}
      </div>

    </div>
  );
}

export default AboutMe;
