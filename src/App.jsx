import EditIssue from "./component/EditIssue";
import Home from "./component/Home";
import Login from "./component/Login";
import NewIssue from "./component/NewIssue";
import SignUp from "./component/SignUp";
import axios from 'axios';
import { useEffect } from "react";
function App() {
  useEffect(() => {
    axios.get('http://localhost:5000')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('Error connecting to Back-End:', error);
      });
  }, []);

  return (
    <>
          {/* <Login /> */}
          <SignUp/>
          {/* <Home/> */}
          {/* <NewIssue/> */}
          {/* <EditIssue/> */}
    </>
  ) 
}

export default App
