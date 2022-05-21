import { useNavigate, useParams } from "react-router-dom";
import StopMap from "../components/StopMap/StopMap";
import { infoRoutes } from "../components/InfoRoutes/infoRoutes";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import "./RouteDetail.css";
import { useEffect } from "react";

export default function RouteDetail() {
  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    //enable scroll after comming back from a-frame environment
    document.querySelector("html").classList.remove("a-fullscreen");
  });

  const showRoute = (r) => {
    return (
      <div className="route-detail-container">
        <div className="route-detail-id" style={{ backgroundColor: r.color }}>{r.id}</div>
        <div className="route-detail-name-and-description">
          <div className="route-detail-name">{r.name}</div>
          <div className="route-detail-description">{r.description}</div>
          {
            infoRoutes[id].stops.map(showStop)
          }
        </div>
      </div>
    );
  }

  const showVideo360 = (route, stop) => {
    navigate(`/video-360/${route}/${stop}`);
  }

  const showStop = (stop, index) => {
    const { video } = stop;
    return (
      <div key={index} >
        {
          video !== "" ?
            <div className="route-detail-stops route-detail-stops-with-data" onClick={() => showVideo360(parseInt(id) + 1, index + 1)}>
              <span>Parada {stop.idStop}:</span> {stop.name}. <span className="route-detail-more">más...</span>
            </div>
            :
            <div className="route-detail-stops">
              <span>Parada {stop.idStop}:</span> {stop.name}.
            </div>
        }
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <div className="route-detail-outer-container">
        {
          showRoute(infoRoutes[id])
        }
        <div className="route-detail-stop-map">
          <StopMap location={infoRoutes[id].stops[0].location} />
        </div>
      </div>
      <Footer />
    </>
  );
}