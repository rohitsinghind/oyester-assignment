import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./screens/home";
import Login from "./screens/login";
import Signup from "./screens/signup";

function App() {

  const  { isAuthenticated } = useSelector((state)=> state.user);

  return (
    <>
      <Router>
      <Routes>
        <Route 
          path="/" 
          element={isAuthenticated ? <Home/>:<Login />} 
        />
        <Route
          path="/signup"
          element={isAuthenticated ? <Home/>:<Signup />}
        />
      </Routes>
    </Router>
    </>
  );
}

export default App;
