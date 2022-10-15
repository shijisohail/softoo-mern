import * as React from "react";

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
    <Router>
      <Navbar />
      <Routes>
            <Route path="/"  element={<JobsPage/>} />,
          </Routes>
          <Routes>
            <Route path="/signup"  element={<SignUp />} />,
          </Routes>

    </Router>
    );
}
export default App;

