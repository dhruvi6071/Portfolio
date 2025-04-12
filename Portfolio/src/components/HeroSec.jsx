import ill3 from '../assets/girldev.png';
import el2 from '../assets/ellipse2.png';
import el3 from '../assets/ellipse3.png';
import './Herosec.css';

function HeroSec() {
  return (
    <div id="Home" className="maincontainer pt-16 max-container bg-secondary w-full min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center overflow-x-hidden px-6 lg:px-20">
      
      {/* Text Container */}
      <div className="textcontainer text-text1 font-outfit w-full flex flex-col items-center lg:items-start text-center lg:text-left">
        <p className="greet text-2xl md:text-3xl font-bold z-10 relative">Hello, I am</p>
        <p className="name py-1 text-3xl md:text-4xl lg:text-5xl font-bold text-text2 z-10">Dhruvi Raj !!</p>
        <p className="intro py-2 text-xl md:text-2xl font-semibold z-10">Web Designer & Developer</p>
        <p className="t1 text-sm md:text-base z-10">A passionate software developer and</p>
        <p className="t1 text-sm md:text-base font-roboto z-10">technology enthusiast</p>

        {/* Floating Elements */}
        <img src={el2} alt="el1" className="ball1 absolute top-20 md:top-32 left-4 lg:left-0 z-0 object-cover w-12 md:w-16 lg:w-auto ml-10"  />
        <img src={el3} alt="el1" className="ball2 absolute left-1/3 z-0 object-cover w-12 md:w-16 lg:w-auto"/>
      </div>

      {/* Image Container */}
      <div className="imgcontainer w-full flex justify-center items-center">
        <img src={ill3} alt="Developer illustrator" className="w-[180px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[600px] h-auto object-cover" />
      </div>

    </div>
  );
}

export default HeroSec;
