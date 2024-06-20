import pctitle from "../assets/pctitle.png";
import pablo_og from "../assets/pablo_og.jpeg";
import newpc from "../assets/newpc.png";
import quote from "../assets/big-quote-marks-opening.png";

export default function Content() {
  const text =
    "So dumb what people are doing, its just a dog and ppl are cutting this shitter up and posting on pc builds. Ruining the whole community n shit. So again stop being annoying, this dog is ugly anyways fkin hate chiwawas, anorexic looking mfs.";

  const words = text.split(/(\s+)/).map((word, index) => (
    <span
      key={index}
      className="hover:font-bold text-white hover:text-slate-500 cursor-default shadow-transparent"
      style={{ textShadow: "0 0 0px rgba(0,0,0,0)" }}
    >
      {word}
    </span>
  ));

  return (
    <div className="flex flex-col lg:flex-row w-full lg:h-[625px] justify-center items-center font-open bg-orange-300 p-4 px-24">
      <div className="h-full xl:w-1/2 sm:w-[450px] md:w-[500px] w-[350px]">
        <div className="md:pt-auto flex flex-col w-full md:w-auto md:h-full justify-center items-center">
          <img
            className="lg:w-[400px] w-[400px] object-cover border-[15px] bg-black border-black"
            src={pctitle}
          />
          <img
            className="lg:h-[300px] h-[200px] w-[400px] object-cover border-[15px] border-black"
            src={pablo_og}
          />
        </div>
      </div>
      <div className="relative flex h-full w-full lg:gap-5 justify-center items-center">
        <div className="z-0 absolute size-14 top-0 left-0 lg:top-20 lg:left-24">
          <img src={quote} />
        </div>
        <p className="lg:pl-20 z-10 font-open text-lg md:text-4xl pt-10 px-0 md:px-2 xl:px-24 leading-relaxed lx:leading-[55px]">
          <a href="https://www.reddit.com/r/PABLOSDECIPLES/comments/1d31ej5/this_is_stupid_fk_pablo/">
            {words}
          </a>
        </p>
      </div>
    </div>
  );
}
