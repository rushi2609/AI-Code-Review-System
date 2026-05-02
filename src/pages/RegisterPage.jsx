import { Link } from "react-router-dom";

function RegisterPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center px-4">

      <div className="bg-slate-800 p-8 rounded-2xl w-full max-w-md shadow-xl">

        <h1 className="text-4xl font-bold text-center mb-2 text-white">
          Create Account
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Register to start analyzing code
        </p>

        <form className="space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 outline-none focus:border-blue-500"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 outline-none focus:border-blue-500"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 outline-none focus:border-blue-500"
          />

          <button
            className="w-full bg-blue-500 hover:bg-blue-600 transition-all p-3 rounded-lg font-semibold"
          >
            Register
          </button>

        </form>

        <p className="text-center text-slate-400 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-400 hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
}

export default RegisterPage;