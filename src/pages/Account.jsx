import { useNavigate } from "react-router-dom";

export default function Account() {
  const nav = useNavigate();
  const u = JSON.parse(localStorage.getItem("user") || "{}");

  const logout = () => {
    localStorage.setItem("isLoggedIn", "false"); // only session off
    nav("/"); // welcome page
  };

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-3 sm:px-4">
      <div className="w-full max-w-[360px] sm:max-w-[400px] bg-white rounded-xl shadow-lg p-5 sm:p-6">

        <h2 className="text-base sm:text-lg font-bold text-center mb-5 sm:mb-6">
          Account Settings
        </h2>

        <div className="flex flex-col items-center">

          <img
            src={u.image || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-violet-500"
          />

          <h3 className="mt-3 font-semibold text-base sm:text-lg">
            {u.name}
          </h3>

          <p className="text-xs sm:text-sm text-gray-500">
            {u.email}
          </p>
        </div>

        <div className="mt-5 sm:mt-6 space-y-3 text-xs sm:text-sm">

          <div className="flex justify-between border-b pb-2">
            <span className="text-gray-500">Phone</span>
            <span className="font-medium">{u.phone}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-500">Company</span>
            <span className="font-medium">{u.company}</span>
          </div>

        </div>

        {/* Logout */}
        <button
          onClick={logout}
          className="mt-6 sm:mt-8 w-full py-2.5 sm:py-3 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition text-sm sm:text-base"
        >
          Log Out
        </button>

      </div>
    </div>
  );
}
