import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/HELPDESK LOGO PNG-1.svg";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/destinations", label: "Destinations" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ variant = "solid" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHero = variant === "hero";

  const linkClassName = ({ isActive }) =>
    isActive
      ? isHero
        ? "text-white font-semibold"
        : "text-blue-600 font-semibold"
      : isHero
        ? "text-white/80 hover:text-white"
        : "text-gray-700 hover:text-blue-600";

  return (
    <nav
      className={`px-6 py-4 flex items-center justify-between relative z-20 ${
        isHero ? "text-white" : "bg-white text-gray-900 shadow-sm"
      }`}
    >
      <img src={logo} alt="Helpdesk Travels & Tours" className="w-20 h-15" />

      <button
        type="button"
        className={`md:hidden p-2 rounded focus:outline-none focus:ring-2 ${
          isHero ? "focus:ring-white/70" : "focus:ring-blue-500"
        }`}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        <span className="sr-only">Toggle navigation</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${isHero ? "text-white" : "text-gray-700"}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.8}
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      <div className="hidden md:flex space-x-6">
        {navLinks.map(({ to, label, end }) => (
          <NavLink key={to} to={to} end={end} className={linkClassName}>
            {label}
          </NavLink>
        ))}
      </div>

      <div
        id="mobile-navigation"
        className={`absolute top-full left-0 w-full md:hidden transition-all duration-300 ease-in-out transform z-10 ${
          isHero ? "bg-slate-900/80 backdrop-blur-lg" : "bg-white shadow-md"
        } ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map(({ to, label, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              className={linkClassName}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
