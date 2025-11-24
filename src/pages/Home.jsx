import { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import FlagMarquee from "../components/FlagMarquee";
import bg1 from "../assets/images/bg1.jpg";
import bg2 from "../assets/images/bg2.jpg";
import bg3 from "../assets/images/bg3.jpg";

const heroSlides = [
  {
    id: 1,
    label: "Journey On",
    title: "Helpdesk Travels & Tours",
    description: "Explore the world with curated adventures designed for every kind of traveler.",
    image: bg1,
  },
  {
    id: 2,
    label: "Exclusive Escapes",
    title: "Luxury Meets Culture",
    description: "Experience bespoke itineraries that blend comfort, culture, and unforgettable memories.",
    image: bg2,
  },
  {
    id: 3,
    label: "Beyond Borders",
    title: "Discover Hidden Gems",
    description: "Go off the beaten path with guided tours that bring you closer to local life.",
    image: bg3,
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  return (
    <>
      <section className="relative overflow-hidden text-white">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
            aria-hidden={index !== activeSlide}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" aria-hidden />
        <div className="relative z-10 flex flex-col min-h-[90vh] md:min-h-screen">
          <TopBar variant="hero" />
          <Navbar variant="hero" />
          <div className="flex flex-col flex-1 items-center justify-center px-6 py-12 text-center">
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-white/80">
              {currentSlide.label}
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold">{currentSlide.title}</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">{currentSlide.description}</p>
          </div>
        </div>
      </section>
      <FlagMarquee />
    </>
  );
}
