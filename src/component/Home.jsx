import AddNewIssue from "./AddNewIssue";
import Header from "./Header";
import Main from "./Main";
function Home(){
    return(
        <>
        <div className="bg-[#f5c0e6]">
        <Header/>
        <AddNewIssue/>
        <Main/>
        </div>
        </>
    )
}
export default Home;