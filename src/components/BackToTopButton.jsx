import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 320;

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`group fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-sky-500 to-emerald-500 px-3 py-3 text-white shadow-lg shadow-sky-600/25 transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
      }`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-white/15 backdrop-blur-sm transition group-hover:bg-white/25">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="h-5 w-5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M6 11l6-6 6 6" />
        </svg>
      </span>
      <span className="pr-1 text-sm font-semibold uppercase tracking-[0.16em] text-white/90">Top</span>
    </button>
  );
}
