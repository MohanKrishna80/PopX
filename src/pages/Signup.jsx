import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    image: "",
  });

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const submit = () => {
    localStorage.setItem("user", JSON.stringify(form));
    localStorage.setItem("isLoggedIn", "true");

    nav("/account");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-900">
      <div className="w-[360px] bg-white p-6 rounded">
        <h2 className="text-xl font-bold mb-4">Create your PopX account</h2>

        <label className="block mb-3 cursor-pointer">
          <span className="text-sm text-gray-600">Add your profile pic</span>

          <input
            type="file"
            accept="image/*"
            onChange={handleImage}
            className="hidden"
          />

          <div className="mt-2 border border-dashed rounded p-3 text-center text-sm text-gray-500">
            Click to upload
          </div>
        </label>

        {form.image && (
          <img
            src={form.image}
            className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
          />
        )}

        {["name", "phone", "email", "password", "company"].map((k) => (
          <input
            key={k}
            name={k}
            onChange={handle}
            placeholder={k}
            className="border w-full p-2 mb-3"
          />
        ))}

        <button
          onClick={submit}
          className="bg-violet-600 text-white w-full py-3 rounded"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
