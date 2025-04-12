import ill3 from '../assets/girldev.png';
import el2 from '../assets/ellipse2.png';
import el3 from '../assets/ellipse3.png';
import './Herosec.css';

function HeroSec() {
  return (
    <div
      id="Home"
      className="maincontainer pt-20 max-container bg-secondary w-full min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center overflow-x-hidden px-4 sm:px-6 lg:px-20"
    >
      {/* Text Container */}
      <div className="textcontainer text-text1 font-outfit w-full flex flex-col items-center lg:items-start text-center lg:text-left relative mt-10 lg:mt-0">
        <p className="greet text-xl sm:text-2xl md:text-3xl font-bold z-10">Hello, I am</p>
        <p className="name py-1 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text2 z-10">
          Dhruvi Raj !!
        </p>
        <p className="intro py-1 text-lg sm:text-xl md:text-2xl font-semibold z-10">
          Web Designer & Developer
        </p>
        <p className="t1 text-sm sm:text-base z-10">A passionate software developer and</p>
        <p className="t1 text-sm sm:text-base font-roboto z-10">technology enthusiast</p>

        {/* Floating Elements */}
        <img
          src={el2}
          alt="el1"
          className="ball1 absolute top-8 sm:top-20 left-2 sm:left-6 lg:left-0 z-0 w-10 sm:w-12 md:w-16"
        />
        {/* <img
          src={el3}
          alt="el1"
          className="ball2 absolute top-28 sm:top-32 left-1/2 transform -translate-x-1/2 z-0 w-10 sm:w-12 md:w-16"
        /> */}
      </div>

      {/* Image Container */}
      <div className="imgcontainer w-full flex justify-center items-center z-10">
        <img
          src={ill3}
          alt="Developer illustrator"
          className="w-[160px] sm:w-[250px] md:w-[350px] lg:w-[500px] xl:w-[600px] h-auto object-cover"
        />
      </div>
    </div>
  );
}

export default HeroSec;
