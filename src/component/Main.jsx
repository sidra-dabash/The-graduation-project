/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewIssue from "./NewIssue";
import EditIssue from "./EditIssue";
function Card({
  title,
  description,
  status,
  counter,
  onEdit,
  onDelete,
  onIncrease,
  onDecrease,
}) {
  return (
    <div className="bg-[#edaedb] w-full flex flex-row justify-between items-center rounded-lg shadow p-4 mb-4 mr-4">
      {/* <img
        src={imageUrl}
        alt={title}
        className="w-24 h-24 object-cover rounded"
      /> */}
      <div className="flex justify-between flex-1 mx-4">
        <h3 className="text-[#740556] font-bold text-lg">{title}</h3>
        <p className="text-[#740556]">{description}</p>
        <p
          className={`font-semibold ${
            status === "open"
              ? "text-green-500"
              : status === "closed"
              ? "text-red-500"
              : "text-yellow-500"
          }`}
        >
          {status}
        </p>

        <div className="flex  items-center gap-2">
          <Link to={"/edit-issue"}>
            <button onClick={onEdit} className="text-green-500 hover:underline">
              Edit
            </button>
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
  const headers = ["Title", "description", "Status", "User", "counter"];
  // const [cardsData, setCardsData] = useState([
  //   {
  //     id:1,
  //     title: "Card 1",
  //     description: "Description 1",
  //     // imageUrl: "https://via.placeholder.com/150",
  //     status: "open",
  //     count: 0,
  //   },
  //   {
  //     id:2,
  //     title: "Card 2",
  //     description: "Description 2",
  //     // imageUrl: "https://via.placeholder.com/150",
  //     status: "closed",
  //     count: 0,
  //   },
  //   {
  //     id:3,
  //     title: "Card 3",
  //     description: "Description 3",
  //     // imageUrl: "https://via.placeholder.com/150",
  //     status: "inprogress",
  //     count: 0,
  //   },
  //   {
  //     id:4,
  //     title: "Card 4",
  //     description: "Description 4",
  //     // imageUrl: "https://via.placeholder.com/150",
  //     status: "inprogress",
  //     count: 0,
  //   },
  // ]);

  const handleIncrease = (index) => {
    const updatedCards = [...issues];
    updatedCards[index].counter += 1;
    setIssues(updatedCards);
  };

  const handleDecrease = (index) => {
    const updatedCards = [...issues];
    // التاكد من العدد اكبر من الصفر كي يتم انقاصه
    if (updatedCards[index].counter > 0) {
      updatedCards[index].counter -= 1;
      setIssues(updatedCards);
    }
  };

  const [editingIssue, setEditingIssue] = useState(null);
  const handleEdit = (index) => {
    // تحديد المشكلة التيسيتم تعديلها
    setEditingIssue(issues[index]);
  };

  const handleDelete = (index) => {
    // يجب الحذف من الAPI ايضا
    const updatedCards = issues.filter((_, idx) => idx !== index);
    setIssues(updatedCards);
  };

  // const handleSaveEdit = (updatedIssue) => {
  //   const updatedCards = cardsData.map((card) =>
  //     card.id === updatedIssue.id ? updatedIssue : card
  //   );
  //   setCardsData(updatedCards);
  //   setEditingIssue(null);
  // };
  // اضافة مشكلة جديدة
  const handleAddNewIssue = (newIssue) => {
    setIssues((prevData) => [...prevData, newIssue]);
  };
  return (
    <>
      <div className="bg-[#8E2571] mt-8 px-4 py-10 max-w-[1000px] mx-auto ">
        {/* Header Section */}
        <div className="flex justify-center items-center gap-5">
          <div className="flex justify-between bg-[#edaedb] w-[1000px] px-4 py-3 rounded-lg">
            {headers.map((header) => (
              <span key={header} className="font-bold text-[#740556] text-lg">
                {header}
              </span>
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-4 mt-6">
          {issues.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              // imageUrl={card.imageUrl}
              status={card.issueStatus}
              onEdit={() => setEditingIssue(index)}
              onDelete={() => handleDelete(index)}
              onIncrease={() => handleIncrease(index)}
              onDecrease={() => handleDecrease(index)}
              counter={card.counter}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
