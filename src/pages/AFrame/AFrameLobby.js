import 'aframe';
import './AFrameLobby.css';
import "../../components/AFrameScript/back-to-web";
import "../../components/AFrameScript/back-to-route1";
import "../../components/AFrameScript/back-to-route2";
import "../../components/AFrameScript/back-to-route3";
import "../../components/AFrameScript/back-to-route4";
import "../../components/AFrameScript/back-to-route5";
import "../../components/AFrameScript/back-to-route7";
import "../../components/AFrameScript/text-canvas";


export default function AFrameLobby() {

  return (
    <div className="my-container">

      <a-scene>
        <a-assets>
        <canvas id="my-canvas" width="300" height="300"></canvas>
          <img id="logo-lobby" src="/img/lobby.jpg" alt="lobby" />
          <img id="logo-menu" src="/img/LogoSabiosGuias.png" alt="logo" />
          <img id="azuaje-landscape" src="/img/barranco_azuaje.jpg" alt="lanscape" />
          <img id="canarian-garden" src="/img/jardin_canario.jpg" alt="garden" />
          <img id="aguimes-history" src="/img/aguimesPreview.jpg" alt="history" />
          <img id="las-palmas" src="/img/lasPalmasPreview.jpg" alt="las-palmas" />
          <img id="british-feet" src="/img/britishFeetPreview.jpg" alt="british-feet" />
          <img id="language-inmersive" src="/img/languagePreview.jpg" alt="language-inmersive" />

        </a-assets>

        <a-sound src="/mp3/musicLobby.mp3" autoplay="true" position="0 2.5 -2.5" volume="0.75" />

        <a-entity camera="" position="0 1.6 0" look-controls="" >
          <a-entity cursor="fuse:true;fuseTimeout:2000" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.02"
            position="0 0 -1.8" material="shader:flat;color:#FFFFF"
            animation__mouseenter="from:1 1 1;dir:reverse;dur:2000;property:scale;startEvents:mouseenter;to:4 4 4"
            raycaster="objects: .clickable">
          </a-entity>
        </a-entity>

        <a-entity>
            <a-link position="1.5 1 -2.5" rotation="0 0 0" scale="0.5 0.5 0.5"
                title="Casco historico de Aguimes" image="#aguimes-history"
               ></a-link>
        </a-entity>

        <a-entity>
            <a-link position="-1.5 1 -2.5" rotation="0 0 0" scale="0.5 0.5 0.5"
                title="Las Palmas de GC" image="#las-palmas"
               ></a-link>
        </a-entity>

        <a-entity>
            <a-link position="-3 1.75 -2.5" rotation="0 0 0" scale="0.5 0.5 0.5"
                title="Huellas Britanicas" image="#british-feet"
               ></a-link>
        </a-entity>

        <a-entity>
            <a-link position="3 1.75 -2.5" rotation="0 0 0" scale="0.5 0.5 0.5"
                title="Inmersion linguistica" image="#language-inmersive"
               ></a-link>
        </a-entity>

        <a-entity>
            <a-link position="1.5 2.5 -2.5" rotation="0 0 0" scale="0.5 0.5 0.5"
                title="Jardin canario de Santa Brigida" image="#canarian-garden"
               ></a-link>
        </a-entity>

        <a-entity>
            <a-link position="-1.5 2.5 -2.5" rotation="0 0 0" scale="0.5 0.5 0.5"
                title="Barranco de Azuaje" image="#azuaje-landscape"
                ></a-link>
        </a-entity>

        <a-plane class="clickable" src="#logo-menu" width="1.25" height="0.60" position="0 2.5 -2.5" back-to-web />
        
        <a-circle class="clickable" material="opacity: 0.0; transparent: true" position="1.5 1 -2.5"  radius="0.5"  back-to-route1 ></a-circle>
        <a-circle class="clickable" material="opacity: 0.0; transparent: true" position="-1.5 1 -2.5"  radius="0.5"  back-to-route2 ></a-circle>
        <a-circle class="clickable" material="opacity: 0.0; transparent: true" position="-3 1.75 -2.5"  radius="0.5"  back-to-route3 ></a-circle>
        <a-circle class="clickable" material="opacity: 0.0; transparent: true" position="3 1.75 -2.5"  radius="0.5"  back-to-route4 ></a-circle>
        <a-circle class="clickable" material="opacity: 0.0; transparent: true" position="1.5 2.5 -2.5"  radius="0.5"  back-to-route5 ></a-circle>
        <a-circle class="clickable" material="opacity: 0.0; transparent: true" position="-1.5 2.5 -2.5"  radius="0.5"  back-to-route7 ></a-circle>

        <a-plane material="src: #my-canvas; transparent: true" position="-0.07 1 -2.5" scale="1.5 2 1" text-canvas>
        </a-plane>

        <a-videosphere src="#logo-lobby" ></a-videosphere>
      </a-scene>
    </div>
  );
}