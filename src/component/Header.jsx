import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Header({ onAddNewIssue }) {
  return (
    <>
      <header className="flex flex-wrap items-center justify-center md:justify-between bg-[#8E2571] px-4 py-6 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-sky-300 shadow-lg shadow-pink-500/50 p-1 rounded w-full text-center md:w-auto md:text-left">
          TRACKER ISSUE
        </h1>
        <div className="flex flex-wrap w-full md:w-auto justify-center md:justify-end gap-2 md:gap-4 mt-4 md:mt-0">
          <Link
            to="/"
            className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-sm md:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Home
          </Link>
          <Link to="/add-issue">
            <button className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-sm md:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Add Issue
            </button>
          </Link>
          <Link to={"/login"}>
            <button className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-sm md:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Login
            </button>
          </Link>
          <Link to={"/signup"}>
            <button className="px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-sm md:text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              Sign Up
            </button>
          </Link>
        </div>
      </header>
      <div></div>
    </>
  );
}

export default Header;
