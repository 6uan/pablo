export default function PabloImg({ src }) {
  return (
    <div className="h-[340px] w-[340px] flex justify-center items-center">
      <img src={src} className="h-80 w-80 content-fit" />
    </div>
  );
}
