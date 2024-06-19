export default function PabloSmallImg({ src }) {
    return (
      <div className= "h-28 w-28 flex justify-center items-center">
        <img src={src} className="h-24 w-24 content-fit" />
      </div>
    );
  }
  