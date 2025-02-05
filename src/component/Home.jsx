import AddNewIssue from "./AddNewIssue";
import Header from "./Header";
import Main from "./Main";
import { useState } from "react";
function Home(){
    const [issue, setIssue] = useState([]); 
    const handleAddNewIssue = (newIssue) => {
        setIssue((prevIssues) => [...prevIssues, newIssue]);
      };
    return(
        <>
        <div className="bg-[#f5c0e6]">
        <Header/>
        <AddNewIssue onAddNewIssue={handleAddNewIssue}/>
        <Main issue={issue}/>
        </div>
        </>
    )
}
export default Home;