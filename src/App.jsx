import "./index.css";
import Header from "./components/Header";
import Content from "./components/Content";
import x from "./assets/x.webp";
import pump from "./assets/pump.png";
import Marquee from "react-fast-marquee";
import PabloImg from "./components/PabloImg";
import PabloSmallImg from "./components/PabloSmallImg";
import memeNames from "./utils/memeImages.js";
import PabloWideImg from "./components/PabloWideImg.jsx";
import Collage from "./components/Collage.jsx";
import telegram from "./assets/telegram.png";

function App() {
  console.log(memeNames.pablo);
  return (
    <>
      <Header />
      <div className="px-10 flex flex-col xl:flex-row justify-center pt-5 overflow-visible w-auto">
        <p
          className="bg-white text-center 
         md:w-auto p-4 font-semibold 
         text-[15px] md:text-[35px] lg:text-[40px] xl:text-[50px] text-black"
        >
          3De8feegw4G4wggegsqeqkaiopump
        </p>
        <div className="flex flex-row justify-center items-center">
          <div className="h-24 w-24 md:h-20 md:w-20">
            <a
              className="hover:cursor-pointer"
              target="_blank"
              href="https://x.com/elpablosol"
            >
              <img src={x} className="content-fit " />
            </a>
          </div>

          <div className="h-24 w-24 md:h-20 md:w-20 flex justify-center items-center">
            <img
              src={pump}
              className="h-16 w-16 md:h-14 md:w-14 w content-fit"
            />
          </div>

          <div className="h-24 w-24 md:h-20 md:w-20 flex justify-center items-center">
            <a
              className="hover:cursor-pointer"
              target="_blank"
              href="https://t.me/ElPabloSolana"
            >
              <img
                src={telegram}
                className="h-14 w-14 md:h-12 md:w-12 w content-fit"
              />
            </a>
          </div>
        </div>
      </div>
      <Content />

      <Marquee direction="right">
        <PabloImg src={memeNames.pablo} />
        <PabloImg src={memeNames.pablochain} />
        <PabloImg src={memeNames.pablobeach} />
        <PabloImg src={memeNames.pablofrench} />
        <PabloImg src={memeNames.lifeofpablo} />
        <PabloImg src={memeNames.pablomodelo} />
        <PabloImg src={memeNames.pablomariachi} />
        <PabloImg src={memeNames.pablobernie} />
      </Marquee>

      <Marquee>
        <PabloWideImg src={memeNames.pablorocks} />
        <PabloWideImg src={memeNames.wolfofpablo} />
        <PabloWideImg src={memeNames.pablowhitehouse} />
        <PabloWideImg src={memeNames.pabloirish} />
        <PabloWideImg src={memeNames.pablorocks} />
        <PabloWideImg src={memeNames.wolfofpablo} />
        <PabloWideImg src={memeNames.pablowhitehouse} />
        <PabloWideImg src={memeNames.pabloirish} />
      </Marquee>

      <Marquee direction="right">
        <PabloSmallImg src={memeNames.pabloescobar} />
        <PabloSmallImg src={memeNames.pablowar} />
        <PabloSmallImg src={memeNames.pabloparty} />
        <PabloSmallImg src={memeNames.pablomcdees} />
        <PabloSmallImg src={memeNames.pablobus} />
        <PabloSmallImg src={memeNames.pabloree} />
        <PabloSmallImg src={memeNames.pabloirish} />
        <PabloSmallImg src={memeNames.pablo} />
        <PabloSmallImg src={memeNames.pabloescobar} />
        <PabloSmallImg src={memeNames.pablotate} />
        <PabloSmallImg src={memeNames.pabloheart} />
        <PabloSmallImg src={memeNames.pablodrake} />
        <PabloSmallImg src={memeNames.pablofacetime} />
        <PabloSmallImg src={memeNames.pabloirish} />
        <PabloSmallImg src={memeNames.pablo} />
        <PabloSmallImg src={memeNames.pablosign} />
        <PabloSmallImg src={memeNames.pablotate} />
        <PabloSmallImg src={memeNames.pabloheart} />
        <PabloSmallImg src={memeNames.pablodrake} />
        <PabloSmallImg src={memeNames.pablofacetime} />
      </Marquee>

      <Collage />

      {/* 

      <Marquee direction="down">
        <PabloImg src={memeNames.pablo} />
        <PabloImg src={memeNames.pablochain} />
        <PabloImg src={memeNames.pablobeach} />
        <PabloImg src={memeNames.pablofrench} />
        <PabloImg src={memeNames.lifeofpablo} />
        <PabloImg src={memeNames.pablomodelo} />
        <PabloImg src={memeNames.pabloree} />
        <PabloImg src={memeNames.pablobernie} />
      </Marquee> */}
    </>
  );
}

export default App;
