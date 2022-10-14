import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import JobsPage from "./components/jobsPage";
import Navbar from "./components/navbar";
import SignIn from "./components/signIn";
import SignUp from "./components/signup";


  
  
const App = () =>{

    return(
        <>
        <Navbar/>
        <JobsPage/>
        {/* <SignUp/>
        <SignIn/> */}

        </>
    );
}
export default App;

