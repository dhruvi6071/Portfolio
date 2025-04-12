import img1 from "../assets/ide.png";
import img2 from "../assets/gdsc.png";

function Enrichment() {
  return (
    <div id="Achievements" className="h-full bg-gradient-to-t from-secondary to-third pt-24 pb-28 overflow-x-hidden">
      <div className="flex justify-center text-text2 text-4xl md:text-6xl font-bold pt-20">
        Enrichment Activities
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center mt-16 gap-16 px-6 md:px-16 lg:px-32">
        <div className="flex flex-col items-center w-full sm:w-3/4 md:w-2/3 lg:w-1/4 bg-opacity-10 bg-text1 rounded-xl p-10 shadow-xl h-auto min-h-[400px]">
          <img src={img1} alt="ide" className="h-20 w-20 mt-4" />
          <div className="text-xl md:text-2xl text-text1 font-semibold text-center mt-4">President</div>
          <div className="text-text1 font-roboto text-sm md:text-base text-center mt-4">
            Successfully organized various technical and non-technical events at the club, providing valuable learning experiences for students. These initiatives have significantly enhanced my leadership abilities and strengthened my collaborative teamwork skills.
          </div>
        </div>
        
        <div className="flex flex-col items-center w-full sm:w-3/4 md:w-2/3 lg:w-1/4 bg-opacity-10 bg-text1 rounded-xl p-10 shadow-xl h-auto min-h-[400px]">
          <img src={img2} alt="gdsc" className="h-20 w-20 mt-4" />
          <div className="text-xl md:text-2xl text-text1 font-semibold text-center mt-4">Core-Team Member</div>
          <div className="text-text1 font-roboto text-sm md:text-base text-center mt-4">
            Contributed to organizing technical events suggested by GDSC, gaining valuable insights into event planning, and handling critical situations with effective solutions. These experiences have enhanced my organizational and problem-solving skills.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enrichment;
