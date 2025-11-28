import { Link } from "react-router-dom";
import logo from "../assets/HELPDESK LOGO PNG-1.svg";

const linkGroups = [
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/destinations", label: "Destinations" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { to: "/destinations", label: "Custom Trips" },
      { to: "/contact", label: "Visa Support" },
      { to: "/contact", label: "Concierge Desk" },
    ],
  },
];

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 8.5 10.7 13a2 2 0 0 0 2.1 0L20.5 8.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M8.5 4.5h-.8a1.8 1.8 0 0 0-1.8 2l.3 3.4a2 2 0 0 0 .6 1.3l1.9 1.9a13 13 0 0 0 4.2 2.7l.9.3a2 2 0 0 0 1.6-.2l2.9-1.7a1.7 1.7 0 0 0 .2-2.8l-1.5-1.3a1.7 1.7 0 0 0-1.8-.2l-1.2.5a1 1 0 0 1-1.2-.3l-.5-.8a1 1 0 0 1 .1-1.2l.9-1a1.7 1.7 0 0 0-.1-2.4l-1.7-1.6a1.8 1.8 0 0 0-2.4 0L9.5 4.1a1 1 0 0 1-1 .3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3.8a5.2 5.2 0 0 0-5.2 5.2c0 3.8 3.5 7.9 4.8 9.3a.6.6 0 0 0 .8 0c1.3-1.4 4.8-5.5 4.8-9.3A5.2 5.2 0 0 0 12 3.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.2" r="1.8" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-slate-100 overflow-hidden">
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute w-80 h-80 bg-blue-500/20 rounded-full blur-3xl -top-32 -left-16" />
        <div className="absolute w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl top-20 right-0" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-14 space-y-12">
        <div className="rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-2">
            <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-slate-200/70">Plan the next getaway</p>
            <h3 className="text-2xl sm:text-3xl font-semibold text-white">Ready when you are.</h3>
            <p className="text-slate-200/80 text-sm max-w-xl">
              Share the dream, the dates, and the vibe. We will unlock routes, visas, stays, and seamless experiences
              tailored for you.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:09068970066"
              className="inline-flex items-center gap-2 rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-lg shadow-blue-500/20 hover:-translate-y-0.5 transition-transform"
            >
              <PhoneIcon className="w-4 h-4" />
              Call us
            </a>
            <a
              href="mailto:helpdesktravelsandtours@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <MailIcon className="w-4 h-4" />
              Email team
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src={logo} alt="Helpdesk Travels & Tours" className="w-24 h-auto" />
            <p className="text-sm text-slate-200/80">
              Helpdesk Travels & Tours curates journeys with local insight, premium partners, and concierge support
              wherever you land.
            </p>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-100">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                <PhoneIcon className="w-4 h-4" />
              </span>
              <a href="tel:09068970066" className="hover:text-white transition-colors">
                09068970066
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-100">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                <MailIcon className="w-4 h-4" />
              </span>
              <a href="mailto:helpdesktravelsandtours@gmail.com" className="hover:text-white transition-colors">
                helpdesktravelsandtours@gmail.com
              </a>
            </div>
          </div>

          {linkGroups.map(({ title, links }) => (
            <div key={title} className="space-y-3">
              <h4 className="text-lg font-semibold text-white">{title}</h4>
              <ul className="space-y-2 text-sm text-slate-200/80">
                {links.map(({ to, label }) => (
                  <li key={label}>
                    <Link to={to} className="hover:text-white transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="space-y-3">
            <h4 className="text-lg font-semibold text-white">Visit</h4>
            <p className="text-sm text-slate-200/80 leading-relaxed">
              12B Kingsway Road,
              <br />
              Ikoyi, Lagos.
            </p>
            <div className="flex items-center gap-3 text-sm font-medium text-slate-100">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                <PinIcon className="w-4 h-4" />
              </span>
              <span>By appointment</span>
            </div>
            <p className="text-xs uppercase tracking-[0.25em] text-slate-200/70">We travel with you</p>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 text-sm text-slate-400 flex flex-col sm:flex-row justify-between gap-3">
          <span>&copy; {new Date().getFullYear()} Helpdesk Travels & Tours. All rights reserved.</span>
          <span className="text-slate-400/90">Crafted for explorers who refuse average itineraries.</span>
        </div>
      </div>
    </footer>
  );
}
