import { infoRoutes } from "../components/InfoRoutes/infoRoutes";
import "./AllRoutes.css";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Header from "../components/Header/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Sidebar from "../components/SideBar/index"

export default function AllRoutes() {
  const navigate = useNavigate();

  const selectStop = (stop) => {
    navigate(`/route-detail/${stop - 1}`);
  }

  const showRoute = (r, index) => {
    return (
      <div key={index} className="all-routes-route-container" onClick={() => selectStop(r.id)}>
        <div className="all-routes-route-id" style={{ backgroundColor: r.color }}>{r.id}</div>
        <div className="all-routes-route-name-and-description">
          <div className="all-routes-route-name">{r.name}</div>
          <div className="all-routes-route-description">{r.description}</div>
        </div>
      </div>
    );
  }

  const[isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

  return (
    <>
      <ScrollToTop />
      <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Header toggle={toggle}/>
      <div className="all-routes-container">
        <div>
          <h1 className="all-routes-title">Rutas</h1>
          {
            infoRoutes.map(showRoute)
          }
        </div>
      </div>
    </>
  );
}