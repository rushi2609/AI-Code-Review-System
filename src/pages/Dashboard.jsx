function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">

      <h1 className="text-4xl font-bold mb-10">
        Welcome Back, Developer 👋
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h2 className="text-slate-400">
            Total Submissions
          </h2>

          <p className="text-4xl font-bold mt-3">
            24
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h2 className="text-slate-400">
            Average Score
          </h2>

          <p className="text-4xl font-bold text-green-500 mt-3">
            82
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h2 className="text-slate-400">
            Total Bugs
          </h2>

          <p className="text-4xl font-bold text-red-500 mt-3">
            56
          </p>
        </div>

        <div className="bg-slate-800 p-6 rounded-2xl">
          <h2 className="text-slate-400">
            Security Issues
          </h2>

          <p className="text-4xl font-bold text-yellow-500 mt-3">
            14
          </p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;