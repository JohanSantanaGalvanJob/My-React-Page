import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./pages/AllRoutes";
import Header from "./components/Header/Header";



function App() {
  return (
    
    <div className="page-container">
      <div className="content-wrap">
    <Router>
      <Routes>
      <Route path="/all-routes" element={<AllRoutes />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
    <Footer/>
    
    </div>
    
  );
}

export default App;
