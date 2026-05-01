import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-6">Find Your Dream Car</h1>
      <p className="text-xl text-gray-600 mb-8">
        Browse thousands of cars from top dealers and private sellers.
      </p>
      <Link to="/cars">
        <Button size="large">Browse All Cars</Button>
      </Link>
    </div>
  );
};

export default Home;
