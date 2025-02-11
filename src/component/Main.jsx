/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
const API_URL = "http://localhost:1337/api/issues";
function Card({
  title,
  description,
  status,
  counter,
  onDelete,
  onIncrease,
  onDecrease,
  issue,
}) {
  return (
    <div className="bg-[#edaedb] w-full flex flex-row justify-between items-center rounded-lg shadow p-4 mb-4 mr-4">
      <div className="flex justify-between flex-1 mx-4">
        <h3 className="text-[#740556] font-bold text-lg">{title}</h3>
        <p className="text-[#740556]">{description}</p>
        <p
          className={`font-semibold ${
            status === "Open"
              ? "text-green-500"
              : status === "Closed"
              ? "text-red-500"
              : "text-yellow-500"
          }`}
        >
          {status}
        </p>

        <div className="flex items-center gap-2">
          <Link
            to="/edit-issue"
            // ارسال بيانات المشكلة
            state={{ issue }}
            onClick={() =>
              localStorage.setItem("editingIssue", JSON.stringify(issue))}
          >
            <button className="text-green-500 hover:underline">Edit</button>
          </Link>
          <button onClick={onDelete} className="text-red-500 hover:underline">
            Delete
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onDecrease}
            className="px-2 py-1 bg-red-500 text-white rounded"
          >
            -
          </button>
          <span className="font-bold text-lg">{counter}</span>
          <button
            onClick={onIncrease}
            className="px-2 py-1 bg-green-500 text-white rounded"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

function Main({ issues, setIssues }) {
  const headers = ["Title", "Description", "Status", "Users", "Counter"];

  const handleIncrease = (index) => {
    const updatedIssues = [...issues];
    updatedIssues[index].counter += 1;
    setIssues(updatedIssues);
  };

  const handleDecrease = (index) => {
    const updatedIssues = [...issues];
    if (updatedIssues[index].counter > 0) {
      updatedIssues[index].counter -= 1;
      setIssues(updatedIssues);
    }
  };

  const handleDelete = (index) => {
    const updatedIssues = issues.filter((_, idx) => idx !== index);
    setIssues(updatedIssues);
  };
  // const handleDelete = async (index, issueId) => {
  //   try {
  //     // إرسال طلب حذف إلى API
  //     const response = await fetch(`http://localhost:1337/api/issues/${issueId}`, {
  //       method: "DELETE",
  //     });
  
  //     if (!response.ok) {
  //       throw new Error("Failed to delete issue from the database");
  //     }
  
  //     // تحديث الحالة بعد حذف المشكلة بنجاح
  //     const updatedIssues = issues.filter((_, idx) => idx !== index);
  //     setIssues(updatedIssues);
  //   } catch (error) {
  //     console.error("Error deleting issue:", error);
  //   }
  // };
  
  const [editingIssue, setEditingIssue] = useState(null);
  const handleEdit = (index) => {
    setEditingIssue(issues[index]);
  };

  // const handleAddNewIssue = (newIssue) => {
  //   setIssues((prevIssues) => [...prevIssues, newIssue]);
  // };
  return (
    <div className="bg-[#8E2571] mt-8 px-4 py-10 max-w-[1000px] mx-auto">
      <div className="flex justify-center items-center gap-5">
        <div className="flex justify-between bg-[#edaedb] w-[1000px] px-4 py-3 rounded-lg">
          {headers.map((header) => (
            <span key={header} className="font-bold text-[#740556] text-lg">
              {header}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-6">
        {issues.map((issue, index) => (
          <Card
            key={index}
            {...issue}
            status={issue.issueStatus}
            onEdit={() => handleEdit(index)}
            onDelete={() => handleDelete(index)}
            onIncrease={() => handleIncrease(index)}
            onDecrease={() => handleDecrease(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
