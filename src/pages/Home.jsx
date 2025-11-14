import FlagMarquee from "../components/FlagMarquee";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-[80vh] bg-blue-50 text-blue-700 px-6 text-center">
        <span className="text-sm font-semibold tracking-[0.3em] uppercase text-blue-400">
          Journey On
        </span>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold">Helpdesk Travels & Tours</h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl">
          Explore the world with our curated tours and experiences.
        </p>
      </section>
      <FlagMarquee />
    </>
  );
}
