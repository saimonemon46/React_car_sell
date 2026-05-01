export default function Payment() {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Payment</h2>
      <input className="w-full p-2 border mb-2" placeholder="Card Number" />
      <input className="w-full p-2 border mb-2" placeholder="Expiry Date" />
      <button className="bg-green-500 text-white p-2 w-full">Pay Now</button>
    </div>
  );
}
