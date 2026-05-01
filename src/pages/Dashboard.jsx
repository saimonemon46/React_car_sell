const Dashboard = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">User Dashboard</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700">
          Welcome to your dashboard! Here you will be able to manage your
          listings, view purchased cars, and update your profile.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <div className="p-4 border rounded-lg bg-blue-50">
            <h4 className="font-bold">Active Listings</h4>
            <p className="text-2xl">0</p>
          </div>
          <div className="p-4 border rounded-lg bg-green-50">
            <h4 className="font-bold">Purchases</h4>
            <p className="text-2xl">2</p>
          </div>
          <div className="p-4 border rounded-lg bg-yellow-50">
            <h4 className="font-bold">Messages</h4>
            <p className="text-2xl">5</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
