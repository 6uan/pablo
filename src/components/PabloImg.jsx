export default function PabloImg({ src }) {
  return (
    <div className="h-96 w-96 flex justify-center items-center">
      <img src={src} className="h-80 hw-80 w content-fit" />
    </div>
  );
}
