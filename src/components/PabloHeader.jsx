import lifeofpablobanner from "../assets/lifeofpablobanner.webp";

export default function PabloHeader() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <img
        src={lifeofpablobanner}
        className="mt-10 h-full w-full object-cover"
      />
    </div>
  );
}
