import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditIssue from "./component/EditIssue";
import Home from "./component/Home";
import Login from "./component/Login";
import NewIssue from "./component/NewIssue";
import SignUp from "./component/SignUp";
import Main from "./component/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/add-issue" element={<NewIssue/>} />
        <Route path="/main" element={<Main/>} />
        <Route path="/edit-issue" element={<EditIssue/>} />
      </Routes>
    </Router>
  );
}
export default App;
