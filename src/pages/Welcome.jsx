import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const nav = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900 px-3 sm:px-4">
      <div className="w-full max-w-[360px] sm:max-w-[400px] bg-white p-5 sm:p-6 flex flex-col justify-end rounded-xl shadow-lg">

        <h1 className="text-xl sm:text-2xl font-bold">
          Welcome to PopX
        </h1>

        <p className="text-gray-500 mb-5 sm:mb-6 text-sm sm:text-base">
          Lorem ipsum dolor sit amet
        </p>

        <button
          onClick={() => nav("/signup")}
          className="bg-violet-600 hover:bg-violet-700 transition text-white py-2.5 sm:py-3 rounded-lg mb-3 text-sm sm:text-base"
        >
          Create Account
        </button>

        <button
          onClick={() => nav("/login")}
          className="bg-violet-200 hover:bg-violet-300 transition py-2.5 sm:py-3 rounded-lg text-sm sm:text-base"
        >
          Already Registered? Login
        </button>

      </div>
    </div>
  );
}
