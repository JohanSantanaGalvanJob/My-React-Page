import { render } from '@testing-library/react';
import 'aframe';
import { Entity, Scene } from 'aframe-react'
import React from 'react'
import video1 from '../../assets/video/Route-1/Route-1-Stop-3.mp4'

 class AFrameProject extends React.Component {
   render() {
     return(
    <Scene>
      <a-assets>
        <video id="Route-1-Stop-3" src={video1}></video>
      </a-assets>
       <Entity geometry={{primitive: 'box'}} material={{color: 'red'}} position={{x: 0, y: 0, z: -5}}/>
        <Entity light={{type: 'point'}}/>
        <Entity gltf-model={{src: 'virtualcity.gltf'}}/>
        <Entity text={{value: 'Hello, WebVR!'}}/>
        <a-videosphere src="Route-1-Stop-3" rotation="0 -90 0"></a-videosphere>
   </Scene>
     );
   }
   
 }



 export default AFrameProject