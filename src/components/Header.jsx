import pablo from "../assets/pablo.webp";
import pablocutout from "../assets/pablocutout.png";
import pc from "../assets/pc.png";

export default function Header() {
  return (
    <header className="px-24 md:px-5 flex flex-col md:flex-row w-full h-[800px] justify-center items-center bg-transparent p-4">
      <div className="mt-[200px] md:mt-0 w-[400px] h-[400px] text-white flex justify-center items-center">
        <div className="flex flex-col h-[400px] gap-0">
          <div className="z-20 hover:animate-bounce">
            <img src={pablocutout} className="content-fit" alt="logo" />
          </div>

          <div className="flex justify-center items-start mt-[-100px]">
            <img src={pc} className="content-fit z-0 rotate-90" alt="logo" />
          </div>
        </div>
        {/* <h1 className="flex justify-center items-center top-[-150px] lg:top-auto absolute text-[120px] md:text-[200px] lg:text-[300px] xl:text-[450px] font-rubik leading-[450px]">
          PABLO
        </h1> */}
      </div>
      <div className="w-[500px] text-center lg:ml-[50px] mb-[100px] md:mb-0 mt-[100px] h-96 justify-center text-[50px] md:text-[75px] lg:text-[90px] xl:text-[105px] font-rubik">
        EXPERIENCE <br /> THE LIFE OF
        <span className="ml-5 font-extrabold">$PABLO</span>
      </div>
    </header>
  );
}
