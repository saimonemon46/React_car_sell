import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: "📊" },
    { path: "/cars", label: "Cars", icon: "🚗" },
    { path: "/payment", label: "Payment", icon: "💳" },
  ];

  return (
    <div className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen p-6 shadow-xl">
      <h2 className="text-2xl font-bold mb-8 text-center text-blue-400">
        CarStore
      </h2>

      <nav className="flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
              location.pathname === item.path
                ? "bg-blue-600 text-white shadow-lg"
                : "hover:bg-gray-700 text-gray-300 hover:text-white"
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
