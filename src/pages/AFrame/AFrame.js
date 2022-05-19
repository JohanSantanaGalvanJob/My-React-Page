import { render } from '@testing-library/react';
import 'aframe';
import { Entity, Scene } from 'aframe-react'
import React from 'react'
import video1 from '../../assets/video/Route-1/Route-1-Stop-3.mp4'
import AFrameHud from '../../components/AFrameHud/AFrameHud';

 class AFrameProject extends React.Component {
   render() {
     return(
    <Scene>
       <AFrameHud/>
      <a-assets>
        <video id="Route-1-Stop-3" loop={true} src={video1} autoPlay="true"></video>
      </a-assets>
      <a-camera>
            <a-cursor raycaster="objects: .clickable"></a-cursor>
        </a-camera>
        <a-videosphere src="#Route-1-Stop-3" ></a-videosphere>
   </Scene>
  
     );
   }
   
 }



 export default AFrameProject