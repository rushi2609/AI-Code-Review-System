import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-700 px-8 py-4 flex justify-between items-center">
      
      <Link to="/" className="text-2xl font-bold text-blue-500">
        AI Code Review
      </Link>

      <div className="flex gap-4">
        <Link
          to="/login"
          className="px-4 py-2 bg-slate-700 rounded hover:bg-slate-600"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;