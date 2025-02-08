import axios from "axios";
import AddNewIssue from "./AddNewIssue";
import Header from "./Header";
import Main from "./Main";
import { useEffect, useState } from "react";
const API_URL = "http://localhost:1337/api/issues";
function Home() {
  const [issues, setIssues] = useState([]);
  const fetchData = async () => {
    const response = await axios.get(API_URL);
    console.log(response);
    setIssues(response.data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleAddNewIssue = (newIssue) => {
    setIssues((prevIssues) => [...prevIssues, newIssue]);
  };
  return (
    <>
      <div className="bg-[#f5c0e6]">
        <Header />
        {/* هاد مجرد مكون بعرض نص 
        المكون الي بضيف بيانات NewIssue */}
        <AddNewIssue />
        <Main issues={issues} setIssues={setIssues} />
      </div>
    </>
  );
}
export default Home;
