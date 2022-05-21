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
import RouteDetail from "./pages/RouteDetail";
import AFrameLobby from "./pages/AFrame/AFrameLobby";



function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/video-360/:route/:stop" element={<AFrameProject />} />
        <Route path="/video-360" element={<AFrameLobby />} />
          <Route path="/all-routes" element={<AllRoutes />} />
          <Route path="/route-detail/:id" element={<RouteDetail />} />
          <Route path="/Rss" element={<Rss />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
