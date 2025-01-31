import React from "react";
function AddNewIssue() {
  return (
    <>
      <div className="flex justify-center items-center mt-8">
        <div className="flex justify-between items-center space-x-2 p-3 rounded-lg w-[800px] bg-[#8E2571] text-pink-700">
          <span className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-sky-300">
            My Issues
          </span>
          <div>
            <button class="px-6 py-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Add New Issue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddNewIssue;
