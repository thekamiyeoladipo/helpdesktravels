const FlagUS = () => (
  <svg
    viewBox="0 0 190 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="United States flag"
    className="w-full h-full"
  >
    <rect width="190" height="100" fill="#b22234" />
    {Array.from({ length: 6 }, (_, index) => (
      <rect key={index} y={8 + index * 16} width="190" height="8" fill="#fff" />
    ))}
    <rect width="76" height="60" fill="#3c3b6e" />
    {Array.from({ length: 4 }, (_, row) =>
      Array.from({ length: 5 }, (_, col) => (
        <circle
          key={`${row}-${col}`}
          cx={8 + col * 15}
          cy={8 + row * 12}
          r="2"
          fill="#fff"
        />
      ))
    )}
  </svg>
);

const FlagUK = () => (
  <svg
    viewBox="0 0 190 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="United Kingdom flag"
    className="w-full h-full"
  >
    <rect width="190" height="100" fill="#00247d" />
    <path d="M0 0 L190 100 M190 0 L0 100" stroke="#fff" strokeWidth="20" />
    <path d="M0 0 L190 100 M190 0 L0 100" stroke="#cf142b" strokeWidth="10" />
    <rect x="75" width="40" height="100" fill="#fff" />
    <rect y="40" width="190" height="20" fill="#fff" />
    <rect x="80" width="30" height="100" fill="#cf142b" />
    <rect y="45" width="190" height="10" fill="#cf142b" />
  </svg>
);

const FlagJapan = () => (
  <svg
    viewBox="0 0 190 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Japan flag"
    className="w-full h-full"
  >
    <rect width="190" height="100" fill="#fff" />
    <circle cx="95" cy="50" r="30" fill="#bc002d" />
  </svg>
);

const FlagBrazil = () => (
  <svg
    viewBox="0 0 190 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Brazil flag"
    className="w-full h-full"
  >
    <rect width="190" height="100" fill="#009b3a" />
    <polygon points="95,12 163,50 95,88 27,50" fill="#ffdf00" />
    <circle cx="95" cy="50" r="28" fill="#002776" />
    <path d="M65 55 Q95 45 125 55" stroke="#fff" strokeWidth="6" fill="none" />
  </svg>
);

const FlagCanada = () => (
  <svg
    viewBox="0 0 190 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Canada flag"
    className="w-full h-full"
  >
    <rect width="190" height="100" fill="#fff" />
    <rect width="40" height="100" fill="#d80621" />
    <rect x="150" width="40" height="100" fill="#d80621" />
    <path
      d="M95 22 L84 40 L65 38 L78 51 L71 70 L90 62 L95 80 L100 62 L119 70 L112 51 L125 38 L106 40 Z"
      fill="#d80621"
    />
  </svg>
);

const FlagGermany = () => (
  <svg
    viewBox="0 0 190 100"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Germany flag"
    className="w-full h-full"
  >
    <rect width="190" height="33.3" fill="#000" />
    <rect y="33.3" width="190" height="33.3" fill="#dd0000" />
    <rect y="66.6" width="190" height="33.4" fill="#ffce00" />
  </svg>
);

const flagIcons = {
  us: FlagUS,
  uk: FlagUK,
  jp: FlagJapan,
  br: FlagBrazil,
  ca: FlagCanada,
  de: FlagGermany,
};

const flags = [
  { name: "United States", code: "us" },
  { name: "United Kingdom", code: "uk" },
  { name: "Japan", code: "jp" },
  { name: "Brazil", code: "br" },
  { name: "Canada", code: "ca" },
  { name: "Germany", code: "de" },
];

function FlagBadge({ code, name }) {
  const Icon = flagIcons[code];

  return (
    <div className="min-w-[110px] sm:min-w-[150px] h-32 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-white via-gray-50 to-gray-200 shadow-[0_12px_30px_rgba(15,23,42,0.12)] border border-white/50 hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(15,23,42,0.18)] transition-transform duration-300">
      <div className="relative w-20 sm:w-24 h-12 sm:h-14 rounded-xl overflow-hidden bg-slate-200 border border-white/60 shadow-[inset_0_1px_2px_rgba(255,255,255,0.8)]">
        {Icon ? <Icon /> : null}
        <div className="absolute inset-0 bg-gradient-to-br from-white/35 via-transparent to-black/15 pointer-events-none" />
      </div>
      <span className="mt-3 text-xs sm:text-sm font-medium text-gray-600">{name}</span>
    </div>
  );
}

export default function FlagMarquee() {
  return (
    <section className="w-full bg-white py-10 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          Travel the world with us
        </p>
        <div className="relative mt-8 overflow-hidden">
          <div className="flex gap-4 sm:gap-6 w-max animate-marquee">
            {[...flags, ...flags].map(({ code, name }, index) => (
              <FlagBadge key={`${code}-${index}`} code={code} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
