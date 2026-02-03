import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-3">
      <div className="w-full max-w-md sm:max-w-2xl bg-white p-6 sm:p-10 rounded-xl shadow-xl flex flex-col justify-center">

        <h1 className="text-2xl sm:text-3xl font-bold mb-3">
          Welcome to PopX
        </h1>

        <p className="text-gray-500 mb-6 text-base sm:text-lg">
          Create an account or login to continue
        </p>

        <button
          onClick={() => nav("/signup")}
          className="bg-violet-600 hover:bg-violet-700 transition text-white w-full py-3 rounded-lg text-base sm:text-lg mb-3"
        >
          Create Account
        </button>

        <button
          onClick={() => nav("/login")}
          className="bg-violet-200 hover:bg-violet-300 transition w-full py-3 rounded-lg text-base sm:text-lg"
        >
          Already Registered? Login
        </button>

      </div>
    </div>
  );
}
