import EditIssue from "./component/EditIssue";
import Home from "./component/Home";
import Login from "./component/Login";
import NewIssue from "./component/NewIssue";
import SignUp from "./component/SignUp";
// import axios from "axios";
// import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./component/Header";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:1337")
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error connecting to Back-End:", error);
  //     });
  // }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/add-issue" element={<NewIssue />} />
          <Route path="/edit-issue" element={<EditIssue />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
