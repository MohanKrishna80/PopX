import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const nav = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!email || !password) {
      setError("All fields required");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setError("No account found. Please signup first.");
      return;
    }

    if (email === user.email && password === user.password) {
      localStorage.setItem("isLoggedIn", "true");
      nav("/account");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900 px-3 sm:px-4">
      <div className="w-full max-w-[360px] sm:max-w-[400px] bg-white p-5 sm:p-6 rounded-xl shadow-lg">

        <h2 className="text-lg sm:text-xl font-bold mb-4">
          Signin to your PopX account
        </h2>

        <input
          placeholder="Email"
          className="border w-full p-2.5 sm:p-3 mb-3 text-sm sm:text-base rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          className="border w-full p-2.5 sm:p-3 mb-2 text-sm sm:text-base rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p className="text-red-500 text-xs sm:text-sm mb-2">
            {error}
          </p>
        )}

        <button
          onClick={submit}
          className="bg-violet-600 hover:bg-violet-700 transition text-white w-full py-2.5 sm:py-3 rounded-lg text-sm sm:text-base"
        >
          Login
        </button>

      </div>
    </div>
  );
}
