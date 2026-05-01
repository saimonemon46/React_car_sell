import { useState } from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration:", formData);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Create an Account</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Full Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@example.com"
        />
        <InputField
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
        />
        <Button type="submit" className="w-full mt-4">
          Register
        </Button>
      </form>
    </div>
  );
};

export default Register;
