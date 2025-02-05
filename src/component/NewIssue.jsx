import Header from "./Header";
import { useState } from "react";
import axios from "axios";
import { title } from "framer-motion/client";

const API_URL = "http://localhost:1337/api/issues";
const AlertMessage = ({ type, message, onClose }) => {
  const alertStyles = {
    success: "bg-green-50 border-green-500 text-green-700",
    error: "bg-red-50   border-red-500   text-red-700",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {/* Modal Container */}
      <div
        className={`p-6 rounded-lg border-4 shadow-lg max-w-xl w-full ${alertStyles[type]}`}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {type === "error" ? "Error" : "Success"}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800"
          >
            ×
          </button>
        </div>
        {/* Modal Body */}
        <div>
          <p>{message}</p>
        </div>
        {/* Modal Footer */}
        <div className="mt-4 text-right">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
function NewIssue({ onAddNewIssue }) {
  const [issue, setIssue] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "",
    imageUrl: "",
  });
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const showMessage = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert({ show: false, type: "", message: "" });
    }, 3000);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.status.trim()
    ) {
      showMessage("error", "All fields are required!");
      return;
    }
    try {
      // ارسال البيانات الى الapi
      const newIssue = {
        title: formData.title,
        description: formData.description,
        status: formData.status,
      };
      const response = await axios.post(API_URL, { data: newIssue });
      // جلب البيانات الجديدة من الاستجابة
      const addedIssue = response.data.data;
      onAddNewIssue(addedIssue);
      showMessage("success", "issue added successfully");
      setFormData({ title: "", description: "", status: "" });
    } catch (error) {
      showMessage("error", `Error adding issue: ${error.message}`);
    }
  };
  return (
    <>
      <Header />
      <main>
        <div className="flex justify-center items-center mt-12">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-[550px] md:h-[500px]"
          >
            <div>
              <h1 className="text-center font-bold text-4xl mt-6 text-[#8E2571]">
                New Issue
              </h1>
            </div>

            {
              // show alert message
              alert.show && (
                <AlertMessage
                  type={alert.type}
                  message={alert.message}
                  onClose={() =>
                    setAlert({ show: false, type: "", message: "" })
                  }
                />
              )
            }
            <label htmlFor="title" className="text-[#8E2571] font-bold">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="border border-gray-300 rounded-[10px] p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              value={formData.title}
              onChange={handleChange}
              required
            />

            <label htmlFor="description" className="text-[#8E2571] font-bold">
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="border border-gray-300 rounded-[10px] p-3 focus:ring-2 focus:ring-pink-500 focus:outline-none"
              value={formData.description}
              onChange={handleChange}
              required
            />

            <div className="flex flex-col w-64 space-y-2 relative">
              <label htmlFor="status" className="font-bold text-[#8E2571]">
                Status
              </label>
              <div className="relative">
                <select
                  name="status"
                  id="status"
                  className="bg-pink-100 text-black px-4 py-2 rounded-lg appearance-none w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
                  value={formData.status}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="open">Open</option>
                  <option value="closed">Closed</option>
                  <option value="in-progress">In Progress</option>
                </select>
                <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-black">
                  ▼
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="p-2 mt-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Add Issue
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
export default NewIssue;
