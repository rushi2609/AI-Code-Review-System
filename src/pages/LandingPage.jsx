import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FaBug, FaShieldAlt, FaChartBar, FaRobot } from "react-icons/fa";

function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">

      <Navbar />

      <section className="text-center py-24 px-6">
        <h1 className="text-6xl font-bold mb-6">
          AI Code Review Platform
        </h1>

        <p className="text-slate-400 text-xl mb-8">
          Upload your code, Get instant AI-powered feedback
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/register"
            className="bg-blue-500 px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Get Started
          </Link>

          <Link
            to="/login"
            className="bg-slate-700 px-6 py-3 rounded-lg hover:bg-slate-600"
          >
            Login
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;