import { Entity, Scene } from 'aframe-react'
import React from 'react'
import video1 from '../../assets/video/Route-1/Route-1-Stop-3.mp4'

 const AFrameProject = () => {
   <Scene>
       <a-assets>
          <video id='skyTexture' src={video1} alt='skyTexture'/>
       </a-assets>
       <Entity primitive="a-plane" rotation="-90 0 0" height="1000"
       width="1000" material={{color:"#215763",opacity:0.70}}/>
   </Scene>
 }



 export default AFrameProject