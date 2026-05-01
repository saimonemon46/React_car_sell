import CarCard from "../components/CarCard";
import { cars } from "../data/cars";

const Cars = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Available Cars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
