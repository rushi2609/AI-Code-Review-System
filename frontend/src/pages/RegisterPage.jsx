import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api/authApi";

function RegisterPage() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await registerUser(formData);

      alert("Registration Successful");

      localStorage.setItem("token", res.data.token);

      navigate("/dashboard");

    } catch(error){

      alert(error.response.data.message);

    }

  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center px-4">

      <div className="bg-slate-800 p-8 rounded-2xl w-full max-w-md shadow-xl">

        <h1 className="text-4xl font-bold text-center mb-8 text-white">
          Create Account
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-700 text-white"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-700 text-white"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-slate-700 text-white"
          />

          <button
            className="w-full bg-blue-500 hover:bg-blue-600 p-3 rounded-lg"
          >
            Register
          </button>

        </form>

        <p className="text-center text-slate-400 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400">
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default RegisterPage;