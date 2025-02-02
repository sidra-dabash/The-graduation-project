import { useState } from "react";
import axios from "axios";

function SignUp() {
  // تخزين بيانات الفورم
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    Rpassword: "",
  });

  // تخزين الأخطاء
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // التحقق من صحة البريد الإلكتروني
  const validationEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // التحقق من صحة كلمة المرور
  const validationPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    // التحقق من صحة الإدخال
    if (!validationEmail(formData.email)) {
      setError("Email is invalid");
      return;
    }
    if (!validationPassword(formData.password)) {
      setError(
        "The password must contain letters and numbers, and be at least 6 characters long"
      );
      return;
    }
    if (formData.password !== formData.Rpassword) {
      setError("The passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local/register",
        {
          username: formData.username,
          email: formData.email,
          password: formData.password,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      // في حال نجاح الطلب
      if (response.data.jwt) {
        setSuccessMessage("Registration completed successfully!");
        console.log("User Registered:", response.data);
        localStorage.setItem("jwt", response.data.jwt);
        //تفريغ الفورم عند ارسال البيانات
        setFormData({
          username: "",
          email: "",
          password: "",
          Rpassword: "",
        });
      }
    } catch (error) {
      setError(
        error.response?.data?.error?.message ||
          "An error occurred while registering"
      );
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#8E2571]">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-[550px] md:h-[600px]"
      >
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-sky-300 text-[#8E2571]">
          Sign Up
        </h1>

        {error && <p className="text-red-500 text-center relative h-6">{error}</p>}
        {successMessage && (
          <p className="text-green-500 text-center">{successMessage}</p>
        )}

        <label htmlFor="username" className="text-[#8E2571]">
          Username
        </label>
        <input
          value={formData.username}
          type="text"
          id="username"
          placeholder="Enter your username"
          className="border border-gray-300 rounded-[10px] p-2 sm:p-3 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 focus:outline-none"
          onChange={(e) =>
            setFormData({ ...formData, username: e.target.value })
          }
        />

        <label htmlFor="email" className="text-[#8E2571]">
          Email
        </label>
        <input
          value={formData.email}
          type="email"
          id="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded-[10px] p-2 sm:p-3 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 focus:outline-none"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <label htmlFor="password" className="text-[#8E2571]">
          Password
        </label>
        <input
          value={formData.password}
          type="password"
          id="password"
          placeholder="Enter your password"
          className="border border-gray-300 rounded-[10px] p-2 sm:p-3 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 focus:outline-none"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <label htmlFor="Rpassword" className="text-[#8E2571]">
          Confirm Password
        </label>
        <input
          value={formData.Rpassword}
          type="password"
          id="Rpassword"
          placeholder="Re-enter your password"
          className="border border-gray-300 rounded-[10px] p-2 sm:p-3 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 focus:outline-none"
          onChange={(e) =>
            setFormData({ ...formData, Rpassword: e.target.value })
          }
        />

        <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:sc transition-all duration-300 mt-4">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
