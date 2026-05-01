export default function Login() {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input className="w-full p-2 border mb-2" placeholder="Email" />
      <input
        className="w-full p-2 border mb-2"
        type="password"
        placeholder="Password"
      />
      <button className="bg-blue-500 text-white p-2 w-full">Login</button>
    </div>
  );
}
