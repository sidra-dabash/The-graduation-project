
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import AddNewIssue from "./AddNewIssue";
import Main from "./Main";

const API_URL = "http://localhost:1337/api/issues";

function Home() {
  const [issues, setIssues] = useState([]);

  // جلب البيانات من API
  const fetchData = async () => {
    const response = await axios.get(API_URL);
    setIssues(response.data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddNewIssue = (newIssue) => {
    setIssues((prevIssues) => [...prevIssues, newIssue]);
    fetchData(); // جلب البيانات الجديدة بعد الإضافة
  };

  return (
    <div className="bg-[#f5c0e6]">
      <Header />
      <AddNewIssue onAddNewIssue={handleAddNewIssue} />
      <Main issues={issues} setIssues={setIssues} />
    </div>
  );
}

export default Home;

