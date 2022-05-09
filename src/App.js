import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import AllRoutes from "./pages/AllRoutes";



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/all-routes" element={<AllRoutes />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
