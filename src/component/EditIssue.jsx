import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const API_URL = "http://localhost:1337/api/issues";

const AlertMessage = ({ type, message, onClose }) => {
  const alertStyles = {
    success: "bg-green-50 border-green-500 text-green-700",
    error: "bg-red-50 border-red-500 text-red-700",
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className={`p-6 rounded-lg border-4 shadow-lg max-w-xl w-full ${alertStyles[type]}`}
      >
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
        <div>
          <p>{message}</p>
        </div>
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

function EditIssue({ onSave }) {
  const location = useLocation();
  const navigate = useNavigate();
  const issue = location.state?.issue;
  console.log(issue);

  const [formData, setFormData] = useState({
    title: issue?.title || "",
    description: issue?.description || "",
    issueStatus: issue?.issueStatus || "Open",
  });
  

  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState({ show: false, type: "", message: "" });

  const showMessage = (type, message) => {
    setAlert({ show: true, type, message });
    setTimeout(() => {
      setAlert({ show: false, type: "", message: "" });
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!issue) {
      showMessage("error", "No issue selected for editing!");
      return;
    }

    const updateIssue = { ...formData, documentId: issue.documentId };
    setIsLoading(true);

    try {
      const response = await axios.put(`${API_URL}/${issue.documentId}`, updateIssue);
      if (response.status === 200) {
        onSave(response.data);
        showMessage("success", "Issue updated successfully");
        setTimeout(() => navigate("/"), 1000);
      } else {
        showMessage("error", `Error: ${response.statusText}`);
      }
    } catch (error) {
      showMessage("error", `Error updating issue: ${error.message}`);
    } finally {
      setIsLoading(false);
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
            <h1 className="text-center font-bold text-4xl mt-6 text-[#8E2571]">
              Edit Issue
            </h1>

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

            <label htmlFor="status" className="font-bold text-[#8E2571]">
              Status
            </label>
            <select
              name="issueStatus"
              id="status"
              className="bg-pink-100 text-black px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-500"
              value={formData.issueStatus}
              onChange={handleChange}
              required
            >
              <option value="open">Open</option>
              <option value="closed">Closed</option>
              <option value="in-progress">In Progress</option>
            </select>

            <button
              type="submit"
              className="p-2 mt-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Saving..." : "Save"}
            </button>
          </form>
        </div>
      </main>
      {alert.show && (
        <AlertMessage
          type={alert.type}
          message={alert.message}
          onClose={() => setAlert({ show: false, type: "", message: "" })}
        />
      )}
    </>
  );
}

export default EditIssue;
