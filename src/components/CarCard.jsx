import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={car.image}
        alt={`${car.make} ${car.model}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">
          {car.make} {car.model}
        </h3>
        <p className="text-gray-600 mb-4">Year: {car.year}</p>
        <p className="text-blue-600 font-bold text-lg mb-4">
          ${car.price.toLocaleString()}
        </p>
        <Link
          to={`/cars/${car.id}`}
          className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
