import { Link } from "react-router-dom";
import Button from "../components/Button";

const NotFound = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl text-gray-600 mb-8">Oops! Page not found.</h2>
      <Link to="/">
        <Button>Go Back Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
