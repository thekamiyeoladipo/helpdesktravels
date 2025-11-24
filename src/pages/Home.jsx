import { useEffect, useRef, useState } from "react";
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

const valueCards = [
  {
    title: "Who We Are",
    description: "A boutique team of travel curators and fixers who obsess over every detail, so your trips feel effortless.",
    Icon: CompassIcon,
    accent: "#38bdf8",
  },
  {
    title: "Our Services",
    description: "Bespoke itineraries, visa assistance, flights, stays, and round-the-clock concierge support wherever you land.",
    Icon: SparklesIcon,
    accent: "#34d399",
  },
  {
    title: "Why Choose Us",
    description: "We blend local insight with premium partnerships, unlocking experiences that most travelers never see.",
    Icon: ShieldIcon,
    accent: "#a855f7",
  },
];

const bentoItems = [
  {
    title: "Oceanfront Hideaways",
    subtitle: "Coastlines",
    image: bg2,
    span: "sm:col-span-3 sm:row-span-1",
    mood: "from-sky-500/50 via-blue-500/30 to-indigo-700/50",
  },
  {
    title: "Skyline Nights",
    subtitle: "City Pulse",
    image: bg3,
    span: "sm:col-span-3 sm:row-span-2",
    mood: "from-fuchsia-500/35 via-purple-600/35 to-slate-900/60",
  },
  {
    title: "Golden Trails",
    subtitle: "Nature Escapes",
    image: bg1,
    span: "sm:col-span-3 sm:row-span-1",
    mood: "from-amber-400/35 via-orange-500/35 to-rose-600/40",
  },
];

function CompassIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
      <path
        d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.657-5.657-1.414 1.414M7.757 16.243l-1.414 1.414m0-11.314 1.414 1.414m8.486 8.486 1.414 1.414M16.5 9 12 12l-4.5 3 3-4.5L15 6z"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparklesIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
      <path
        d="M12 3.5 13.5 8 18 9.5 13.5 11 12 15.5 10.5 11 6 9.5 10.5 8 12 3.5zM6.5 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2zM16.5 5l.7 1.6 1.8.7-1.8.7-.7 1.6-.7-1.6-1.8-.7 1.8-.7.7-1.6z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor">
      <path
        d="M12 4 5.5 6.5v6.3c0 3.1 2.1 5.9 5.2 6.7L12 20l1.3-.5c3.1-.8 5.2-3.6 5.2-6.7V6.5z"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12.2 11 14l4-4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [visibleSections, setVisibleSections] = useState({ cards: false, bento: false });
  const cardsRef = useRef(null);
  const bentoRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const targets = [
      { ref: cardsRef, key: "cards" },
      { ref: bentoRef, key: "bento" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionKey = targets.find((target) => target.ref?.current === entry.target)?.key;
            if (sectionKey) {
              setVisibleSections((prev) => ({ ...prev, [sectionKey]: true }));
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    targets.forEach(({ ref }) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
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
      <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-100 py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-40 blur-3xl pointer-events-none">
          <div className="w-64 h-64 bg-blue-200/50 rounded-full absolute -top-24 -left-16" />
          <div className="w-64 h-64 bg-emerald-200/50 rounded-full absolute top-10 right-0" />
          <div className="w-56 h-56 bg-indigo-200/50 rounded-full absolute bottom-10 left-10" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 space-y-16">
          <div className="text-center space-y-4">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-blue-700/80">
              Crafted For Curious Travelers
            </p>
            <h3 className="text-3xl md:text-4xl font-semibold text-slate-900">Experience the Helpdesk Edge</h3>
            <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
              Every itinerary is designed to surprise and delight - meticulous planning, concierge support, and stories
              worth sharing.
            </p>
          </div>

          <div
            ref={cardsRef}
            className={`grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-700 ease-out ${
              visibleSections.cards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {valueCards.map(({ title, description, Icon, accent }, index) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_15px_45px_rgba(15,23,42,0.12)] border border-slate-100 p-6"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 20% 20%, ${accent}33, transparent 50%)`,
                  }}
                />
                <div className="relative flex flex-col h-full space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-100 shadow-inner flex items-center justify-center text-blue-700">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-semibold text-slate-900">{title}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
                  </div>
                  <div className="mt-auto text-sm font-semibold text-blue-700 inline-flex items-center gap-2">
                    Learn more
                    <span className="transform transition-transform duration-300 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            ref={bentoRef}
            className={`grid grid-cols-1 sm:grid-cols-6 gap-4 md:gap-6 transition-all duration-700 ease-out ${
              visibleSections.bento ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {bentoItems.map(({ title, subtitle, image, span, mood }, index) => (
              <div
                key={title}
                className={`relative overflow-hidden rounded-3xl bg-slate-900 text-white min-h-[200px] ${span}`}
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                  aria-hidden
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${mood}`} aria-hidden />
                <div className="absolute inset-0 bg-black/25 mix-blend-multiply" aria-hidden />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-white/5" />
                <div className="relative h-full flex flex-col justify-between p-5 sm:p-6 backdrop-blur-[1px]">
                  <div className="text-sm uppercase tracking-[0.22em] text-white/80">{subtitle}</div>
                  <div className="space-y-2">
                    <h5 className="text-xl sm:text-2xl font-semibold drop-shadow-lg">{title}</h5>
                    <p className="text-sm text-white/90 max-w-[26ch]">
                      Slow pans, sunrise colors, and lively streets - this is the energy we build into every trip.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
