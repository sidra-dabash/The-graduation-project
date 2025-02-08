import EditIssue from "./component/EditIssue";
import Home from "./component/Home";
import Login from "./component/Login";
import NewIssue from "./component/NewIssue";
import SignUp from "./component/SignUp";
import { useEffect, useState } from "react";
// import axios from "axios";
// import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./component/Header";
function App() {
  const [issues, setIssues] = useState([]);

  const handleAddNewIssue = (newIssue) => {
    setIssues((prevIssues) => [...prevIssues, newIssue]);
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/add-issue" element={<NewIssue onAddNewIssue={handleAddNewIssue} />} />
          {/* <Route path="/main" element={<Main issues={issues} setIssues={setIssues} />} /> */}
          <Route path="/edit-issue" element={<EditIssue />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
