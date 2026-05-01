import cars from "../data/cars";
import CarCard from "../components/CarCard";

export default function Cars() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}
