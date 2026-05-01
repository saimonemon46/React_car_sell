const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} AutoMarket. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
