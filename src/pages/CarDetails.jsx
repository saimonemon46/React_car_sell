import { useParams, useNavigate } from "react-router-dom";
import cars from "../data/cars";

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = cars.find((c) => c.id === parseInt(id));

  return (
    <div>
      <h1 className="text-2xl font-bold">{car.name}</h1>
      <img src={car.image} className="w-full max-w-lg" />
      <p>{car.description}</p>
      <p className="text-xl">${car.price}</p>

      <button
        onClick={() => navigate("/payment")}
        className="bg-blue-500 text-white p-2 mt-4"
      >
        Buy Now
      </button>
    </div>
  );
}
