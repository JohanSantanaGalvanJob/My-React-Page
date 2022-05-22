import 'aframe';
import './AFrame.css';
import { setVideoActive } from '../../components/AFrameScript/Video360Click.js';
import { useEffect } from 'react';
import MenuItem from '../../components/AFrameScript/MenuItem';
import { useParams } from 'react-router-dom';
import { infoRoutes } from '../../components/InfoRoutes/infoRoutes';
import "../../components/AFrameScript/back-to-home";

export default function AFrameProject() {
  const { route, stop } = useParams();

  useEffect(() => {
    setVideoActive();
  }, []);

  return (
    <div className="my-container">

      <a-scene>
        <a-assets>
          <video id="vid" loop={true} src={`/video/Route-${route}/Route-${route}-Stop-${stop}.mp4`} autoPlay={true} />
          <img id="logo-menu" src="/img/house-icon.png" />
          <img id="logo-volume" src="/img/sound_on.png" />
        </a-assets>

        <a-entity camera="" position="0 1.6 0" look-controls="" >
          <a-entity cursor="fuse:true;fuseTimeout:2000" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.02"
            position="0 0 -1.8" material="shader:flat;color:#FFFFF"
            animation__mouseenter="from:1 1 1;dir:reverse;dur:2000;property:scale;startEvents:mouseenter;to:4 4 4"
            raycaster="objects: .clickable">
          </a-entity>
        </a-entity>
        
        <a-entity>
          <a-link position="1.265 2.456 -2.429" rotation="0 0 0" scale="0.4 0.4 0.4"
            title="Volver al Lobby" image="#logo-menu"
          ></a-link>
        </a-entity>
        {
          infoRoutes[route - 1].stops.map((s, index) =>
            <MenuItem key={index} x=".8" y="1.6" pos={index - 1} route={route} stop={index} textToShow={s.name} available={s.video !== ""} />
          )
        }

        <a-circle class="clickable" material="opacity: 0.0; transparent: true" position="1.265 2.456 -2.429" radius="0.4" back-to-home ></a-circle>

        <a-videosphere src="#vid" ></a-videosphere>
      </a-scene>
    </div>
  );
}