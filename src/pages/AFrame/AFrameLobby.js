import 'aframe';
import './AFrameLobby.css';
import "../../components/AFrameScript/back-to-web";

export default function AFrameLobby() {

  return (
    <div className="my-container">

      <a-scene>
        <a-assets>
          <img id="logo-lobby" src="/img/lobby.jpg" />
          <img id="logo-menu" src="/img/LogoSabiosGuias.png" />
        </a-assets>

        <a-entity camera="" position="0 1.6 0" look-controls="" >
          <a-entity cursor="fuse:true;fuseTimeout:2000" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.02"
            position="0 0 -1.8" material="shader:flat;color:#FFFFF"
            animation__mouseenter="from:1 1 1;dir:reverse;dur:2000;property:scale;startEvents:mouseenter;to:4 4 4"
            raycaster="objects: .clickable">
          </a-entity>
        </a-entity>

        <a-plane class="clickable" src="#logo-menu" width="1.25" height="0.60" position="0 2.5 -2.5" back-to-web />

        <a-circle color="#CCC" position="2 2.5 -2.5"  radius="0.4"></a-circle>

        <a-videosphere src="#logo-lobby" ></a-videosphere>
      </a-scene>
    </div>
  );
}