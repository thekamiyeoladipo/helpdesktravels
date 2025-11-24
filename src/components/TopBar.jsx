export default function TopBar({ variant = "solid" }) {
  const isHero = variant === "hero";

  return (
    <div
      className={`hidden md:flex w-full text-sm px-6 py-2 justify-between items-center ${
        isHero ? "text-white/80" : "bg-gray-100 text-gray-700"
      }`}
    >
      <a
        href="tel:09068970066"
        className={`transition-colors ${isHero ? "hover:text-white" : "hover:text-blue-600"}`}
      >
        09068970066
      </a>
      <a
        href="mailto:helpdesktravelsandtours@gmail.com"
        className={`transition-colors ${isHero ? "hover:text-white" : "hover:text-blue-600"}`}
      >
        helpdesktravelsandtours@gmail.com
      </a>
    </div>
  );
}

