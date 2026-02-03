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
    <div className="min-h-screen bg-slate-900 sm:flex sm:items-center sm:justify-center sm:p-4">
      <div className="bg-white min-h-screen sm:min-h-0 w-full sm:max-w-4xl p-6 sm:p-10 sm:rounded-xl sm:shadow-lg">

        <h2 className="text-2xl sm:text-3xl font-bold mb-8">
          Sign in to your PopX account
        </h2>

        <input
          type="email"
          placeholder="Email"
          autoComplete="email"
          className="border w-full p-4 mb-5 text-lg rounded outline-none focus:ring-2 focus:ring-violet-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          className="border w-full p-4 mb-3 text-lg rounded outline-none focus:ring-2 focus:ring-violet-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
        />

        {error && (
          <p className="text-red-500 text-base mb-4">
            {error}
          </p>
        )}

        <button
          onClick={submit}
          className="bg-violet-600 hover:bg-violet-700 transition text-white w-full py-4 rounded-lg mt-4 text-lg"
        >
          Login
        </button>

      </div>
    </div>
  );
}
