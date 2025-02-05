import { useState } from "react";
import axios from "axios";
import Header from "./Header";
const API_URL = "http://localhost:1337/api/issues";
function EditIssue({ issue, onClose, onSave }) {
  const [formData, setFormData] = useState({
    title: issue ? issue.title : "",
    description: issue ? issue.description : "",
    status: issue ? issue.status : "pending",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClose = () => {
    onClose();
    setFormData({
      title: "",
      description: "",
      status: "pending",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateIssue = { ...formData, id: issue.id };
    try {
      const response = await axios.put(`${API_URL}/${issue.id}`, updateIssue);
      if (response.status === 200) {
        onSave(updateIssue);
        onClose();
        alert("Issue updated successfully!");
      } else {
        alert("Error: " + response.statusText);
      }
    } catch (error) {
      alert("Error updating issue: " + (error.response ? error.response.data : error.message));
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
                Edit Issue
              </h1>
            </div>
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
              Save
            </button>
          </form>
        </div>
      </main>
    </>
  );
}

export default EditIssue;
