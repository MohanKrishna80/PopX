import { useNavigate } from "react-router-dom";

export default function Account() {
  const nav = useNavigate();
  const u = JSON.parse(localStorage.getItem("user") || "{}");

  const logout = () => {
    localStorage.setItem("isLoggedIn", "false");
    nav("/");
  };

  return (
    <div className="min-h-screen bg-slate-900 sm:flex sm:items-center sm:justify-center sm:p-4">
      <div className="bg-white min-h-screen sm:min-h-0 w-full sm:max-w-2xl p-6 sm:p-8 sm:rounded-xl sm:shadow-lg">

        <h2 className="text-xl sm:text-2xl font-bold text-center sm:text-left mb-6">
          Account Settings
        </h2>

        {/* Profile */}
        <div className="flex flex-col items-center mb-6">

          <img
            src={u.image || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-violet-500"
          />

          <h3 className="mt-3 font-semibold text-lg text-center">
            {u.name || "User"}
          </h3>

          <p className="text-sm text-gray-500 break-all text-center">
            {u.email}
          </p>
        </div>

        {/* Info */}
        <div className="space-y-4 text-base">

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
          className="mt-10 w-full py-3 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition text-base"
        >
          Log Out
        </button>

      </div>
    </div>
  );
}
