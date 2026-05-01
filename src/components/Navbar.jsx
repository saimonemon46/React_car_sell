import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-gray-800">
        Car<span className="text-blue-600">Sell</span>
      </Link>
      <div className="flex items-center gap-6">
        <Link
          to="/"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Home
        </Link>
        <Link
          to="/cars"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Cars
        </Link>
        <Link
          to="/dashboard"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          Dashboard
        </Link>
        <Link
          to="/login"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}
