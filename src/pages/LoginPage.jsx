import { Link } from "react-router-dom";

function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center px-4">

      <div className="bg-slate-800 p-8 rounded-2xl w-full max-w-md shadow-xl">

        <h1 className="text-4xl font-bold text-center mb-2 text-white">
          Welcome Back
        </h1>

        <p className="text-slate-400 text-center mb-8">
          Login to continue
        </p>

        <form className="space-y-5">

          <div>
            <label className="block mb-2 text-slate-300">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none border border-slate-600 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-slate-300">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3 rounded-lg bg-slate-700 text-white outline-none border border-slate-600 focus:border-blue-500"
            />
          </div>

          <button
            className="w-full bg-blue-500 hover:bg-blue-600 transition-all p-3 rounded-lg font-semibold"
          >
            Login
          </button>

        </form>

        <p className="text-center text-slate-400 mt-6">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-400 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>

    </div>
  );
}

export default LoginPage;