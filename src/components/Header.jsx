import pablo from "../assets/pablo.webp";
import pablocutout from "../assets/pablocutout.png";
import pc from "../assets/pc.png";

export default function Header() {
  return (
    <header className="flex w-full h-[600px] justify-center items-center bg-transparent p-4">
      <div className="w-[400px] h-[400px] text-white flex justify-center items-center">
        <div className="flex flex-col h-[400px] gap-0">
          <div className="z-20 hover:animate-bounce">
            <img src={pablocutout} className="content-fit" alt="logo" />
          </div>

          <div className="flex justify-center items-start mt-[-100px]">
            <img src={pc} className="content-fit z-0 rotate-90" alt="logo" />
          </div>
        </div>
        <h1 className="flex justify-center items-center absolute text-[450px] font-open leading-[450px]">
          PABLO
        </h1>
      </div>
    </header>
  );
}
