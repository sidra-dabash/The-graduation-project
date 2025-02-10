import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import EditIssue from "./component/EditIssue";
import Home from "./component/Home";
import Login from "./component/Login";
import NewIssue from "./component/NewIssue";
import SignUp from "./component/SignUp";
import Main from "./component/Main";

function App() {
  // الحالة العامة للقضايا حتى تكون متاحة للجميع
  const [issues, setIssues] = useState([]);

  // دالة لإضافة قضية جديدة
  const handleAddNewIssue = (newIssue) => {
    setIssues((prevIssues) => [...prevIssues, newIssue]); // تحديث القضايا
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* تمرير `handleAddNewIssue` إلى `NewIssue` */}
        <Route path="/add-issue" element={<NewIssue onAddNewIssue={handleAddNewIssue} />} />
        {/* تمرير القضايا إلى `Main` لعرضها */}
        <Route path="/main" element={<Main issues={issues} setIssues={setIssues} />} />
        <Route path="/edit-issue" element={<EditIssue/>} />
      </Routes>
    </Router>
  );
}

export default App;
