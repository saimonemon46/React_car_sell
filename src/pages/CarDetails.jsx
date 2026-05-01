import { useParams, Link } from "react-router-dom";
import { cars } from "../data/cars";
import Button from "../components/Button";

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find((c) => c.id === parseInt(id));

  if (!car) return <div className="text-center mt-10">Car not found.</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <img
        src={car.image}
        alt={car.model}
        className="w-full md:w-1/2 object-cover h-64 md:h-auto"
      />
      <div className="p-8 md:w-1/2">
        <h2 className="text-3xl font-bold mb-2">
          {car.make} {car.model}
        </h2>
        <p className="text-gray-500 mb-4">Year: {car.year}</p>
        <p className="text-2xl text-blue-600 font-bold mb-6">
          ${car.price.toLocaleString()}
        </p>
        <p className="text-gray-700 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex space-x-4">
          <Link to="/payment">
            <Button>Buy Now</Button>
          </Link>
          <Link to="/cars">
            <Button variant="secondary">Back to List</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
