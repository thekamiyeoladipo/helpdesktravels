export default function TopBar() {
  return (
    <div className="hidden md:flex w-full bg-gray-100 text-gray-700 text-sm px-6 py-2 justify-between items-center">
      <a href="tel:+15551234567" className="hover:text-blue-600">
        +1 (555) 123-4567
      </a>
      <a href="" className="hover:text-blue-600">
        info@travelx.com
      </a>
    </div>
  );
}

