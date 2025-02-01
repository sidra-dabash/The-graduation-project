import { useState } from "react";

function SignUp() {
  // تخزين بيانات الفورم
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    Rpassword: "",
  });
  // تخزين الاخطاء
  const [error, setError] = useState("");
  // دالة التحقق من الايميل
  const validationEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // دالة التحقق من صحة كلمة المرور
  const validationPassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setError("");
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
    fetch("http://localhost:5000/api/signup", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      // تحويل البيانات الى json
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Registration completed successfully");
        } else {
          setError(data.error);
        }
      })
      .catch((error) => {
        //حدث خطا اثناء الاتصال بالخادم
        setError("An error occurred while connecting to the server");
      });
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-[#8E2571]">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-3 bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-[550px] md:h-[600px]"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-sky-300 text-[#8E2571]">
            Sign Up
          </h1>
          <label htmlFor="username" className="text-[#8E2571]">
            Username
          </label>
          <input
            type="text"
            name="username"
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
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-[10px] p-2 sm:p-3 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 focus:outline-none"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <label htmlFor="password" className="text-[#8E2571]">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="border border-gray-300 rounded-[10px] p-2 sm:p-3 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 focus:outline-none"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <label htmlFor="R-password" className="text-[#8E2571]">
            R-password
          </label>
          <input
            type="password"
            name="R-password"
            id="R-password"
            placeholder="Enter R-password"
            className="border border-gray-300 rounded-[10px] p-2 sm:p-3 focus:border-pink-500 focus:ring-2 focus:ring-pink-300 focus:outline-none"
            onChange={(e) =>
              setFormData({ ...formData, Rpassword: e.target.value })
            }
          />
          <button className="px-6 py-3 mt-4 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:sc transition-all duration-300">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
