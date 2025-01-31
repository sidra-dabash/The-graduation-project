/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function Card({ title, desc, imageUrl, status, onEdit, onDelete }) {
  return (
    <div className="bg-[#edaedb] w-full flex flex-row justify-between items-center rounded-lg shadow p-4 mb-4">
      <img src={imageUrl} alt={title} className="w-24 h-24 object-cover rounded" />
      <div className="flex justify-around flex-1 mx-4">
        <h3 className="text-[#740556] font-bold text-lg">{title}</h3>
        <p className="text-[#740556]">{desc}</p>
        <p className={`font-semibold ${status === 'open' ? 'text-green-500' : status === 'closed' ? 'text-red-500' : 'text-yellow-500'}`}>
          {status}
        </p>
      </div>
      <div className="flex  items-center gap-2">
        <button onClick={onEdit} className="text-blue-500 hover:underline">Edit</button>
        <button onClick={onDelete} className="text-red-500 hover:underline">Delete</button>
      </div>
    </div>
  );
}

function Main() {
  const headers = ["Title", "Desc", "Status", "User", "Count"];
  const cardsData = [
    { title: "Card 1", desc: "Description 1", imageUrl: "https://via.placeholder.com/150", status: "open" },
    { title: "Card 2", desc: "Description 2", imageUrl: "https://via.placeholder.com/150", status: "closed" },
    { title: "Card 3", desc: "Description 3", imageUrl: "https://via.placeholder.com/150", status: "inprogress" },
  ];

  const handleEdit = (index) => {
    console.log(`Edit card ${index}`);
  };

  const handleDelete = (index) => {
    console.log(`Delete card ${index}`);
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
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              desc={card.desc}
              imageUrl={card.imageUrl}
              status={card.status}
              onEdit={() => handleEdit(index)}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
