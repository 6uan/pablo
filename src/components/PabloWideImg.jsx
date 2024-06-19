export default function PabloWideImg({ src }) {
  return (
    <div className=" h-48 w-[420px] flex justify-center items-center">
      <img src={src} className=" h-44 w-96 content-fit" />
    </div>
  );
}
