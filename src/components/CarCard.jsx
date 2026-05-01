import { Link } from "react-router-dom";

export default function CarCard({ car }) {
  return (
    <div className="border rounded p-4 shadow">
      <img
        src={car.image}
        alt={car.name}
        className="h-40 w-full object-cover"
      />
      <h2 className="text-xl font-bold">{car.name}</h2>
      <p>${car.price}</p>
      <Link to={`/cars/${car.id}`} className="text-blue-500">
        View Details
      </Link>
    </div>
  );
}
