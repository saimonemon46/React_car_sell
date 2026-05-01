import InputField from "../components/InputField";
import Button from "../components/Button";

const Payment = () => {
  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6">Checkout</h2>
      <form>
        <InputField label="Cardholder Name" placeholder="John Doe" />
        <InputField label="Card Number" placeholder="0000 0000 0000 0000" />
        <div className="flex space-x-4">
          <div className="w-1/2">
            <InputField label="Expiry Date" placeholder="MM/YY" />
          </div>
          <div className="w-1/2">
            <InputField label="CVV" placeholder="123" />
          </div>
        </div>
        <Button className="w-full mt-6" variant="primary">
          Process Payment
        </Button>
      </form>
    </div>
  );
};

export default Payment;
