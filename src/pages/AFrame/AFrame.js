import { render } from '@testing-library/react';
import 'aframe';
import { Entity, Scene } from 'aframe-react'
import React from 'react'
import video1 from '../../assets/video/Route-5/Route-5-Stop-3.mp4'
import AFrameHud from '../../components/AFrameHud/AFrameHud';

class AFrameProject extends React.Component {
  render() {
    return (
      <Scene>
        <AFrameHud />
        <a-assets>
          <video id="Route-1-Stop-3" loop={true} src={video1} autoPlay="true" />
          <img id="" src=''/>
        </a-assets>

        <a-entity camera="" position="0 1.6 0" look-controls="" >
          <a-entity cursor="fuse:true;fuseTimeout:2000" geometry="primitive:ring;radiusInner:0.01;radiusOuter:0.02" position="0 0 -1.8" material="shader:flat;color:#008000" animation__mouseenter="from:1 1 1;dir:reverse;dur:2000;property:scale;startEvents:mouseenter;to:4 4 4"
            raycaster="objects: .clickable">
          </a-entity>
        </a-entity>

        <a-videosphere src="#Route-1-Stop-3" rotation="0 0 0" />

        <a-plane position="2.5 3 -1.3" rotation="160 110 0" height="0.5" width="0.5"  />

      </Scene>
    );
  }

}



export default AFrameProject