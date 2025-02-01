import axios from "axios";
import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handlSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    try {
      const response = await axios.post(
        "http://localhost:1337/api/auth/local/",
        {
          identifier: formData.email,
          password: formData.password,
        }
      );
      console.log("login:", response.data);
      // حفظ التوكن
      const token = response.data.jwt;
      localStorage.setItem("token", token);
      alert("login successful");
      setSuccessMessage("Login successful");
    } catch (error) {
      console.error("Error login:", error);
      setError(
        "Login failed: " +
          (error.response?.data?.error?.message || "An error occurred")
      );
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[#8E2571]">
        <form
          onSubmit={handlSubmit}
          action=""
          className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-[550px] md:h-[500px] "
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-sky-300 text-[#8E2571]">
            Login
          </h1>
          {error && <p className="text-red-500 text-center">{error}</p>}
          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}
          <label htmlFor="email" className="text-[#8E2571]">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-[10px] p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <label
            htmlFor="password"
            className="text-[#8E2571] text-sm sm:text-base"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-[10px] p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:sc transition-all duration-300 mt-4">
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
