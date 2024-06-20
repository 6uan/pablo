import pablohalo from "../assets/pablohalo.webp";
import newpablo from "../assets/newpablo.webp";
import pabloiq from "../assets/pabloiq.png";
import pabloblm from "../assets/pabloblm.png";
import PABLO from "../assets/PABLO.mov";
import pablovid from "../assets/pablovid.mp4";

import ReactPlayer from "react-player";

export default function Collage() {
  return (
    <>
      <div className="h-full lg:h-auto gap-3 grid grid-cols-3 grid-rows-4 bg-transparent">
        <img
          src={pabloiq}
          className="col-start-1 col-end-2 row-start-1 row-end-4 sm:h-full"
        />
        <img
          src={pablohalo}
          className="col-start-2 col-end-3 row-start-1 row-end-2 sm:h-full"
        />
        <img src={newpablo} className=" col-start-3 col-end-4 sm:h-full" />
        <img
          src={pabloblm}
          className="col-start-2 col-end-3 row-start-2 row-end-3 sm:h-full"
        />
        <div className="col-start-3 col-end-4 row-start-2 row-end-3 mb-3">
          <ReactPlayer url={PABLO} width="100%" height="100%" controls />
        </div>

        <div className="col-start-2 col-end-4 row-start-3 row-end-4">
          <ReactPlayer url={pablovid} width="100%" height="100%" controls />
        </div>

        <div className="col-start-1 col-end-4 row-start-4 row-end-5">
          <div className="flex justify-center items-center sm:h-full">
            <a
              href="https://www.example.com"
              className="flex items-center justify-center font-rubik text-5xl bg-[#fdba74] text-white w-96 h-44 rounded-3xl hover:bg-[#ffa94d] hover:text-black transition-colors"
            >
              BUY $PABLO
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
