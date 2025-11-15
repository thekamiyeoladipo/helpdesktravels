import FlagMarquee from "../components/FlagMarquee";
import { useEffect, useState } from "react";


const heroSlides = [
  {
    image: "/images/safari.jpg",
    title: "Helpdesk Travels & Tours",
    subtitle: "Explore the world with our curated tours and experiences.",
  },
  {
    image: "/images/beach.jpg",
    title: "Discover Exotic Beaches",
    subtitle: "Relax and unwind on the most beautiful beaches around the globe.",
  }
  // add more slides…
];


export default function Home() {
   const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActiveSlide((prev) => (prev + 1) % heroSlides.length),
      2000
    );
    return () => clearInterval(id);
  }, []);

 return (
    <>
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="relative z-10 px-6 py-10 text-center text-white">
          <span className="text-sm font-semibold tracking-[0.3em] uppercase text-white/80">
            Journey On
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-semibold">
            {heroSlides[activeSlide].title}
          </h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto text-white/90">
            {heroSlides[activeSlide].subtitle}
          </p>
        </div>
        <div className="absolute inset-0 bg-black/40" aria-hidden />
      </section>
      <FlagMarquee />
    </>
  );
}
