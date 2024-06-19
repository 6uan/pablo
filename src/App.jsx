import "./index.css";
import Header from "./components/Header";
import Content from "./components/Content";
import x from "./assets/x.webp";
import pump from "./assets/pump.png";
import Marquee from "react-fast-marquee";
import PabloImg from "./components/PabloImg";

import pablo from "./assets/pablo.webp";

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center px-auto pt-5 overflow-visible w-auto">
        <p className="bg-white w-auto p-4 font-semibold text-4xl text-black">
          3De8feegw4G4wggegsqeqkaiopump
        </p>
        <div className=" h-20 w-20">
          <img src={x} className="content-fit" />
        </div>

        <div className="h-20 h w-20 flex justify-center items-center">
          <img src={pump} className="h-14 w-14 w content-fit" />
        </div>
      </div>
      <Content />

      <Marquee direction="right">
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
      </Marquee>

      <Marquee>
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
        <PabloImg src={pablo} />
      </Marquee>
    </>
  );
}

export default App;
