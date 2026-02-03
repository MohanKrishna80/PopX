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

  const [errors, setErrors] = useState({});

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result });
      setErrors({ ...errors, image: "" });
    };
    reader.readAsDataURL(file);
  };

  const validate = () => {
    let err = {};

    if (!form.image) err.image = "Profile image required";
    if (!form.name) err.name = "Name required";

    if (!form.phone) err.phone = "Phone required";
    else if (form.phone.length !== 10) err.phone = "Enter 10 digit phone";

    if (!form.email) err.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      err.email = "Invalid email";

    if (!form.password) err.password = "Minimum 6 characters";
    if (!form.company) err.company = "Company required";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const submit = () => {
    if (!validate()) return;

    localStorage.setItem("user", JSON.stringify(form));
    localStorage.setItem("isLoggedIn", "true");
    nav("/account");
  };

  return (
    <div className="min-h-screen bg-slate-900 sm:flex sm:items-center sm:justify-center sm:p-4">
      <div className="bg-white min-h-screen sm:min-h-0 w-full sm:max-w-2xl p-6 sm:p-8 sm:rounded-xl sm:shadow-lg">

        <h2 className="text-2xl font-bold mb-6">
          Create your PopX account
        </h2>

        {/* Image Upload */}
        <label className="block mb-5 cursor-pointer">
          <span className="text-sm text-gray-600">
            Profile picture
          </span>

          <input type="file" accept="image/*" hidden onChange={handleImage} />

          <div className="mt-2 border border-dashed rounded p-3 text-center text-sm text-gray-500">
            Tap to upload
          </div>

          {errors.image && (
            <p className="text-red-500 text-xs mt-1">
              {errors.image}
            </p>
          )}
        </label>

        {form.image && (
          <img
            src={form.image}
            className="w-20 h-20 rounded-full mb-6 object-cover"
          />
        )}

        {["name", "phone", "email", "password", "company"].map((k) => (
          <div key={k} className="mb-4">
            <input
              name={k}
              type={
                k === "password"
                  ? "password"
                  : k === "email"
                  ? "email"
                  : k === "phone"
                  ? "tel"
                  : "text"
              }
              onChange={handle}
              placeholder={k.charAt(0).toUpperCase() + k.slice(1)}
              className="border w-full p-3 rounded text-base outline-none focus:ring-2 focus:ring-violet-500"
            />

            {errors[k] && (
              <p className="text-red-500 text-xs mt-1">
                {errors[k]}
              </p>
            )}
          </div>
        ))}

        <button
          onClick={submit}
          className="bg-violet-600 hover:bg-violet-700 transition text-white w-full py-3 rounded-lg mt-4 text-base"
        >
          Create Account
        </button>

      </div>
    </div>
  );
}
