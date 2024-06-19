import "./index.css";
import Header from "./components/Header";
import Content from "./components/Content";
import x from "./assets/x.webp";
import pump from "./assets/pump.png";
import Marquee from "react-fast-marquee";
import PabloImg from "./components/PabloImg";
import memeNames from "./utils/memeImages.js";

function App() {
  console.log(memeNames.pablo);
  return (
    <>
      <Header />
      <div className="flex justify-center px-auto pt-5 overflow-visible w-auto">
        <p className="bg-white w-auto p-4 font-semibold text-4xl text-black">
          3De8feegw4G4wggegsqeqkaiopump
        </p>
        <div className=" h-20 w-20">
          <a
            className="hover:cursor-pointer"
            target="_blank"
            href="https://x.com/elpablosol"
          >
            <img src={x} className="content-fit" />
          </a>
        </div>

        <div className="h-20 h w-20 flex justify-center items-center">
          <img src={pump} className="h-14 w-14 w content-fit" />
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
        <PabloImg src={memeNames.pabloree} />
        <PabloImg src={memeNames.pablobernie} />
      </Marquee>

      <Marquee>
        <PabloImg src={memeNames.pablo} />
        <PabloImg src={memeNames.pablochain} />
        <PabloImg src={memeNames.pablobeach} />
        <PabloImg src={memeNames.pablofrench} />
        <PabloImg src={memeNames.lifeofpablo} />
        <PabloImg src={memeNames.pablomodelo} />
        <PabloImg src={memeNames.pabloree} />
        <PabloImg src={memeNames.pablobernie} />
      </Marquee>
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
