export default function Register() {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <input className="w-full p-2 border mb-2" placeholder="Name" />
      <input className="w-full p-2 border mb-2" placeholder="Email" />
      <input
        className="w-full p-2 border mb-2"
        type="password"
        placeholder="Password"
      />
      <button className="bg-green-500 text-white p-2 w-full">Register</button>
    </div>
  );
}
