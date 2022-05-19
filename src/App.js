import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./pages/Home";
import AllRoutes from "./pages/AllRoutes";
import Rss from "./components/RSS/Rss";
import AFrameProject from "./pages/AFrame/AFrame";



function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/Aframe" element={<AFrameProject />} />
          <Route path="/all-routes" element={<AllRoutes />} />
          <Route path="/Rss" element={<Rss />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
