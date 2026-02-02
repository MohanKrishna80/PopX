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

    if (!form.password) err.password = "Password required";
    else if (form.password.length < 6)
      err.password = "Minimum 6 characters";

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
    <div className="min-h-screen flex justify-center items-center bg-slate-900">
      <div className="w-[360px] bg-white p-6 rounded">

        <h2 className="text-xl font-bold mb-4">Create your PopX account</h2>

        {/* Image Upload */}
        <label className="block mb-2 cursor-pointer">
          <span className="text-sm text-gray-600">Add profile pic</span>

          <input type="file" accept="image/*" hidden onChange={handleImage} />

          <div className="mt-2 border border-dashed rounded p-3 text-center text-sm text-gray-500">
            Click to upload
          </div>

          {errors.image && (
            <p className="text-red-500 text-xs">{errors.image}</p>
          )}
        </label>

        {form.image && (
          <img
            src={form.image}
            className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
          />
        )}

        {["name", "phone", "email", "password", "company"].map((k) => (
          <div key={k}>
            <input
              name={k}
              type={k === "password" ? "password" : "text"}
              onChange={handle}
              placeholder={k}
              className="border w-full p-2 mb-1"
            />
            {errors[k] && (
              <p className="text-red-500 text-xs mb-2">{errors[k]}</p>
            )}
          </div>
        ))}

        <button
          onClick={submit}
          className="bg-violet-600 text-white w-full py-3 rounded mt-2"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}
