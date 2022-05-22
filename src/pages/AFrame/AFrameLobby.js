import 'aframe';
import './AFrameLobby.css';
import "../../components/AFrameScript/back-to-web";
import "../../components/AFrameScript/back-to-route1";
import "../../components/AFrameScript/back-to-route2";
import "../../components/AFrameScript/back-to-route3";
import "../../components/AFrameScript/back-to-route4";
import "../../components/AFrameScript/back-to-route5";
import "../../components/AFrameScript/back-to-route7";


export default function AFrameLobby() {

  return (
    <div className="my-container">

      <a-scene>
        <a-assets>
          <img id="logo-lobby" src="/img/lobby.jpg" />
          <img id="logo-menu" src="/img/LogoSabiosGuias.png" />
          <img id="canarian-garden" src="/img/barranco_azuaje.jpg" />
          <img id="Azuaje-landscape" src="/img/jardin_canario.jpg" />
        </a-assets>

        <a-entity camera="" position="0 1.6 0" look-controls="" >
          <a-entity cursor="fuse:true;fuseTimeout:2000" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.02"
            position="0 0 -1.8" material="shader:flat;color:#FFFFF"
            animation__mouseenter="from:1 1 1;dir:reverse;dur:2000;property:scale;startEvents:mouseenter;to:4 4 4"
            raycaster="objects: .clickable">
          </a-entity>
        </a-entity>

        <a-entity>
            <a-link position="1.5 1 -2.5" rotation="0 0 0" scale="0.5 0.5 0.5"
                title="Casco historico de Aguimes" image=""
               ></a-link>
        </a-entity>

        <a-entity>
            <a-link position="-1.5 1 -2.5" rotation="0 0 0" scale="0.5 0.5 0.5"
                title="Las Palmas de GC" image=""
               ></a-link>
        </a-entity>

        <a-entity>
            <a-link position="-3 1.75 -2.5" rotation="0 0 0" scale="0.5 0.5 0.5"
                title="Huellas Britanicas" image=""
               ></a-link>
        </a-entity>

        <a-entity>
            <a-link position="3 1.75 -2.5" rotation="0 0 0" scale="0.5 0.5 0.5"
                title="Inmersion linguistica" image=""
               ></a-link>
        </a-entity>

        <a-entity>
            <a-link position="1.5 2.5 -2.5" rotation="0 0 0" scale="0.5 0.5 0.5"
                title="Jardin canario de Santa Brigida" image="#canarian-garden"
               ></a-link>
        </a-entity>

        <a-entity>
            <a-link position="-1.5 2.5 -2.5" rotation="0 0 0" scale="0.5 0.5 0.5"
                title="Barranco de Azuaje" image="#Azuaje-landscape"
                ></a-link>
        </a-entity>

        <a-plane class="clickable" src="#logo-menu" width="1.25" height="0.60" position="0 2.5 -2.5" back-to-web />
        
        <a-circle class="clickable" material="opacity: 0.0; transparent: true" position="1.5 1 -2.5"  radius="0.5"  back-to-route1 ></a-circle>
        <a-circle class="clickable" material="opacity: 0.0; transparent: true" position="-1.5 1 -2.5"  radius="0.5"  back-to-route2 ></a-circle>
        <a-circle class="clickable" material="opacity: 0.0; transparent: true" position="-3 1.75 -2.5"  radius="0.5"  back-to-route3 ></a-circle>
        <a-circle class="clickable" material="opacity: 0.0; transparent: true" position="3 1.75 -2.5"  radius="0.5"  back-to-route4 ></a-circle>
        <a-circle class="clickable" material="opacity: 0.0; transparent: true" position="1.5 2.5 -2.5"  radius="0.5"  back-to-route5 ></a-circle>
        <a-circle class="clickable" material="opacity: 0.0; transparent: true" position="-1.5 2.5 -2.5"  radius="0.5"  back-to-route7 ></a-circle>


        <a-videosphere src="#logo-lobby" ></a-videosphere>
      </a-scene>
    </div>
  );
}