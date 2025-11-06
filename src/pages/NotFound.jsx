import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h2 className="text-4xl font-semibold text-gray-800">Page not found</h2>
      <p className="mt-3 text-gray-600">The page you’re looking for doesn’t exist.</p>
      <Link
        to="/"
        className="mt-6 inline-block rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        Go home
      </Link>
    </section>
  );
}

