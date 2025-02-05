import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Header({onAddNewIssue }) {
  return (
    <>
      <header className="flex flex-wrap items-center justify-between bg-[#8E2571] px-4 py-6 shadow-md">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-sky-300 shadow-lg shadow-pink-500/50 p-1 rounded">
          TRACKER ISSUE
        </h1>
        <div className="flex space-x-4">
          <Link to="/add-issue">
            <button
              // onClick={handleAddIssueClick}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Add Issue
            </button>
          </Link>
          <Link to={"/login"}>
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Login
          </button>
          </Link>
          <Link to={"/signup"}>
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Sign Up
          </button>
          </Link>
          <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-sky-300 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            Logout
          </button>
        </div>
      </header>
      <div></div>
    </>
  );
}
export default Header;
