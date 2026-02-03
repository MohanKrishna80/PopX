import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md sm:max-w-5xl bg-white p-8 sm:p-12 rounded-xl shadow-xl flex flex-col justify-center">

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">
          Welcome to PopX
        </h1>

        <p className="text-gray-500 mb-8 text-lg sm:text-xl">
          Create an account or login to continue
        </p>

        <button
          onClick={() => nav("/signup")}
          className="bg-violet-600 hover:bg-violet-700 transition text-white w-full py-5 rounded-lg text-xl mb-4"
        >
          Create Account
        </button>

        <button
          onClick={() => nav("/login")}
          className="bg-violet-200 hover:bg-violet-300 transition w-full py-5 rounded-lg text-xl"
        >
          Already Registered? Login
        </button>

      </div>
    </div>
  );
}
